const readline = require('readline');
const simsimi = require('../src/index.js');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = query => new Promise((resolve) => rl.question(query, resolve));


(async () => {
  try {
    const uid = await simsimi.initUser();
    while (true) {
        const text = await prompt('Ask: ');
        const response = await simsimi.talk(text, 'en', 1, uid);
        console.log(response);
    }
    
  }
  catch(e) {
      console.error(e);
    }
})()
