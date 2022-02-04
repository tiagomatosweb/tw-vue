import Card from './Card';
import CardBody from './CardBody';
import { merge } from 'lodash';
import config from './config';

const Plugin = {
    install(Vue, options = {}) {
        if (!Vue.prototype.$TWVue) { Vue.prototype.$TWVue = {}; }
        Vue.prototype.$TWVue.Card = merge(config, options);

        Vue.component(Card.name, Card);
        Vue.component(CardBody.name, CardBody);
    },
};

export default Plugin;

export {
    Card as TWCard,
    CardBody as TWCardBody,
};
