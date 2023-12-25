import { $ } from "@wdio/globals";
import { expect } from "@wdio/globals";
import Page from "./page";

class Home extends Page {
  private get siiMainLogo() {
    return $(".sii-o-nav-bar__box .sii-o-nav-bar__brand-logo-link");
  }

  private get loginButton() {
    return $(".sii-o-nav-bar__item__nav-top__mysii");
  }

  private get englishLangButton() {
    return $("=ENGLISH");
  }

  private get polishLangButton() {
    return $("=POLSKI");
  }

  private get contactUsButton() {
    return $("=Contact us");
  }

  private get kontaktButton() {
    return $("=Kontakt");
  }

  // private get sendYourRequestButton() {
  //   return $("a=Send your request");
  // }

  // private get ourExpertiseText() {
  //   return $("h2=Our expertise");
  // }

  private get largeContentIcon() {
    return $(
      "div.sii-o-menu-rounded-large__content__title.js-menu-rounded-title"
    );
  }

  // titles ///////////////////////////

  private get areasOfSpecializationTitle() {
    return $("h2=Areas of specialization");
  }

  private get whoWeAreTitle() {
    return $("h2=Who we are");
  }

  private get weProudToWorkWithTitle() {
    return $("h3*=We're proud to work with");
  }

  private get learnMoreAboutUsTitle() {
    return $("h2=Learn more about us");
  }

  private get dontMissOutTitle() {
    return $("h2=Don't miss out");
  }
  /////////////////////////////////////

  // who we are ///////////////////////
  private get whoWeAreButton() {
    return $(`//*[@id="sii-m-nav-menu__item--19230"]/a`);
  }

  private get ourCompanyTitle() {
    return $(
      `//*[@id="js-main-menu-19230"]//*[contains(text(), "Our Company")]`
    );
  }
  /////////////////////////////////////

  // what we offer /////////////////////
  private get whatWeOfferButton() {
    return $(`//*[@id="sii-m-nav-menu__item--19241"]/a`);
  }

  private get ourServicesTitle() {
    return $(
      `//*[@id="js-main-menu-19241"]//*[contains(text(), "Our Services")]`
    );
  }
  /////////////////////////////////////

  // industries ///////////////////////
  private get industriesButton() {
    return $(`//*[@id="sii-m-nav-menu__item--19242"]/a`);
  }

  private get healthcareTitle() {
    return $(
      `//*[@id="js-main-menu-19242"]//*[contains(text(), "Healthcare")]`
    );
  }
  /////////////////////////////////////

  // career ///////////////////////////
  private get careerButton() {
    return $(`//*[@id="sii-m-nav-menu__item--19243"]/a`);
  }

  private get jobOffersTitle() {
    return $(
      `//*[@id="js-main-menu-19243"]//*[contains(text(), "Job offers")]`
    );
  }
  /////////////////////////////////////

  // training /////////////////////////
  private get trainingButton() {
    return $(`//*[@id="sii-m-nav-menu__item--19244"]/a`);
  }
  /////////////////////////////////////

  // news and events //////////////////
  private get newAndEventsButton() {
    return $(`//*[@id="sii-m-nav-menu__item--19245"]/a`);
  }

  private get newsTitle() {
    return $(`//*[@id="js-main-menu-19245"]//*[contains(text(), "News")]`);
  }
  /////////////////////////////////////

  // blog /////////////////////////////
  private get blogButton() {
    return $(`//*[@id="sii-m-nav-menu__item--52678"]/a`);
  }
  /////////////////////////////////////

  private get welcomeToMySiiTitle() {
    return $("h2=Welcome to MySii");
  }

  private get embeddedSystemsText() {
    return $("#offer_menu_item2 span.sii-m-badge-menu-item__link__title");
  }

  public clickSiiMainLogo() {
    return this.siiMainLogo.click();
  }

  public clickLoginButton() {
    return this.loginButton.click();
  }

  public async choosePolishLanFromEng() {
    await this.englishLangButton.click();
    return this.polishLangButton.click();
  }

  public async chooseEngLanFromPolish() {
    await this.polishLangButton.click();
    return this.englishLangButton.click();
  }

  public clickContactUsButton() {
    return this.contactUsButton.click();
  }

  public clickWhoWeAreButton() {
    return this.whoWeAreButton.click();
  }

  public clickWhatWeOfferButton() {
    return this.whatWeOfferButton.click();
  }

  public clickIndustriesButton() {
    return this.industriesButton.click();
  }

  public clickCareerButton() {
    return this.careerButton.click();
  }

  public clickTrainingButton() {
    return this.trainingButton.click();
  }

  public clickNewsAndEventsButton() {
    return this.newAndEventsButton.click();
  }

  public clickBlogButton() {
    return this.blogButton.click();
  }

  public checkCompanyPresentationTextDisplayed() {
    return expect(this.ourCompanyTitle).toBeDisplayed();
  }

  public checkOurServicesTextDisplayed() {
    return expect(this.ourServicesTitle).toBeDisplayed();
  }

  public checkHealthcareTextDisplayed() {
    return expect(this.healthcareTitle).toBeDisplayed();
  }

  public checkJobOffersTextDisplayed() {
    return expect(this.jobOffersTitle).toBeDisplayed();
  }

  public checkNewsTextDisplayed() {
    return expect(this.newsTitle).toBeDisplayed();
  }

  public checkTrainingsUrl() {
    return expect(browser).toHaveUrl("https://sii.pl/en/trainings/");
  }

  public checkBlogUrl() {
    return expect(browser).toHaveUrl("https://sii.pl/blog/en/");
  }

  public checkContactUsUrl() {
    return expect(browser).toHaveUrl("https://sii.pl/en/contact-us/");
  }

  public checkKontaktButtonDisplayed() {
    return expect(this.kontaktButton).toBeDisplayed();
  }

  public checkContactUsButtonDisplayed() {
    return expect(this.contactUsButton).toBeDisplayed();
  }

  public checkWelcomeToMySiiTitleDisplayed() {
    return expect(this.welcomeToMySiiTitle).toBeDisplayed();
  }

  public async hoverOnEmbeddedSystemsText() {
    await this.embeddedSystemsText.moveTo();
  }

  public checkTextLargeContentIcon(val: string) {
    return expect(this.largeContentIcon).toHaveText(val);
  }

  public async moveToAreasOfSpecializationTitle() {
    await this.areasOfSpecializationTitle.moveTo();
    await expect(this.areasOfSpecializationTitle).toBeDisplayed();
  }

  public async moveToWhoWeAreTitle() {
    await this.whoWeAreTitle.moveTo();
    await expect(this.whoWeAreTitle).toBeDisplayed();
  }

  public async moveToWeProudToWorkWithTitle() {
    await this.weProudToWorkWithTitle.moveTo();
    await expect(this.weProudToWorkWithTitle).toBeDisplayed();
  }

  public async moveToLearnMoreAboutUsTitle() {
    await this.learnMoreAboutUsTitle.moveTo();
    await expect(this.learnMoreAboutUsTitle).toBeDisplayed();
  }

  public async moveToDontMissOutTitle() {
    await this.dontMissOutTitle.moveTo();
    await expect(this.dontMissOutTitle).toBeDisplayed();
  }
}

export default new Home();
