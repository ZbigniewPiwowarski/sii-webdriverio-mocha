import HomePage from "../pageobjects/home.page";
const assert = require("soft-assert");

describe("Home page", () => {
  beforeEach(async () => {
    await HomePage.openSiiPage();
  });

  //for (let i = 0; i < 5; i++) {
  it("should go through main navbar menu", async () => {
    await HomePage.clickWhoWeAreButton();
    await HomePage.checkCompanyPresentationTextDisplayed();

    await HomePage.clickWhatWeOfferButton();
    await HomePage.checkOurServicesTextDisplayed();

    await HomePage.clickIndustriesButton();
    await HomePage.checkHealthcareTextDisplayed();

    await HomePage.clickCareerButton();
    await HomePage.checkJobOffersTextDisplayed();

    await HomePage.clickTrainingButton();
    await HomePage.checkTrainingsUrl();

    await HomePage.clickNewsAndEventsButton();
    await HomePage.checkNewsTextDisplayed();

    await HomePage.clickBlogButton();
    await HomePage.checkBlogUrl();

    await assert.softAssertAll();
  });
  //  }

  it("should change language to English and back to Polish", async () => {
    await HomePage.openSiiPage();

    await HomePage.choosePolishLanFromEng();
    await HomePage.checkKontaktButtonDisplayed();

    await HomePage.chooseEngLanFromPolish();
    await HomePage.checkContactUsButtonDisplayed();
  });

  it("should check log to sii button", async () => {
    await HomePage.openSiiPage();

    await HomePage.clickLoginButton();
    await HomePage.checkWelcomeToMySiiTitleDisplayed();
  });

  it("should check contact us button", async () => {
    await HomePage.openSiiPage();

    await HomePage.clickContactUsButton();
    await HomePage.checkContactUsUrl();
  });

  it("should test hover on embedded systems content icon and check what is displayed on main content icon", async () => {
    await HomePage.hoverOnEmbeddedSystemsText();
    await HomePage.checkTextLargeContentIcon("Embedded systems");
  });

  it("should check main webpage titles", async () => {
    await HomePage.moveToAreasOfSpecializationTitle();
    await HomePage.moveToDontMissOutTitle();
    await HomePage.moveToLearnMoreAboutUsTitle();
    await HomePage.moveToWeProudToWorkWithTitle();
    await HomePage.moveToWhoWeAreTitle();
  });

  // it.only("should test carrousel for we proud to work with", async () => {
  //   await HomePage.moveToReadThisStoryButton();
  //   await HomePage.checkWeProudToWorkWithCarrousel();
  // });

  it("should test email input error", async () => {
    await HomePage.moveToDontMissOutTitle();
    await HomePage.clickSubscribeButton();
    await HomePage.checkEmailInputErrorDisplayed();

    await HomePage.typeWrongEmailToInput();
    await HomePage.clickSubscribeButton();
    await HomePage.checkEmailInputErrorDisplayed();
  });
});
