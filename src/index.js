const { randomBytes } = require('crypto');
const axios = require('axios').default;
// Key is static until app update
const key = 'NTE5MDBlM2ZlMzE3NTVhNWZjZjJiZDNmNDQ3MDMzN2IxODQ1NDY2MzBhZGRkZDJhMWQ4NThlOGJjNmI0ZDM0Mw';
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const appVersion = '8.3.0';

const baseOptions = {
    'os': 'a',
    'cc': 'CA'
}

const headers = {
    'accept-encoding': 'gzip',
    'authkey': key,
    'connection': 'Keep-Alive',
    'av': '8.3.0',
    'os': 'a',
    'user-agent': 'okhttp/4.9.1'
}

const initUser = () => new Promise((resolve, reject) => {
    const options = baseOptions;
    options.lc = 'en';
    options.type = 'ad';
    options.version = appVersion;
    options.timezone = timezone;
    // Fake random Device ID
    options.uuid = randomBytes(8).toString('hex').concat(Date.now().toString());
    axios({
        method: 'POST',
        url: 'https://beta-bumcoming.simsimi.com/user/user_register',
        data: options,
        headers: headers
    }).then(response => resolve(response.data.regDate)).catch(reject);
});


const talk = (text, lang = 'en', level = 1, uid) => new Promise((resolve, reject) => {
    if (!uid) reject(new Error('No uid found, did you init?'));
    if (typeof text !== 'string' || !text) reject(new Error('Text must be string'));
    if (typeof lang !== 'string') reject(new Error('Lang must be string'));
    if (level > 10 || level < 1) reject(new Error('Level must be between 1 and 10'));
    const options = baseOptions;
    options.av = appVersion;
    options.lc = lang;
    options.message = text;
    options.free_level = level;
    options.logUID = uid;
    options.uid = parseInt(uid);
    options.tz = timezone;
    axios({
        method: 'POST',
        url: 'https://bumcomingo.simsimi.com/simtalk/get_talk_set',
        data: options,
        headers: headers
    }).then(response => resolve(response.data)).catch(e => resolve(e.response.data));
});

module.exports = {
    talk,
    initUser
}