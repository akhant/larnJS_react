import {OrderedMap, Map } from 'immutable';

export const arrToMap = (defaultArray, DataRecord = Map) => defaultArray.reduce((acc, item) =>
    acc.set(item.id, new DataRecord(item))
, new OrderedMap({})
);

export const mapToArr = (obj) => {
    return obj.valueSeq().toArray()
}

