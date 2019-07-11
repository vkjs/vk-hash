const sub = s => ((s[0] !== '?') && (s[0] !== '#')) && s || s.slice(1);

module.exports = queryString => {
    let params = {}, queries, temp, i, l;

    const clean = sub(queryString);
    // Split into key/value pairs
    queries = clean.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};
