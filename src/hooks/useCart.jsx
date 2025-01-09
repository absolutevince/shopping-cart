import { useState } from "react";

export default function useCart() {
  const [items, setItems] = useState([]);

  function addToCart(item) {
    let existing = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        existing = true;
      }
    }
    if (existing) {
      const updatedCount = items.map((game) => {
        if (game.id === item.id) {
          const count = game.count + 1;
          const price = game.price * count;
          return { ...game, count, price };
        }
      });

      setItems(updatedCount);
    } else {
      setItems([...items, item]);
    }
  }

  function removeToCart(itemId) {
    const updatedItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(updatedItems);
  }

  function getItemsCount() {
    return items.length;
  }

  return { items, addToCart, removeToCart, getItemsCount };
}
