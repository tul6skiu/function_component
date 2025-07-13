import React from 'react';
import './ShopItemFunc.css';

interface Item {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
}

interface ShopItemFuncProps {
  item: Item;
}

function ShopItemFunc({ item }: ShopItemFuncProps) {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">{item.descriptionFull}</div>
      <div className="purchase-info">
        <div className="price">{item.currency}{item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
export default ShopItemFunc;