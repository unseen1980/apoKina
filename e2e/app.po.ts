export class ApokinaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apokina-app h1')).getText();
  }
}
