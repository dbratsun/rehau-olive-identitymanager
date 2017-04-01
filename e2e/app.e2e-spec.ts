import { RehauOliveIdentitymanagerPage } from './app.po';

describe('rehau-olive-identitymanager App', () => {
  let page: RehauOliveIdentitymanagerPage;

  beforeEach(() => {
    page = new RehauOliveIdentitymanagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
