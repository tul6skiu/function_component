import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShopItemFunc from './ShopItemFunc'

const item: ShopItem = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull:
    "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
  price: 399,
  currency: '£',
};

const ShopApp = () => (
  <ShopItemFunc
    item={item}
    onAddToCart={() => alert(`${item.title} добавлен в корзину!`)}
  />
);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <ShopApp />
  </StrictMode>,
);