import {initializeDialectSdk} from "../utils/dialectUtils";

const createDialectNotification = async (humanReadableId: string, name: string, orderingPriority: number,  triggerDescription: string, enableByDefault: boolean) => {

    const { sdk, dapp } = await initializeDialectSdk();

    if (dapp && "notificationTypes" in dapp) {
        let allNotificationTypes = await dapp.notificationTypes.findAll();
        // Find the notification type with the specific humanReadableId
        let notificationType = allNotificationTypes.find(nt => nt.humanReadableId === humanReadableId);
        if (!notificationType) {
                await dapp.notificationTypes.create({
                    humanReadableId: humanReadableId,
                    name: name,
                    orderingPriority: Number(orderingPriority),
                    trigger: triggerDescription,
                    defaultConfig: {
                        enabled: Boolean(enableByDefault),
                    },
                });
            allNotificationTypes = await dapp.notificationTypes.findAll();
        }
    }
}

export { createDialectNotification }