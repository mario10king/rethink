import { mount } from 'enzyme';
import Articles from '../pages/index';
import data from '../fixtures/articlesData';

describe('Pages', () => {
  describe('Index', () => {
    it('should render titles and descriptions of each article', () => {
      const component = mount(<Articles articles={data} />);

      data.forEach((article) => {
        const title = article.title;
        const description = article.description;

        expect(component.text()).toMatch(title);
        expect(component.text()).toMatch(description);
      });
    });
  });
});
