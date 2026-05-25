import { Product } from '@/hooks/use-cart';
import cashews from '@/assets/products/cashews.png';
import almonds from '@/assets/products/almonds.png';
import pistachios from '@/assets/products/pistachios.png';
import walnuts from '@/assets/products/walnuts.png';
import raisins from '@/assets/products/raisins.png';
import dates from '@/assets/products/dates.png';
import giftBox from '@/assets/products/gift-box.png';
import saffron from '@/assets/products/saffron.png';
import apricots from '@/assets/products/apricots.png';
import figs from '@/assets/products/figs.png';

export const products: Product[] = [
  {
    id: 'cashews-w240',
    name: 'Cashews W240 (Premium Grade)',
    price: 699,
    originalPrice: 850,
    weight: '500g',
    image: cashews,
    category: 'dry-fruits',
    description: 'Large, crisp, and naturally sweet whole cashews. Hand-selected for premium quality.'
  },
  {
    id: 'almonds-california',
    name: 'Almonds California',
    price: 549,
    originalPrice: 650,
    weight: '500g',
    image: almonds,
    category: 'dry-fruits',
    description: 'Crunchy California almonds, packed with essential nutrients and vitamins.'
  },
  {
    id: 'pistachios-salted',
    name: 'Pistachios Salted',
    price: 799,
    originalPrice: 950,
    weight: '500g',
    image: pistachios,
    category: 'dry-fruits',
    description: 'Perfectly roasted and lightly salted premium Iranian pistachios.'
  },
  {
    id: 'walnuts-kernels',
    name: 'Walnuts Kernels',
    price: 649,
    originalPrice: 800,
    weight: '500g',
    image: walnuts,
    category: 'dry-fruits',
    description: 'Halved walnut kernels, rich in Omega-3, sourced from Kashmir.'
  },
  {
    id: 'raisins-golden',
    name: 'Raisins Golden',
    price: 299,
    originalPrice: 400,
    weight: '500g',
    image: raisins,
    category: 'dry-fruits',
    description: 'Sweet, plump, and golden raisins, naturally sun-dried.'
  },
  {
    id: 'dates-medjool',
    name: 'Dates Medjool',
    price: 599,
    originalPrice: 750,
    weight: '500g',
    image: dates,
    category: 'dry-fruits',
    description: 'Soft, luscious, and intensely sweet premium Medjool dates.'
  },
  {
    id: 'mixed-gift-box',
    name: 'Mixed Dry Fruits Gift Box',
    price: 1299,
    originalPrice: 1599,
    weight: '1kg',
    image: giftBox,
    category: 'gifting',
    description: 'An opulent assortment of premium nuts and dried fruits in a luxury gifting box.'
  },
  {
    id: 'saffron-kashmiri',
    name: 'Saffron Premium (Kashmiri)',
    price: 499,
    originalPrice: 600,
    weight: '1g',
    image: saffron,
    category: 'spices',
    description: 'Authentic A-grade Kashmiri Saffron threads for culinary excellence.'
  },
  {
    id: 'apricots-dried',
    name: 'Apricots Dried',
    price: 449,
    originalPrice: 550,
    weight: '500g',
    image: apricots,
    category: 'dry-fruits',
    description: 'Tart and sweet Turkish dried apricots, full of natural goodness.'
  },
  {
    id: 'figs-anjeer',
    name: 'Figs Anjeer',
    price: 399,
    originalPrice: 500,
    weight: '500g',
    image: figs,
    category: 'dry-fruits',
    description: 'Chewy and sweet premium quality dried figs from Afghanistan.'
  }
];
