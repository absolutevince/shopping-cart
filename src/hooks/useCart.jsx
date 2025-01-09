import { useState } from "react";
import formatData from "../utils/formatData";

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
          const quantity = game.quantity + 1;
          const totalPrice = game.originalPrice * quantity;
          return { ...game, quantity, totalPrice };
        }
        return game;
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

  function getQuantity() {
    return items.length;
  }

  function getItems() {
    return items;
  }

  return { getItems, addToCart, removeToCart, getQuantity };
}
