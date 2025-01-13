import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Keypair, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {Kumatoro} from "../kumatoro";
import {BN} from "@coral-xyz/anchor";


const closeRoundAccount = async (market_pda: string, force: boolean, round_counter: number) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Kumatoro>;

    const {
        admin_account,
        treasury_pda, global_pda
    } = initAccounts(program);

    const [round_pda, round_bump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from('kumatoro'), Buffer.from('round'), new anchor.web3.PublicKey(market_pda).toBuffer(), new BN(round_counter).toBuffer('le', 8)],
        program.programId
    );

    const roundData = await program.account.roundData.fetch(round_pda)
    let rent_receiver = roundData.creator ? roundData.creator : new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_PAYOUT_ACCOUNT!);


    try {

        const accounts = {
            signer: admin_account.publicKey,
            roundPda: round_pda,
            marketPda: new anchor.web3.PublicKey(market_pda),
            rentReceiverAccount: rent_receiver,
            globalPda: global_pda
        }
        const tx = await program.methods.closeRound(
            force
        ).accounts(
            accounts
        ).signers([admin_account]).rpc();
        console.log("Round account successfully closed: ", tx)
    }catch (e){
        console.log(e)
    }
}



export { closeRoundAccount}