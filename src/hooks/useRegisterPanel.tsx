import { Program } from "@project-serum/anchor";
import {BN} from "@project-serum/anchor";
import {useAnchorWallet, useWallet} from "@solana/wallet-adapter-react";
import { PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";
import { PROGRAM_ID, tokenProgram, aTokenPK, opts, getProvider, randomString, generateMintToken } from "./utils";
import idl from "../assets/idl.json";

import {Buffer} from "buffer";

function useRegisterPanel() {
    const {publicKey, sendTransaction} = useWallet();
    const wallet = useAnchorWallet();

    const registerPanel = async (region: BN, apu: number, power: number, ppu: BN, age: BN) => {

        if (!publicKey || !wallet) {
            return;
        }


        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const program = new Program(idl, PROGRAM_ID, await getProvider(wallet));


        const generatePanel = async (): Promise<[ PublicKey, TransactionInstruction ]> => {
            const random = randomString();
          
            const [panelPk] = await PublicKey.findProgramAddress(
              [
                Buffer.from("panel"),
                wallet.publicKey.toBuffer(),
                Buffer.from(random)
                // Buffer.from("1"),
                // Buffer.from(randomInt.toString()),
              ],
              PROGRAM_ID
            );
            console.log("panelPk", panelPk.toString());
          
          
            const callRegisterPanel = await program.methods
                .registerPanel(random)
                .accounts({
                  newPanel: panelPk,
                  owner: wallet.publicKey,
                  systemProgram: SystemProgram.programId,
                })
                .instruction();
              
            return [ panelPk, callRegisterPanel ];
        }

        /* create the program interface combining the idl, program ID, and provider */

        /*const [tokenMintPk] = await PublicKey.findProgramAddress(
            [Buffer.from("token-mint"), publicKey.toBuffer()],
            PROGRAM_ID
        );

        const randomNumber: BN = new BN(Math.random() * Math.pow(2, 32));
        console.log("random", randomNumber);

        const [panelPk] = await PublicKey.findProgramAddress(
            [
                Buffer.from("panel"),
                publicKey.toBuffer(),
                Buffer.from(randomNumber.toString()),
            ],
            PROGRAM_ID
        );*/;

        const transaction = new Transaction();

        const [ panelPk, callRegisterPanel ] = await generatePanel();
        console.log("panelPk", panelPk.toString());

        const callInitializePanel = await program.methods
        .initializePanel(
            region,
            apu,
            power,
            ppu,
            age
        )
        .accounts({
            panel: panelPk,
        })
        .instruction();

        const [ mintTokenPk, callInitTokenMint ] = await generateMintToken(wallet, program);

        if (!mintTokenPk || !callInitTokenMint) {
            return;
        }

        // Send transaction
        const recipientATA = PublicKey.findProgramAddressSync(
            [
                wallet.publicKey.toBuffer(),
                tokenProgram.toBuffer(),
                mintTokenPk.toBuffer(),
            ],
            aTokenPK
        )[0];

        const callOwnerMintToken = await program.methods
        .ownerMintToken()
        .accounts({
            newRecipient: recipientATA,
            owner: wallet.publicKey,
            tokenMint: mintTokenPk,
            tokenProgram: tokenProgram,
        })
        .instruction();

        transaction.add(callRegisterPanel, callInitializePanel, callInitTokenMint, callOwnerMintToken);
        transaction.recentBlockhash = (
            await (await getProvider(wallet)).connection.getLatestBlockhash()
        ).blockhash;
        transaction.feePayer = publicKey;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const signature = await sendTransaction(transaction, (await getProvider(wallet)).connection, opts.preflightCommitment, { skipPreflight: true });
        console.log(signature);
    }

    return {
        registerPanel,
    }

}


export default useRegisterPanel;
