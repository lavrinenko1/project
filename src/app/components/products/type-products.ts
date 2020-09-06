import {Products} from './products';
import {BALBOA, DOLORES, GRANT, HYDE, PROSPECT} from './slider-image';

export const TYPEPRODUCTS: Products[] = [
  {
    id: 1,
    type: 'Balboa',
    price: 50,
    icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/123/assets/pdp-planter-icon_balboa.png?v=5854872419984538444',
    img: BALBOA[0].src
  },
  {
    id: 2,
    type: 'Dolores',
    price: 45,
    icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/123/assets/pdp-planter-icon_dolores.png?v=4453965668981414379',
    img: DOLORES[0].src
  },
  {
    id: 3,
    type: 'Grant',
    price: 55,
    icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/123/assets/pdp-planter-icon_grant.png?v=15286494651589620390',
    img: GRANT[0].src
  },
  {
    id: 4,
    type: 'Hyde',
    price: 38,
    icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/123/assets/pdp-planter-icon_hyde.png?v=9961617796347918894',
    img: HYDE[0].src
  },
  {
    id: 5,
    type: 'Prospect',
    price: 30,
    icon: 'https://cdn.shopify.com/s/files/1/0150/6262/t/123/assets/pdp-planter-icon_prospect.png?v=4413008329674779837',
    img: PROSPECT[0].src
  }
];
