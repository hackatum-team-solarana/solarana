import {AnchorProvider, Program} from "@project-serum/anchor";
import {BN} from "@project-serum/anchor";
import {useAnchorWallet, useWallet} from "@solana/wallet-adapter-react";
import { clusterApiUrl, Commitment, Connection, PublicKey, SystemProgram } from "@solana/web3.js";

import idl from "../assets/idl.json";
import {Buffer} from "buffer";

function useRegisterPanel() {
    const {publicKey} = useWallet();
    const wallet = useAnchorWallet();

    const registerPanel = async (region: BN, apu: number, power: number, ppu: BN, age: BN) => {

        if (!publicKey || !wallet) {
            return;
        }

        const PROGRAM_ID = new PublicKey("6X6MoaaQDpcGDgtXzCwQgwzinS6tUoZdAHcu4kqhNvho");
        const getTokenProgram = () => new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        const getATokenPK = () => new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")

        const opts: { preflightCommitment: Commitment } = {
            preflightCommitment: "processed"
        }

        async function getProvider() {
            /* create the provider and return it to the caller */
            /* network set to local network for now */
            const network = clusterApiUrl("devnet");
            const connection = new Connection(network, opts.preflightCommitment);

            const provider = new AnchorProvider(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                connection, wallet, opts.preflightCommitment,
            );
            return provider;
        }


        const randomString = () => (new BN(Math.random() * Math.pow(2, 32))).toString();


        const generatePanel = async () => {
            const random = randomString();

            const [panelPk] = await PublicKey.findProgramAddress(
                [
                Buffer.from("panel"),
                publicKey.toBuffer(),
                Buffer.from(random)
                // Buffer.from("1"),
                // Buffer.from(randomInt.toString()),
                ],
                PROGRAM_ID
            );
            console.log("panelPk", panelPk.toString());


            await program.methods
                .registerPanel(random)
                .accounts({
                    newPanel: panelPk,
                    owner: publicKey,
                    systemProgram: SystemProgram.programId,
                })
                .rpc();
                
            return panelPk;
        }


        const generateMintToken = async () => {
            const random = randomString();

            const [mintTokenPk] = await PublicKey.findProgramAddress(
                [
                Buffer.from("token-mint"),
                publicKey.toBuffer(),
                Buffer.from(random),
                ],
                PROGRAM_ID
            );
            console.log("mintTokenPk", mintTokenPk.toString());

            await program.methods
                .initTokenMint(random)
                .accounts({
                newTokenMint: mintTokenPk,
                signer: publicKey,
                })
                .rpc();

            return mintTokenPk;
        }


        const provider = await getProvider()
        /* create the program interface combining the idl, program ID, and provider */
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const program = new Program(idl, PROGRAM_ID, provider);

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
        );*/

        const panelPk = await generatePanel();
        console.log("panelPk", panelPk.toString());

        const tokenProgramPK = getTokenProgram();

        await program.methods
            .initializePanel(region, apu, power, ppu, age)
            .accounts({
                panel: panelPk
            })
            .rpc();

        const mintTokenPk = await generateMintToken();

        // Send transaction
        const recipientATA = PublicKey.findProgramAddressSync(
            [
                publicKey.toBuffer(),
                tokenProgramPK.toBuffer(),
                mintTokenPk.toBuffer(),
            ],
            getATokenPK()
        )[0];

        /*const callRegisterPanel = await program.methods
            .registerPanel(randomNumber)
            .accounts({
                newPanel: panelPk,
                owner: publicKey,
                systemProgram: SystemProgram.programId,
            })
            .instruction();

        const callInitializePanel = await program.methods
            .initializePanel(region, apu, power, ppu, age)
            .accounts({
                panel: panelPk
            })
            .instruction();

        const callInitTokenMint = await program.methods
            .initTokenMint()
            .accounts({
                newTokenMint: tokenMintPk,
                signer: publicKey,
            })
            .instruction()*/

        await program.methods
            .ownerMintToken()
            .accounts({
                newRecipient: recipientATA,
                owner: publicKey,
                tokenMint: mintTokenPk,
                tokenProgram: tokenProgramPK,
            })
            .rpc();

        /*transaction.add(callRegisterPanel, callInitializePanel, callInitTokenMint, callOwnerMintToken);
        transaction.recentBlockhash = (
            await (await getProvider()).connection.getLatestBlockhash()
        ).blockhash;
        transaction.feePayer = publicKey;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const signature = await sendTransaction(transaction, (await getProvider()).connection, opts.preflightCommitment, { skipPreflight: true });
        console.log(signature);*/
    }

    return {
        registerPanel,
    }

}




export default useRegisterPanel;
