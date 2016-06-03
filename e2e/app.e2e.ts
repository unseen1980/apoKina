import { ApokinaPage } from './app.po';

describe('apokina App', function() {
  let page: ApokinaPage;

  beforeEach(() => {
    page = new ApokinaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('apokina works!');
  });
});
