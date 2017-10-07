import { GidimowebAngularPage } from './app.po';

describe('gidimoweb-angular App', () => {
  let page: GidimowebAngularPage;

  beforeEach(() => {
    page = new GidimowebAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
