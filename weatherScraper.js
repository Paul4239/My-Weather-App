const puppeteer = require("puppeteer");

(async () => {
  try {
    // Launch a browser instance with Chrome
    const browser = await puppeteer.launch({
      headless: false,
      executablePath:
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    });
    const page = await browser.newPage();

    // Go to the BBC Weather page
    await page.goto("https://www.bbc.co.uk/weather");

    // Wait for the search bar to be visible
    await page.waitForSelector("#ls-c-search__input-label", { timeout: 10000 });

    // Type into the search bar
    await page.type("#ls-c-search__input-label", "London");

    // Wait for the search results to load
    try {
      await page.waitForSelector(
        ".ls-o-location.ls-o-location--dark.gel-pica",
        { timeout: 20000 }
      );
    } catch (error) {
      console.error("Error waiting for search results:", error);
    }

    // Click on the first search result
    try {
      await page.click(".ls-o-location.ls-o-location--dark.gel-pica");
    } catch (error) {
      console.error("Error clicking on the first search result:", error);
    }

    // Wait for the specific element to be visible
    try {
      await page.waitForSelector(".wr-day.wr-day--0.wr-js-day", {
        timeout: 20000,
      });
      const elementContent = await page.evaluate(() => {
        const weatherElement = document.querySelector(
          ".wr-day.wr-day--0.wr-js-day"
        );
        return {
          day:
            weatherElement.querySelector(".wr-date")?.textContent?.trim() || "",
          temperature:
            weatherElement
              .querySelector(".wr-value--temperature--c")
              ?.textContent?.trim() || "",
          description:
            weatherElement
              .querySelector(".wr-day__weather-type-description")
              ?.textContent?.trim() || "",
          rainfall:
            weatherElement
              .querySelector(".wr-value--rainfall")
              ?.textContent?.trim() || "",
          windSpeed:
            weatherElement
              .querySelector(".wr-value--wind-speed")
              ?.textContent?.trim() || "",
        };
      });
      console.log("Weather data:", JSON.stringify(elementContent, null, 2));
    } catch (error) {
      console.error("Error extracting weather data:", error);
    }

    // Wait for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 20000));
    console.log("process completed");

    // Close the browser
    await browser.close();
    console.log("browser closed");
  } catch (error) {
    console.error("Error:", error);
  }
})();
