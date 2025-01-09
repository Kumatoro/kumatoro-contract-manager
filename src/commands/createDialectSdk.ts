import {
    Dialect,
    DialectCloudEnvironment,
    DialectSdk,
} from '@dialectlabs/sdk';

import {
    Solana,
    SolanaSdkFactory,
    NodeDialectSolanaWalletAdapter
} from '@dialectlabs/blockchain-sdk-solana';

//@ts-ignore
const environment: DialectCloudEnvironment = process.env.NEXT_PUBLIC_DIALECT_ENV;

const createDialectSdk = async () => {
    try {
        const sdkInit: DialectSdk<Solana> = Dialect.sdk(
            {
                environment,
            },
            SolanaSdkFactory.create({
                // IMPORTANT: must set environment variable DIALECT_SDK_CREDENTIALS
                // to your dapp's Solana keypair e.g. [170,23, . . . ,300]
                wallet: NodeDialectSolanaWalletAdapter.create(),
            }),
        );
        console.log(sdkInit)

        //const { sdk, dapp } = await initializeDialectSdk();
        // let allNotificationTypes = await dapp.notificationTypes.findAll();
        // // Find the notification type with the specific humanReadableId
        // let notificationType = allNotificationTypes.find(nt => nt.humanReadableId === 'general_updates');
        // if (!notificationType) {
        //     await dapp.notificationTypes.create({
        //         humanReadableId: 'latest_updates',
        //         name: 'Latest Updates',
        //         orderingPriority: 0,
        //         trigger: 'Get the latest news, events, and changes in BattleBoosters',
        //         defaultConfig: {
        //             enabled: true,
        //         },
        //     });
        //     // Refresh the list after creation
        //     allNotificationTypes = await dapp.notificationTypes.findAll();
        // }
    }catch (e){
        console.log(e)
    }
}

export { createDialectSdk }