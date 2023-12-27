import { $ } from "@wdio/globals";
import Page from "./page";

class ContactPage extends Page {
  private get inputName() {
    return $("#name");
  }

  private get inputEmail() {
    return $("#email");
  }

  private get surnameInput() {
    return $("#surname");
  }

  private get sendMesageButton() {
    return $("#submit_btn");
  }

  private get findUsOnMapTite() {
    return $("h2=Find us on map");
  }

  private get findUsButton() {
    return $("#find-us");
  }

  private get nameValidationError() {
    return $("#Zebra_Form_error_message_name");
  }

  private get surnameValidationError() {
    return $("#Zebra_Form_error_message_surname");
  }

  private get emailValidationError() {
    return $("#Zebra_Form_error_message_email");
  }

  public clickFindUsButton() {
    return this.findUsButton.click();
  }

  public async typeToNameInput(text: string) {
    await this.typeToInput(await this.inputName, text);
  }

  public async typeToSurnameInput(text: string) {
    await this.typeToInput(await this.surnameInput, text);
  }

  public async typeToEmailInput(text: string) {
    await this.typeToInput(await this.inputEmail, text);
  }

  public clickSendMessageButton() {
    return this.sendMesageButton.click();
  }

  public checkNameValidationErrorDisplayed() {
    return expect(this.nameValidationError).toBeDisplayed();
  }

  public checkNameValidationErrorNotDisplayed() {
    return expect(this.nameValidationError).not.toBeDisplayed();
  }

  public checkSurnameValidationErrorDisplayed() {
    return expect(this.surnameValidationError).toBeDisplayed();
  }

  public checkSurnameValidationErrorNotDisplayed() {
    return expect(this.surnameValidationError).not.toBeDisplayed();
  }

  public checkEmailValidationErrorDisplayed() {
    return expect(this.emailValidationError).toBeDisplayed();
  }

  public checkEmailValidationErrorNotDisplayed() {
    return expect(this.emailValidationError).not.toBeDisplayed();
  }

  public checkFindUsOnMapTitleDisplayed() {
    return expect(this.findUsOnMapTite).toBeDisplayedInViewport();
  }
}

export default new ContactPage();
