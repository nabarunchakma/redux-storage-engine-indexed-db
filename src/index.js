import { set, get } from 'idb-keyval';

const reduxStorageEngineIndexedDB = (store) => {
    return {
        load: async () => {
            return await get(store);
        },

        save: async (states) => {
            return await set(store, states);
        }
    };
};

export default reduxStorageEngineIndexedDB;
