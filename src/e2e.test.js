import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:5000");
    await page.waitForSelector(".form-header");

    await page.click(".form-input__email");
    await page.type(".form-input__email", "username@gmail.com");

    await page.click(".form-input__password");
    await page.type(".form-input__password", "password");

    await page.click(".form-submit-button");

    await page.waitForSelector(".form-success-message");
    const text = await page.$eval(
      ".form-success-message",
      (e) => e.textContent
    );

    expect(text).toContain("You are now signed in.");
  });

  it("shows an error message if authentication fails", async () => {
    await page.goto("http://localhost:5000");
    await page.waitForSelector(".form-header");

    await page.click(".form-input__email");
    await page.type(".form-input__email", "username@gmail.com");

    await page.click(".form-input__password");
    await page.type(".form-input__password", "password123");

    await page.click(".form-submit-button");

    await page.waitForSelector(".form-error-text");
    const text = await page.$eval(".form-error-text", (e) => e.textContent);

    expect(text).toContain("Please enter a correct username/password.");
  });

  afterAll(() => browser.close());
});
