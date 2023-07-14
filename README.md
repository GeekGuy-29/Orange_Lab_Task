# Orange Lab Task 1
The task given was to write a [Puppeteer](https://pptr.dev) script to automate certian tasks on a website.
Puppeteer is nothing but a Node.js library which provides a high-level API to control Chrome/Chromium over the DevTools Protocol.
## Tasks given
  1. Create a new project using Javascript/Typescript in NodeJS 
  2. Integrate puppeteer library 
  3. Use puppeteer to
        - Launch headful browser and go to [swap.defillama.com](swap.defillama.com)
        - Fill the form 
          - Enter "Arbitrum One" in the "Chain" field 
          - Enter "12" in "You Sell" field 
          - Enter "WBTC" (Wrapped BTC) in the "select token" field on right hand side to "You Sell" field 
          - Enter "USDC" (USDC Coin) in the "select token" field in "You Buy" section 
          - Select the second option in this section on right hand side called - "Select a route to perform a swap"
  5. Leave the browser window open. This is the end of the program.
## Solution
  1. Solution for task 1 <i>"Enter Arbitrum One in the Chain field"</i>
     ```node.js
       const dd_select = await page.$('#react-select-2-input')
       await dd_select.click()
       await dd_select.type("Arbitrum One")
       await dd_select.press('Enter')
       ```
        > Approach : Declared a constant holding the value of the "Chain" field to simply the code as well as make it look clean,as it             is used multiple times below.
          To select the div box in which the value has to be typed, `.click()` function is used, `.type()` is used to enter the value              asked to mention while, `.press('Enter')` has been used to pass on a message that, the searched value is the value required to           move further.
  2. Solution for task 2 <i>"Enter 12 in You Sell field"</i>
     ```node.js
       const ys_input = await page.$('.chakra-input.css-lv0ed5')
       await ys_input.click({clickCount:3})
       await ys_input.type('12')
     ```
       > Approach: Repeated the first step similar to task 1. Next difficulty faced in this task was to edit the pre-filled number with           a defined number.
         Henceforth, to solve this problem, the function `{clickcount :3}` came in handy as, it clicks at a certain feild three times,            which makes it editable.
         Laslty, again to input the desired value `.type()` was used.

  3. Solution for task 3 <i>"Enter WBTC (Wrapped BTC) in the select token field on right hand side to You Sell field"</i>
     ```node.js
         await page.click('.chakra-button.css-qjhap')
         await page.type('.chakra-input.css-s1d1f4','WBTC')
         await page.waitForTimeout(1000)
         await page.click('.chakra-text.css-xl3lrw')
     ```
       > Approach : Followed similar steps which were previously used in task 1 and 2 wherein, we selected the particular field wherein           we wanted to input our set value. Now, the next step of difficulty was to make the tool wait for the website to output results           and to solve this problem, `.waitForTimeout(n milliseconds)` function turned out to be of use as it makes the processor wait             for "n milliseconds" which eventually helped in giving ample of time for the website to load.
       
  4. Solution for task 4 <i>"Enter USDC (USDC Coin) in the select token field in You Buy section"</i>
     ```node.js
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
     ```
       > Approach: This task was the most difficult task in the list. Since, all the divisions in the ceratin panel of the website,               carry the same information i.e. similar id and class name for each and every element hence, it became difficult to edit the              information in the desired feild. Tried multiple options, upto the extent of using the mouse pointer coordinates to click at a           certain place but, it complicated the program and made the processing slow. Therefore, used the "Tab" bar to switch div boxes            and counted the number of times it had to be pressed so as to reach that particular div on which task had to be performed                consequently looping the `page.keyboard.press("Tab")` with the number of times it was pressed to reach the end point.                    Meanwhile rest of the code is almost similar to the commands used in previous tasks.

  5. Solution for task 5 <i>"Select the second option in this section on right hand side called - Select a route to perform a swap"</i>
      ```node.js
        await page.click('.sc-55ee4011-2.fcGAPg:nth-child(2)');
      ```
        > Approach: used a function `:nth-child(2)` which hovers the processor to the second elements present in a "span" present in a             div

  6. Added a bonus feature of screenshot which, clicks the screenshot of the screen (the width of the screenshot is set at 1920 while         the height is set at 1080). The `{example.png}` saves the screenshot within the same folder and the screenshot is refreshed              everytime when the process is called.
        ```node.js
            await page.setViewport({ width: 1920, height: 1080 });
            await page.screenshot({path:'example.png'});
        ```
 
## Pre-Requisites and "How to use" guide

    a. The most important pre-requisite is to have node.js software pre-installed in the user's PC.
    b. The second pre-requisite is to install the `puppeteer` dependancy before trying out the program.

   ### How to use
      1. Open the github link by clicking here.
      2. Download the project as shown below.
      3. Open the project via terminal.
      4. Run `npm i puppeteer` to install the puppeteer dependancy.
      5. Open the file on any preferred IDE in my case it's VS Code.
      6. Open the task.js file
      7. Run the command `node task.js` in the terminal.
     
