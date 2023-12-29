import { browser } from "@wdio/globals";

export default class Page {
  protected get acceptCookiesButton() {
    return $("#cmplz-cookiebanner-container button.cmplz-btn.cmplz-accept");
  }

  public async openSiiPage() {
    await browser.url(`https://sii.pl/en/`);

    if (await this.acceptCookiesButton.isDisplayed()) {
      await this.acceptCookiesButton.click();
    }
  }

  protected async typeToInput(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed();
    await element.setValue(text);
  }

  // to test git fetch
}
