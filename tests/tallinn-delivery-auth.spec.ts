import { test, expect } from "@playwright/test";
import {faker} from "@faker-js/faker/locale/ar";


test.beforeEach(async ({page}) => {
    await page.goto(process.env.APP_URL);
    await page.waitForLoadState("networkidle")
})

test ("TD negative auth test 1", async ({page})=> {
    await page.waitForTimeout(5000)
    const username = page.locator("#username")
    const password = page.locator("#password")
    const signInBtn = page.locator('[data-name="signIn-button"]')
    const errorPopup = page.locator('[data-name="authorizationError-popup"]');

    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password();

    await username.fill(randomUsername);
    await password.fill(randomPassword);
    await signInBtn.click();
    await expect(errorPopup).toBeVisible();

})