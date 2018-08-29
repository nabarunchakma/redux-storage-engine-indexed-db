import idbKeyVal from 'idb-keyval';

const reduxStorageEngineIndexedDB = (store) => {
    return {
        load() {
            return idbKeyVal.get(store);
        },

        save(states) {
            return idbKeyVal.set(store, states);
        }
    };
};

export default reduxStorageEngineIndexedDB;
