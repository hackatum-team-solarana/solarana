import { Program } from "@project-serum/anchor";
import { AnchorProvider, BN } from "@project-serum/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Commitment, Connection, PublicKey, TransactionInstruction, clusterApiUrl } from "@solana/web3.js";


const PROGRAM_ID = new PublicKey("6X6MoaaQDpcGDgtXzCwQgwzinS6tUoZdAHcu4kqhNvho");

const tokenProgram = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

const aTokenPK = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");

const opts: { preflightCommitment: Commitment } = {
    preflightCommitment: "processed"
};

async function getProvider(wallet: AnchorWallet) {
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


const generateMintToken = async (wallet: AnchorWallet, program: Program): Promise<[ PublicKey | null, TransactionInstruction | null ]> => {
    const random = randomString();
  
    const [mintTokenPk] = await PublicKey.findProgramAddress(
      [
        Buffer.from("token-mint"),
        wallet.publicKey.toBuffer(),
        Buffer.from(random),
      ],
      PROGRAM_ID
    );
    console.log("mintTokenPk", mintTokenPk.toString());
  
    const callInitTokenMint = await program.methods
      .initTokenMint(random)
      .accounts({
        newTokenMint: mintTokenPk,
        signer: wallet.publicKey,
      })
      .instruction();
  
    return [ mintTokenPk, callInitTokenMint ];
}


export {
    PROGRAM_ID,
    tokenProgram,
    aTokenPK,
    opts,
    getProvider,
    randomString,
    generateMintToken,
};
