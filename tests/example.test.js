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

test("Explore LambdaTest", async ({ page }) => {
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
