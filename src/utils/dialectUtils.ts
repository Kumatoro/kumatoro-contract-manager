import {
    DappMessageActionType,
    Dialect,
    DialectCloudEnvironment,
    DialectSdk,
    Dapp
} from '@dialectlabs/sdk';

import {
    Solana,
    SolanaSdkFactory,
    NodeDialectSolanaWalletAdapter
} from '@dialectlabs/blockchain-sdk-solana';

//@ts-ignore
const environment: DialectCloudEnvironment = process.env.NEXT_PUBLIC_DIALECT_ENV;
export async function initializeDialectSdk() {

    const sdk = Dialect.sdk(
        {
            environment,
        },
        SolanaSdkFactory.create({
            // IMPORTANT: must set environment variable DIALECT_SDK_CREDENTIALS
            // to your dapp's Solana keypair e.g. [170,23, . . . ,300]
            wallet: NodeDialectSolanaWalletAdapter.create(),
        }),
    );

    const dapp = await sdk.dapps.find();
    return { sdk, dapp };
}