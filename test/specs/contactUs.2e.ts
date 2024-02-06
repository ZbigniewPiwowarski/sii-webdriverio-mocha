import HomePage from "../pageobjects/home.page";
import ContactPage from "../pageobjects/contact.page";

describe.skip("Contact us", () => {
  beforeEach(async () => {
    await HomePage.openSiiPage();
    await HomePage.clickContactUsButton();
  });

  it("check validation errors displayed in contact form", async () => {
    await ContactPage.clickSendMessageButton();
    await ContactPage.checkNameValidationErrorDisplayed();
    await ContactPage.checkSurnameValidationErrorDisplayed();
    await ContactPage.checkEmailValidationErrorDisplayed();

    await ContactPage.typeToNameInput("test");
    await ContactPage.typeToSurnameInput("test");
    await ContactPage.typeToEmailInput("test@test.pl");

    await ContactPage.clickSendMessageButton();
    await ContactPage.checkEmailValidationErrorNotDisplayed();
    await ContactPage.checkNameValidationErrorNotDisplayed();
    await ContactPage.checkSurnameValidationErrorNotDisplayed();
  });

  it("should check find us button", async () => {
    await ContactPage.clickFindUsButton();
    await ContactPage.checkFindUsOnMapTitleDisplayed();
  });
});
