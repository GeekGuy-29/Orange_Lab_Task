# Orange Lab Task 1
The task given was to write a [Puppeteer](https://pptr.dev) script to automate certian tasks on a website.
Puppeteer is nothing but a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol.
## Tasks given
  1. Create a new project using Javascript/Typescript in NodeJS 
  2. Integrate puppeteer library 
  3. Use puppeteer to 
    - Launch headful browser and go to [swap.defillama.com](swap.defillama.com)
    -Fill the form 
      - Enter "Arbitrum One" in the "Chain" field 
      - Enter "12" in "You Sell" field 
      - Enter "WBTC" (Wrapped BTC) in the "select token" field on right hand side to "You Sell" field 
      - Enter "USDC" (USDC Coin) in the "select token" field in "You Buy" section 
      - Select the second option in this section on right hand side called - "Select a route to perform a swap"
  4. Leave the browser window open. This is the end of the program.
