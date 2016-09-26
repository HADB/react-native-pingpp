import {NativeModules, NativeAppEventEmitter} from 'react-native';

let savedCallback = undefined;

NativeAppEventEmitter.addListener('pingppPayResult', response => {
    const callback = savedCallback;
    savedCallback = undefined;
    callback && callback(response);
});

function waitForResponse() {
    return new Promise((resolve, reject) => {
        savedCallback = response => {
            savedCallback = undefined;
            const {result, errorCode, errorMessage} = response;

            if (result && result === 'success') {
                resolve(result);
            } else {
                const error = new Error(errorMessage);
                error.errorCode = errorCode;
                reject(error);
            }
        };
    });
}

export default {
    pay : async function(charge) {
        if (typeof charge !== 'string') {
            charge = JSON.stringify(charge);
        }
        NativeModules.Pingpp.pay(charge);
        return await waitForResponse();
    }
};
