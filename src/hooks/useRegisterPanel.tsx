import {AnchorProvider, Program} from "@project-serum/anchor";
import {BN} from "@project-serum/anchor";
import {useWallet} from "@solana/wallet-adapter-react";
import {clusterApiUrl, Commitment, Connection, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

import idl from "../assets/idl.json";
import {Buffer} from "buffer";

function useRegisterPanel() {
    const {publicKey, wallet, sendTransaction} = useWallet();

    const registerPanel = async (region: BN, apu: number, power: number, ppu: BN, age: BN) => {

        if (!publicKey || !wallet) {
            return;
        }

        const PROGRAM_ID = new PublicKey("6X6MoaaQDpcGDgtXzCwQgwzinS6tUoZdAHcu4kqhNvho");
        const getTokenProgram = () => new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        const getATokenPK = () => new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")

        const tokenProgramPK = getTokenProgram();

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

        const provider = await getProvider()
        /* create the program interface combining the idl, program ID, and provider */
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const program = new Program(idl, PROGRAM_ID, provider);

        const [tokenMintPk] = await PublicKey.findProgramAddress(
            [Buffer.from("token-mint"), publicKey.toBuffer()],
            PROGRAM_ID
        );

        const [panelPk] = await PublicKey.findProgramAddress(
            [Buffer.from("panel"), publicKey.toBuffer()],
            PROGRAM_ID
        );

        // Send transaction
        const recipientATA = PublicKey.findProgramAddressSync(
            [
                publicKey.toBuffer(),
                tokenProgramPK.toBuffer(),
                tokenMintPk.toBuffer(),
            ],
            getATokenPK()
        )[0];

        const transaction = new Transaction();

        const callRegisterPanel = await program.methods
            .registerPanel()
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
            .instruction()

        const callOwnerMintToken = await program.methods
            .ownerMintToken()
            .accounts({
                newRecipient: recipientATA,
                owner: publicKey,
                tokenMint: tokenMintPk,
                tokenProgram: tokenProgramPK,
            })
            .instruction();

        transaction.add(callRegisterPanel, callInitializePanel, callInitTokenMint, callOwnerMintToken);
        transaction.recentBlockhash = (
            await (await getProvider()).connection.getLatestBlockhash()
        ).blockhash;
        transaction.feePayer = publicKey;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const signature = await sendTransaction(transaction, (await getProvider()).connection, opts.preflightCommitment);
    }

    return {
        registerPanel,
    }

}




export default useRegisterPanel;
