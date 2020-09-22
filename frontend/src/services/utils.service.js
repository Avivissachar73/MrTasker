export const utils = {
    storeToStorage,
    loadFromStorage,
    getRandomInt,
    makeId,
    deepSearch
}

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}


function makeId() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    var id = '';
    for (let i = 0; i < 10; i++) {
        id += chars[getRandomInt(0, chars.length)];
    }
    return id;
}

function getRandomInt(min, max) {
    var _max = (min >= max)? min : max;
    var _min = (min <= max)? min : max;
    return (Math.floor(Math.random()*(_max - _min)) + _min);
}

function deepSearch(val, searchVal, isIgnoreCase = true, isIncluded = true) {
    if (val === searchVal) return true;
    if (typeof(val) === 'object') {
        for (let key in val) {
            let curr = val[key];
            if (curr === searchVal) return true;
            else if (typeof(curr) === 'string' && typeof(searchVal) === 'string') {
                if (isIgnoreCase) {
                    let lowerSearchVal = searchVal.toLowerCase();
                    if (isIncluded && curr.toLowerCase().includes(lowerSearchVal)) return true;
                    else if (!isIncluded && curr.toLowerCase() === lowerSearchVal) return true;
                }
                else if (isIncluded && curr.includes(searchVal)) return true;
            }
            else if (deepSearch(curr, searchVal, isIgnoreCase)) return true;
        }
    }
    return false;
}