import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import _ from 'lodash';

const FOLLOW = 'FOLLOW';

// Storages like AsyncStorage, SQLite are not secure.
// So we need to use some secure way like Keychain on iOS.
// However, we don't need to save all the info in stores.
// Selectively, each store method calls the 'this.rootStore.saveToStorage'.
// When the app is loaded, in App.js, we should call the 'initialLoadFromStorage'
// Candidates
// https://github.com/talut/rn-secure-storage
// https://github.com/mcodex/react-native-sensitive-info
// https://github.com/pradeep1991singh/react-native-secure-key-store

export default class LocalStorage {
    static async save({ key, value }) {
        // Split the two parts, one is for get method, the other is for set method.
        let stored;
        try {
            const loadedData = await RNSecureKeyStore.get(FOLLOW);
            stored = JSON.parse(loadedData);
        } catch (error) {
            console.log(`Failed to load stored data: ${error}`);
            stored = {};
        } finally {
            stored[key] = value;
        }
1
        try {
            const result = await RNSecureKeyStore.set(
                FOLLOW,
                JSON.stringify(stored),
                { accessible: ACCESSIBLE.ALWAYS },
            );
        } catch (error) {
            console.log(error);
        }
    }

    static async loadAll() {
        try {
            // At first, we do not have the value for FOLLOW,
            // so it throw error "key does not present"
            const result = await RNSecureKeyStore.get(FOLLOW);
            return JSON.parse(result);
        } catch (error) {
            console.log(error);
            return {};
        }
    }

    static async load({ key }) {
        try {
            const result = await LocalStorage.loadAll();
            return result[key];
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
}
