describe("App.js", () => {
  it("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:3000");
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
});
