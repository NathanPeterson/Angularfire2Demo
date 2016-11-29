import { Angular2FireBaseExample2Page } from './app.po';

describe('angular2-fire-base-example2 App', function() {
  let page: Angular2FireBaseExample2Page;

  beforeEach(() => {
    page = new Angular2FireBaseExample2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
