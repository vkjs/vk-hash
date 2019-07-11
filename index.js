const parseQueryString = require('./libs/parseQueryString');
const CryptoJS = require('crypto-js');

class VKHash {
    constructor(attrs = {}){
        this.key = attrs.key;
    }

    validateQueryString(qs = ''){
        const query = parseQueryString(qs);
        return this.validateQueryObject(query);
    }

    validateQueryObject(query = {}){
        console.log(query);
        const qss = Object.entries(query).filter(arr => arr[0].includes('vk_')).map(arr => `${arr[0]}=${arr[1]}`).sort(function(a, b){
            return a === b ? 0 : a < b ? -1 : 1;
        });
        const vss = qss.join('&');
        const hash = CryptoJS.HmacSHA256(vss, this.key).toString(CryptoJS.enc.Base64);
        return hash.replace(/[^a-zA-Z0-9\s!?]+/g, '') === query.sign.replace(/[^a-zA-Z0-9\s!?]+/g, '')
    }

}

module.exports = VKHash;
