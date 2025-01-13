import {createMarket} from "./commands/create_market";

require('dotenv').config();
import {program} from "commander"
import {initializeProgram} from "./commands/initialize.js";

import {createDialectSdk} from "./commands/createDialectSdk"
import {createDialectNotification} from "./commands/createDialectNotification";
import {reallocRoundAccount} from "./commands/realloc_round_account";
import {closeRoundAccount} from "./commands/close_round_account";



program
    .command('initialize-program')
    .argument('<protocol_admin>', "Admin account of the protocol")
    .argument('<base_points_fee>', "20 points are 2%. 20/1000*100 = 2%")
    .argument('<protocol_fee_collector>', "Account fee collector")
    .action(async (protocolAdmin, basePointsFee, protocolFeeCollector) =>{
        await initializeProgram(protocolAdmin, basePointsFee,protocolFeeCollector)
})

program
    .command('create-market')
    .argument('<price_feed_sol_usd_account>', "SOL/USD price account")
    .argument('<price_feed_id>', "Market pyth price feed")
    .argument('<round_duration>', "Round durantion in seconds 300 = 5min")
    .argument('<min_top_up>', "Min top up to enter in a round 0.001 ~20cents is recommended")
    .argument('<max_top_up>', "Max top up, a limit should be better to allow competitive rounds")
    .argument('<market_ticker>', "E.g SOL, PYTH, BTC...")
    .argument('<flat_range>', 'E.g 5/10000*100 is 0.05%. flat range is the price deviation from the opening price it is basic points 10000 for 100%. ')
    .argument('<market_fee>', 'Market creator can setup fees and earn')
    .argument('<market_fee_collector_account>', 'Market collector fee account')

    .action(async (priceFeedSolUsdAccount, priceFeedId, roundDuration, minTopUp,  maxTopUp, marketTicker, flatRange, marketFee, marketFeeCollectorAccount) =>{
        await createMarket(priceFeedSolUsdAccount, priceFeedId, roundDuration, minTopUp,  maxTopUp, marketTicker, flatRange, marketFee, marketFeeCollectorAccount)
    })

program
    .command('realloc-round-account')
    .description('Realloc/Resize round account to increase data')
    .argument('<round_pda>', 'Round to increase account address')
    .argument('<market_pda>', 'Market account address')
    .action(async (roundPda, marketPda) =>{
        await reallocRoundAccount(roundPda, marketPda)
    })

program
    .command('close-round-account')
    .description('Close round account and refund to treasury')
    .argument('<market_pda>', 'Market account address')
    .argument('<force>', 'Force the closing account')
    .argument('<round_pda>', 'Round id')
    .action(async (marketPda, force, roundPda) =>{
        // Convert force argument to a boolean
        const isForce = force.toLowerCase() === 'true';
        await closeRoundAccount(marketPda, isForce, roundPda)
    })

program
    .command('create-dialect-sdk')
    .description('Create the dialect sdk')
    .action(async () =>{
        await createDialectSdk()
    })

program
    .command('create-dialect-notification')
    .description('Create the dialect notification')
    .argument('<human_readable_id>', 'Human readable id e.g: latest_updates ')
    .argument('<name>', 'Name of the notification e.g: Latest Updates')
    .argument('<ordering_priority>', 'number of the ordering priority e.g: 0')
    .argument('<trigger_description>', 'Get the latest news, events, and changes in BattleBoosters')
    .argument('<enable_by_default>', 'Enable this notification by default')
    .action(async (human_readable_id: string, name: string, ordering_priority: number, trigger_description: string, enable_by_default: boolean) =>{
        await createDialectNotification(human_readable_id, name, ordering_priority, trigger_description, enable_by_default)
    })


program.parse(process.argv);
