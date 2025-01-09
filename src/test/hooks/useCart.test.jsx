import { renderHook, act } from "@testing-library/react";
import { describe, it } from "vitest";
import useCart from "../../hooks/useCart";
const sampleItems = [
  {
    title: "God of War",
    id: 0,
    quantity: 1,
    originalPrice: 12,
    totolPrice: 12,
  },
  {
    title: "Need For Speed",
    id: 1,
    quantity: 1,
    originalPrice: 23,
    totalPrice: 23,
  },
  {
    title: "Counter Strike",
    id: 2,
    quantity: 1,
    originalPrice: 32,
    totalPrice: 32,
  },
  { title: "Dota 2", id: 3, quantity: 1, originalPrice: 45, totalPrice: 45 },
];

describe("Cart", async () => {
  it("add item to cart", () => {
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.getItems()[0]).toEqual(sampleItems[0]);
  });

  it("remove item on cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });
    act(() => {
      result.current.addToCart(sampleItems[1]);
    });

    act(() => {
      result.current.removeToCart(0);
    });
    expect(result.current.getItems()[0]).toEqual(sampleItems[1]);
  });

  it("Prevent item duplication add 1 to the items count instead", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.getItems().length).toBe(1);
  });

  it("Add 1 to the items count instead of duplicating", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });
    expect(result.current.getItems()[0].quantity).toBe(2);
  });

  it("Total the price of an item that is more than one", async () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.getItems()[0].totalPrice).toBe(24);
  });
});
