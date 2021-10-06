import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import CrownNewsAddOn from './components/CrownNewsAddOn.vue';
import CrownNewsOnly from './components/CrownNewsOnly.vue';

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.customElement('crown-news-add-on', CrownNewsAddOn, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      console.debug('shadowRoot found! Using as root node ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      console.debug('shadowRoot not found! Using document head ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }

    return root;
  },
});

Vue.customElement('crown-news-only', CrownNewsOnly, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      console.debug('shadowRoot found! Using as root node ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = rootNode;
    } else {
      console.debug('shadowRoot not found! Using document head ');
      // eslint-disable-next-line no-param-reassign
      root.shadowRoot = document.head;
    }

    return root;
  },
});
