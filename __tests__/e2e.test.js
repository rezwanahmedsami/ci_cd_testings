const path = require("path");
const  puppeteer  = require("puppeteer");
const rootDir = require('path').resolve('./');

test('Should button click', async () => { 
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const filePath = path.join("file://", rootDir, "/index.html");
    await page.goto(filePath);

    await page.click("#num1");
    await page.type("#num1", "4");
    
    await page.click("#num2");
    await page.type("#num2", "4");

    await page.click("#sum_btn");
    let sumvalue = await page.$eval(
        "#sum_result", (input) => {
            return input.value;
        }
    )

    expect(sumvalue).toBe("44");
    await browser.close();
});