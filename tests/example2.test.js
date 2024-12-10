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

test("Test Scenario 2", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();
  await page.waitForLoadState("domcontentloaded");
  const sliderBlock = page
    .locator('div:below(:text("Default Value 15"))')
    .first();
  const slider = sliderBlock.getByRole("slider");
  const sliderDot = await slider.boundingBox();

  //Initial position of the slider.
  const initialPosition = 70;
  await page.mouse.move(sliderDot.x + initialPosition, sliderDot.y);
  await page.mouse.down();
  let dragCompleted = false;
  let movement = initialPosition + 1;
  const desiredPosition = 95;
  while (!dragCompleted) {
    await page.mouse.move(sliderDot.x + movement, sliderDot.y);
    const currentPosition = await sliderBlock.getByRole("status").textContent();
    if (parseInt(currentPosition) == desiredPosition) {
      dragCompleted = true;
      await page.mouse.up();
    }
    movement++;
  }
});
