import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Keypair, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {Kumatoro} from "../kumatoro";
import {BN} from "@coral-xyz/anchor";


const reallocRoundAccount = async (round_counter: number, market_pda: string) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Kumatoro>;

    const {
        admin_account,
    } = initAccounts(program);

    const [round_pda, round_bump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from('kumatoro'), Buffer.from('round'), new anchor.web3.PublicKey(market_pda).toBuffer(), new BN(round_counter).toBuffer('le', 8)],
        program.programId
    );

    try {

        const accounts = {
            signer: admin_account.publicKey,
            roundPda: round_pda,
            marketPda: new anchor.web3.PublicKey(market_pda),
        }
        const tx = await program.methods.reallocRound(
        ).accounts(
            accounts
        ).signers([admin_account]).rpc();
        console.log("Round reallocated success: ", tx)
    }catch (e){
        console.log(e)
    }
}



export { reallocRoundAccount}