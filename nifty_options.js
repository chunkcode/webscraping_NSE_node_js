const {Builder, By, Key, until} = require('selenium-webdriver');
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  } 
(async function example() {
let driver = await new Builder().forBrowser("chrome").build();
try {
await driver.get('https://www.nseindia.com/option-chain');
await delay(2000);
data = await driver.findElement(By.id('optionChainTable-indices')).getText();
console.log(data)
// await driver.wait(until.titleIs('You did it!! - Google Search'), 1000);
} finally {
await driver.quit();
}
})();