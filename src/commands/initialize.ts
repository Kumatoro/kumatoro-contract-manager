import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Keypair, PublicKey} from "@solana/web3.js";
import {Kumatoro} from "../kumatoro";


const initializeProgram = async (protocol_admin_account: string, protocol_fee: number, payout_account: string) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Kumatoro>;


    const payout_account_pubkey = new PublicKey(payout_account)
    const admin_account_pubkey = new PublicKey(protocol_admin_account)
    const {
        admin_account,
        treasury_bump,
        treasury_pda,
        global_bump,
        global_pda
    } = initAccounts(program);

    try {
         const accounts = {
            creator: admin_account.publicKey,
            globalPda: global_pda,
            treasuryPda: treasury_pda,
        }

        const tx = await program.methods
            .initializeGlobal(
                treasury_bump,
                admin_account_pubkey,
                protocol_fee,
                payout_account_pubkey
            )
            .accounts(accounts)
            .signers([admin_account]) // Include new_account as a signer
            .rpc();

        console.log("Program initialized: ", tx)
    }catch (e){
        console.log(e)
    }
}



export { initializeProgram}