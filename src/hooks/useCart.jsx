import { useState } from "react";
import formatData from "../utils/formatData";

export default function useCart() {
  const [items, setItems] = useState([]);
  const [newAddedCount, setNewAddedCount] = useState(0);
  const [popupView, setPopupView] = useState(false);

  function getAllTotalPrice() {
    return items.reduce((acc, curr) => acc + curr.totalPrice, 0);
  }

  function addToCart(item) {
    let existing = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        existing = true;
      }
    }
    if (existing) {
      increaseQuantity(item.id);
    } else {
      setItems([...items, item]);
    }
    increaseNewAddedCount();
  }

  function removeToCart(itemId) {
    const updated = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(updated);
  }

  function getQuantity() {
    return items.length;
  }

  function increaseQuantity(itemId) {
    const updated = items.map((game) => {
      if (game.id === itemId) {
        return {
          ...game,
          quantity: game.quantity + 1,
          totalPrice: game.originalPrice * (game.quantity + 1),
        };
      }
      return game;
    });

    setItems(updated);
  }

  function decreaseQuantity(itemId) {
    const updated = items.map((game) => {
      if (game.id === itemId) {
        if (game.quantity === 1) {
          return game;
        }
        return {
          ...game,
          quantity: game.quantity - 1,
          totalPrice: game.originalPrice * (game.quantity - 1),
        };
      }
      return game;
    });

    setItems(updated);
  }

  function increaseNewAddedCount() {
    setNewAddedCount(newAddedCount + 1);
  }

  function resetNewAddedCount() {
    setNewAddedCount(0);
  }

  function closePopupCart() {
    setPopupView(false);
  }

  function openPopupCart() {
    setPopupView(true);
  }

  return {
    items,
    addToCart,
    removeToCart,
    getQuantity,
    increaseQuantity,
    decreaseQuantity,
    newAddedCount,
    resetNewAddedCount,
    popupView,
    openPopupCart,
    closePopupCart,
    getAllTotalPrice,
  };
}
