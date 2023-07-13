const puppeteer =require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  //Taking screenshot of the entire page
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://swap.defillama.com/');

  //Changing "Etherium" to "Arbitrum One" in the "Chain" drop-down
  const dd_select = await page.$('#react-select-2-input')
  await dd_select.click()
  await dd_select.type("Arbitrum One")
  await dd_select.press('Enter')
 
  //Editing "You Sell" field from 10 to 12
  const ys_input = await page.$('.chakra-input.css-lv0ed5')
  await ys_input.click({clickCount:3})
  await ys_input.type('12')

  //Changing "ETH" to "WBTC" -- "You Sell" Field
  await page.click('.chakra-button.css-qjhap')
  await page.type('.chakra-input.css-s1d1f4','WBTC')
  await page.waitForTimeout(1000)
  await page.click('.chakra-text.css-xl3lrw')

  //Changing "Select Token" to "USDC" -- "You Buy" Field
  const select_box = await page.$('.chakra-input.css-lv0ed5')
  await select_box.click({clickCount:3})
  for(let i=0;i<4;i++)
  {
    await page.keyboard.press("Tab")
  }
  await page.keyboard.press("Enter")
  await page.type('.chakra-input.css-s1d1f4','USD Coin')
  await page.waitForTimeout(1000)
  await page.click('.chakra-text.css-72rvq0')
  await page.waitForTimeout(5000)

  //Selecting the second option in "Select a route to perform a swap"

  await page.click('.sc-55ee4011-2.fcGAPg:nth-child(2)');
  
  //Taking screenshot of the final output
  await page.screenshot({path:'example.png'});
})();
