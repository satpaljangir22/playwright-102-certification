const { test, expect, beforeEach, afterEach } = require("@playwright/test");

afterEach(async ({ page }, testInfo) => {
  const setStatus = {
    action: "setTestStatus",
    arguments: {
      status: testInfo.status,
    },
  };
  await page.evaluate(() => {},
  `lambdatest_action: ${JSON.stringify(setStatus)}`);
});

test("Test Scenario 1", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.getByRole("link", { name: "Simple Form Demo" }).click();
  await expect(page).toHaveURL(/simple-form-demo/);
  const message = "Welcome to LambdaTest";
  await page.getByPlaceholder("Please enter your Message").fill(message);
  await page.getByRole("button", { name: "Get Checked Value" }).click();
  await expect(
    page.locator(':below(:text("Your Message:"))').first()
  ).toHaveText(message);
});
