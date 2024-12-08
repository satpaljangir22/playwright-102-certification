const { test, expect, afterEach } = require("@playwright/test");

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

test("Login to LambdaTest E-Commerce", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.getByRole("button", { name: "My account" }).hover();
  await page.getByRole("link", { name: "Login", exact: true }).click();
  const title = await page.title();
  expect.soft(title).toBe("Account Login");

  await page
    .getByPlaceholder("E-Mail Address")
    .fill("satpaljangir22@gmail.com");
  await page.getByPlaceholder("Password").fill("Test12345");
  await page.getByRole("button", { name: "Login" }).click();
  const homePageTitle = await page.title();
  expect.soft(homePageTitle).toBe("My Account");
});

test.only("Explore LambdaTest", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/");

  const [newPage] = await Promise.all([
    page.context().waitForEvent("page"),
    page.getByRole("link", { name: "Explore all Integrations" }).click({
      modifiers: ["ControlOrMeta"],
    }),
  ]);
  expect.soft(page.context().pages().length).toBe(2);
  await expect(newPage).toHaveURL("https://www.lambdatest.com/integrations");
  await newPage.locator("a").filter({ hasText: "App Automation" }).click();
  await newPage.getByRole("link", { name: "Integrate Leapwork with" }).click();
});
