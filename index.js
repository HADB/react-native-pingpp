import {NativeModules, NativeAppEventEmitter} from 'react-native';

let nativeAPI = NativeModules.Pingpp;

let savedCallback = undefined;

NativeAppEventEmitter.addListener('pingppPayResult', resp => {
    const callback = savedCallback;
    savedCallback = undefined;
    callback && callback(resp);
});

function waitForResponse() {
    return new Promise((resolve, reject) => {
        if (savedCallback) {
            savedCallback('User canceled.');
        }
        savedCallback = r => {
            savedCallback = undefined;
            const {result, errCode, errMsg} = r;

            if (result && result === 'success') {
                resolve(result);
            } else {
                const err = new Error(errMsg);
                err.errCode = errCode;
                reject(err);
            }
        };
    });
}

var Pingpp = {
    pay: async function(charge) {
        if (typeof charge === 'string') {
            nativeAPI.pay(charge);
        } else {
            nativeAPI.pay(JSON.stringify(charge));
        }
        return await waitForResponse();
    }
};

export default Pingpp;
