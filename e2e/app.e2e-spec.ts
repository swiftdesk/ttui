import { TtuiPage } from './app.po';

describe('ttui App', () => {
  let page: TtuiPage;

  beforeEach(() => {
    page = new TtuiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
