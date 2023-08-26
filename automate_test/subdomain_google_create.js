
//status : not working 
const puppeteer = require('puppeteer');
const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function createDnsRecord(subdomain, domain, ipAddress, email, password) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to Google Domains
//   await page.goto('https://domains.google.com');
   await page.goto('https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://domains.google.com/registrar/?internal_linking%3Dtrue&followup=https://domains.google.com/registrar/?internal_linking%3Dtrue&ec=GAZA9gQ');

  // Fill in login credentials and submit
  await page.type('input[type="email"]', email);
  await page.click('div[id="identifierNext"]');

  await page.waitForTimeout(1000); // Add necessary wait times

  await page.type('input[type="password"]', password);
  await page.click('div[id="passwordNext"]');

  await page.waitForNavigation();

  // Navigate to DNS settings
  await page.goto(`https://domains.google.com/registrar/${domain}/dns`);

  // Fill in DNS record details and submit
  await page.type('#subdomain', subdomain);
  await page.type('#ipv4Address', ipAddress);
  
  await page.click('button[id="submit"]');

  await page.waitForTimeout(2000); // Wait for confirmation or error message

  await browser.close();
}

//create variable 
const email = 'iqbalforall@gmail.com';
const password   = '';// TODO fill the pass word here 
const subdomain = '26-08-2023';
const domain = 'rontohub.com';
const ipAddress = '34.100.249.126';

createDnsRecord(subdomain, domain, ipAddress, email, password);

// Gather user input using readline
// rl.question('Enter your Gmail email: ', (email) => {
//   rl.question('Enter your Gmail password: ', (password) => {
//     const defaultSubdomain = new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-');
//     rl.question(`Enter subdomain (default: ${defaultSubdomain}): `, (subdomain) => {
//       subdomain = subdomain || defaultSubdomain;

//       const domain = 'rontohub.com';
//       const ipAddress = '34.100.249.126';
//       // print  create dns record with  subdomain, domain, ipAddress, email, password
//         console.log(`create dns record with ${subdomain}, ${domain}, ${ipAddress}, ${email}, ${password}`);

//     createDnsRecord(subdomain, domain, ipAddress, email, password);

//       rl.close();
//     });
//   });
// });
