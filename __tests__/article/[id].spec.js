import { mount } from 'enzyme';
import Article from '../../pages/article/[id]';
import data from '../../fixtures/articlesData';

describe('Pages', () => {
  describe('Article', () => {
    it('should display article information', () => {
      const article = data[0];
      const component = mount(<Article {...article} />);

      expect(component.text()).toMatch(article.title);
      expect(component.text()).toMatch(article.description);
    });
  });
});
