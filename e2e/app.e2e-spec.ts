import { Demo1Page } from './app.po';

describe('demo1 App', () => {
  let page: Demo1Page;

  beforeEach(() => {
    page = new Demo1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
