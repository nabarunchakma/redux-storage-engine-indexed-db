'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _idbKeyval = require('idb-keyval');

var reduxStorageEngineIndexedDB = function reduxStorageEngineIndexedDB(store) {
    return {
        load: function load() {
            return (0, _idbKeyval.get)(store);
        },
        save: function save(states) {
            return (0, _idbKeyval.set)(store, states);
        }
    };
};

exports['default'] = reduxStorageEngineIndexedDB;