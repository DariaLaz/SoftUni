const {chromium} = require('playwright-chromium');
const {expect} = require('chai');

let url = 'http://localhost:5555/02.Book-Library/index.html';

describe('test', async function(){
    this.timeout(10000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch();
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

    it('Should load all books', async () => {
        await page.route('**/jsonstore/collection/books', (route, request) => {
            route.fulfil({
                body: JSON.stringify({}),
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            })
        })
        await page.goto(url)
        await page.click('text=Load all books')
        await page.waitForSelector('text=Harry Potter')
        let rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent))
        
        expect(rowData[0]).to.contains('Harry Potter');
        expect(rowData[0]).to.contains('Rowling');
        expect(rowData[1]).to.contains('C# Fundamentals');
        expect(rowData[1]).to.contains('Nakov');
    })
    it('Should create books', async () => {
        await page.goto(url)
        
        await page.fill('input[name=title]', 'Title')
        await page.fill('input[name=author]', 'Author')

        const [request] = await Promise.all([
            page.waitForRequest((request) => request.method() == 'POST'),
            page.click('text=Submit')
        ])
        const data = JSON.parse(request.postData());
        expect(data.title == 'Title')
        expect(data.author == 'Author')
    })
    it('Should be able to edit books', async () => {
        await page.goto(url)

        await page.click('text=LOAD ALL BOOKS');
        await page.locator('tbody tr:nth-child(1) .editBtn').click();

        await page.fill('#editForm input[name="title"]', 'Title');
        await page.fill('#editForm input[name="author"]', 'Author');

        await page.click('text=Save');

        await page.click('text=LOAD ALL BOOKS');

        const title = await page.textContent('tbody tr:nth-child(1) :nth-child(1)');
        const author = await page.textContent('tbody tr:nth-child(1) :nth-child(2)');

        expect(title).to.equal('Title')
        expect(author).to.equal('Author')
    })
    it('Should be able to delete books', async () => {
        await page.goto(url)

        await page.click('text=Load all books');
        await page.locator('tbody tr:nth-child(1) .deleteBtn').click();

        await page.click('text=Load all books');
        
        let allBooks = await page.locator('tr td:nth-child(1)').evaluateAll((x) => x);

        expect(allBooks.length).to.equal(7)
    })
})