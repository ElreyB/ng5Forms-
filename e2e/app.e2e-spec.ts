import { Ng5FormsPage } from './app.po';

describe('ng5-forms App', () => {
  let page: Ng5FormsPage;

  beforeEach(() => {
    page = new Ng5FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
