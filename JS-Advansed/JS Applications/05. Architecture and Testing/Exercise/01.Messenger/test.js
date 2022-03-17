const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let url = 'http://localhost:5555/01.Messenger/index.html';


describe('test', async function(){
    this.timeout(100000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch();
        //{ headless: false, slowMo: 700 }
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
       page.close();
    });

    it('Should load all messages', async () => {
        await page.goto(url)

        await page.click('#refresh');

        const messageBox = await page.locator('#messages');
        let allMessages = await messageBox.evaluate((x) => x.value)

        expect(allMessages).to.contains('Spami: Hello, are you there?');
    })
    it('Should be able to send messages', async () => {
        await page.goto(url)

        await page.fill('#author', 'Name1');
        await page.fill('#content', 'Content1');

        await page.click('#submit');
        await page.click('#refresh');

        const messageBox = await page.locator('#messages');
        let allMessages = await messageBox.evaluate((x) => x.value)

        expect(allMessages).to.contains('Name1: Content1');
    })
})