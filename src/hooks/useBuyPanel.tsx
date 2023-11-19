import { Program } from "@project-serum/anchor";
import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { aTokenPK, generateMintToken, getProvider, tokenProgram, PROGRAM_ID, opts } from "./utils";
import { BN } from "@project-serum/anchor";
import idl from "../assets/idl.json";

const useBuyPanel = () => {
    const {publicKey, sendTransaction} = useWallet();
    const wallet = useAnchorWallet();


    const buyPanel = async (providerKey: string) => {

        if (!publicKey || !wallet) {
            return;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const program = new Program(idl, PROGRAM_ID, await getProvider(wallet));

        const [ tokenMintPk, callInitTokenMint ] = await generateMintToken(wallet, program);

        if (!tokenMintPk || !callInitTokenMint) {
            return;
        }

        const senderATA = new PublicKey(providerKey);

        const recipientTokenATA = PublicKey.findProgramAddressSync(
            [
              wallet.publicKey.toBuffer(),
              tokenProgram.toBuffer(),
              tokenMintPk.toBuffer(),
            ],
            aTokenPK
        )[0];

        const transaction = new Transaction();

        const callInitTokenAccount = await program.methods
            .initTokenAccount(new BN(1))
            .accounts({
            signer: wallet.publicKey,
            tokenMint: tokenMintPk,
            recipientToken: recipientTokenATA,
            signerToken: senderATA,
            tokenProgram: tokenProgram,
            })
            .instruction()

        transaction.add(callInitTokenMint, callInitTokenAccount);

        transaction.recentBlockhash = (
            await (await getProvider(wallet)).connection.getLatestBlockhash()
        ).blockhash;
        transaction.feePayer = publicKey;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const signature = await sendTransaction(transaction, (await getProvider()).connection, opts.preflightCommitment, { skipPreflight: true });
        console.log(signature);
    }

    return {
        buyPanel
    }
}


export default useBuyPanel;
