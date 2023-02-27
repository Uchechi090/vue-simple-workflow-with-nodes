import { mount } from '@vue/test-utils';
import Search from './Search.vue';

describe('Search', () => {
  const wrapper = mount(Search);

  test('that wrapper exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('wrapper snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Add new node...');
  });

  it('renders correctly with different data', async () => {
    wrapper.setData({ searchTerm: 'three' });
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('three');
  });
});
