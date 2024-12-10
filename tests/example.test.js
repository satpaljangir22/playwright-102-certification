const { test, expect, beforeEach, afterEach } = require("@playwright/test");

beforeEach(async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");
});

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
  await page.getByRole("link", { name: "Simple Form Demo" }).click();
  await expect(page).toHaveURL(/simple-form-demo/);
  const message = "Welcome to LambdaTest";
  await page.getByPlaceholder("Please enter your Message").fill(message);
  await page.getByRole("button", { name: "Get Checked Value" }).click();
  await expect(
    page.locator(':below(:text("Your Message:"))').first()
  ).toHaveText(message);
});

test("Test Scenario 2", async ({ page }) => {
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

test("Test Scenario 3", async ({ page }) => {
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
