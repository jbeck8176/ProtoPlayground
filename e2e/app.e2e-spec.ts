import { ProtoPlaygroundPage } from './app.po';

describe('proto-playground App', () => {
  let page: ProtoPlaygroundPage;

  beforeEach(() => {
    page = new ProtoPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
