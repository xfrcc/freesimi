# Freesimi

![GitHub repo size](https://img.shields.io/github/repo-size/xfrcc/freesimi?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/xfrcc/freesimi?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/xfrcc/freesimi?style=for-the-badge)


## Free Simsimi Talk API Reverse Engineered from the App

## Prerequisites

Before starting, make sure you've met the following requirements:
* `Node.js v16.x`

## Install

Install latest version from NPM:

```
npm i freesimi
```

## Test package
```
npm test
```
## Usage

```
const freesimi = require('freesimi');
const uid = await freesimi.initUser();

const response = await freesimi.talk('Hi pal', 'en', 1, uid);
console.log(response);
```

Expects something like
```
  {
    origin_sentence: 'Hi Paul',
    sentence: 'hi paul',
    sentenceLinkId: 38331629,
    timestamp: '2022-09-16 03:28:44.057734'
  }
```
Where origin_sentenced is uncensored response.

## Arguments

```
await freesimi.talk(text, language, level, uid);
```

text: Actual text to ask, must be string.
<br>
language: Language you want to talk, see [Here](langCodes.md) for more.
<br>
level: Between 1 and 10, the higher it is, the more explicit it will be.
<br>

## License
This project is under license. see the file [LICENSE](LICENSE.md) for more details.

[⬆ Back to the top](#freesimi)<br>
