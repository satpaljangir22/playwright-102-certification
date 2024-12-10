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

test("Test Scenario 3", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.getByRole("link", { name: "Input Form Submit" }).click();

  await page.getByRole("button", { name: "Submit" }).click();

  //The error message can not be asserted as it is not attached to the DOM and rather shown by the browser itself.

  await page.getByPlaceholder("Name", { exact: true }).fill("Satpal");
  await page
    .getByPlaceholder("Email", { exact: true })
    .fill("satpaljangir22@gmail.com");
  await page.getByPlaceholder("Password").fill("Test12345");
  await page.getByPlaceholder("Company").fill("sjangir");
  await page.getByPlaceholder("Website").fill("sjangir.com");
  await page.getByRole("combobox").selectOption("IN");
  await page.getByPlaceholder("City").fill("Jaipur");
  await page.getByPlaceholder("Address 1").fill("Jaipur");
  await page.getByPlaceholder("Address 2").fill("Jaipur");
  await page.getByPlaceholder("State").fill("Rajasthan");
  await page.getByPlaceholder("Zip code").fill("330033");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Thanks for contacting us, we will get back to you shortly.")
  ).toBeVisible();
});
