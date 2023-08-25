const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

//   await page.goto('your_website_url_here');
    await page.goto('http://localhost:3052/state/');

    const titleText1 = await page.$eval('#state-title', element => element.textContent);

    console.log('Current title text:', titleText1);

  await page.click('#transition-btn'); // Click the transition button

  // Wait for the element to be visible
  await page.waitForSelector('#state-title');

  // Get the text content of the element
  const titleText2 = await page.$eval('#state-title', element => element.textContent);

  console.log('after Current title text:', titleText2);

  if(titleText2 == 'kid'){
    console.log('Test passed');
  }else {
    console.log('Test failed');
  }

  //how to check change   <h1 id="state-title">Born</h1> to born -> Kid

  await browser.close();
})();
