import { BrowsercheckPage } from './app.po';

describe('browsercheck App', function() {
  let page: BrowsercheckPage;

  beforeEach(() => {
    page = new BrowsercheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
