const  puppeteer  = require("puppeteer");

const test = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("file:///Users/techcity/devwork/testings/index.html");

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

    console.log(sumvalue);
    // await browser.close();
}

test()