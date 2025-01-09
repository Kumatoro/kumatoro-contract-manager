import {getProgram, initAccounts, loadWallet} from "../utils/connection.js";
import * as anchor from "@coral-xyz/anchor";
import {Keypair, LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import {Kumatoro} from "../kumatoro";
import {BN} from "@coral-xyz/anchor";


const createMarket = async (price_feed_sol_usd_account: string, price_feed_id: string, round_duration: number, min_top_up:number, max_top_up: number, market_ticker: string, flat_range: number, market_fee: number, market_fee_collector_account: string) => {
    const wallet = loadWallet();
    const programId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_PROGRAM_ID!);
    const program = await getProgram(wallet, programId) as anchor.Program<Kumatoro>;

    const {
        admin_account,
        treasury_bump,
        treasury_pda,
        global_bump,
        global_pda
    } = initAccounts(program);

    const globalData = await program.account.globalData.fetch(global_pda);


    const [market_pda, market_bump] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from('kumatoro'), Buffer.from('market'), globalData.marketCounter.toBuffer('le', 8),],
        program.programId
    );
    const price_feed_sol_usd_account_pubkey = new anchor.web3.PublicKey(price_feed_sol_usd_account);
    const market_fee_collector_account_pubkey = new anchor.web3.PublicKey(market_fee_collector_account);
    try {

        const accounts = {
            creator: admin_account.publicKey,
            marketPda: market_pda,
            globalPda: global_pda,
            treasuryPda: treasury_pda,
            priceFeedAccount: price_feed_sol_usd_account_pubkey,
        }

        const tx = await program.methods.createMarket(
            price_feed_id,
            new BN(round_duration),
            market_ticker,
            new BN(min_top_up * LAMPORTS_PER_SOL),
            new BN(max_top_up * LAMPORTS_PER_SOL),
            flat_range,
            market_fee,
            market_fee_collector_account_pubkey,
        ).accounts(
            accounts
        ).signers([admin_account]).rpc();
        console.log("Market created: ", tx)
    }catch (e){
        console.log(e)
    }
}



export { createMarket}