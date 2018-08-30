import { set, get } from 'idb-keyval';

const reduxStorageEngineIndexedDB = (store) => {
    return {
        load() {
            return get(store);
        },

        save(states) {
            return set(store, states);
        }
    };
};

export default reduxStorageEngineIndexedDB;
