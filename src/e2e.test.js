describe("App.js", () => {
  it("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".form-header");

    await expect(page).toFillForm('.form', {
      emailAddress: 'username@gmail.com',
      password: 'password',
    })

    await expect(page).toClick('button', { text: 'Submit' })
    await expect(page).toMatch('You are now signed in.')
  });

  it("shows an error message if authentication fails", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".form-header");

    await expect(page).toFillForm('.form', {
      emailAddress: 'username@gmail.com',
      password: 'password123',
    })
    
    await expect(page).toClick('button', { text: 'Submit' })
    await expect(page).toMatch('Please enter a correct username/password.')
  });
});
