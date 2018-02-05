
export const arrToMap = (defaultArray) => defaultArray.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
}, {});

export const mapToArr = (obj) => {
    return Object.keys(obj).map(id => obj[id])
}