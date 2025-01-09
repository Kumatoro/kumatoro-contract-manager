import * as anchor from '@coral-xyz/anchor';
import {Connection, Keypair, PublicKey} from '@solana/web3.js';
import fs from 'fs';
import {Kumatoro} from "../kumatoro";

// Function to load the wallet from a JSON file
export function loadWallet(): anchor.Wallet {
    const keypairJSON = fs.readFileSync(process.env.WALLET_PATH!, 'utf-8');
    const keypairData = JSON.parse(keypairJSON);
    const keypair = Keypair.fromSecretKey(Uint8Array.from(keypairData));
    return new anchor.Wallet(keypair);
}

// Function to create a program instance
export async function getProgram(wallet: anchor.Wallet, programId: anchor.web3.PublicKey): Promise<anchor.Program<Kumatoro>> {

    const connection = new Connection(process.env.PRIVATE_SOLANA_NETWORK_URL!, 'processed');
    const provider = new anchor.AnchorProvider(connection, wallet, {
        preflightCommitment: 'processed',
    });
    anchor.setProvider(provider);
    //@ts-ignore
    const programPublicKey = new PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID);
    const idl = await anchor.Program.fetchIdl(programPublicKey, provider);
    return new anchor.Program(<Kumatoro>idl);

}

export function initAccounts (program: anchor.Program<Kumatoro>) {


    const [treasury_pda, treasury_bump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from('kumatoro'), Buffer.from('treasury')],
        program.programId
    );
    const [global_pda, global_bump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from('kumatoro'), Buffer.from('global')],
        program.programId
    );

    // @ts-ignore
    const adminAccount = JSON.parse(process.env.ADMIN_ACCOUNT);
    const admin_account = anchor.web3.Keypair.fromSecretKey(
        new Uint8Array(adminAccount)
    );

    return {
        admin_account,
        treasury_pda,
        global_pda,
        treasury_bump,
        global_bump
    };

};

