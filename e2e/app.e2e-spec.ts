import { IdeatorPage } from './app.po';

describe('ideator App', function() {
  let page: IdeatorPage;

  beforeEach(() => {
    page = new IdeatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
