import {
  renderHook,
  act,
  waitFor,
  render,
  cleanup,
} from "@testing-library/react";
import { describe, it } from "vitest";
import useCart from "../../hooks/useCart";
const sampleItems = [
  { title: "God of War", id: 0, count: 1, price: 12 },
  { title: "Need For Speed", id: 1, count: 1, price: 23 },
  { title: "Counter Strike", id: 2, count: 1, price: 32 },
  { title: "Dota 2", id: 3, count: 1, price: 45 },
];

describe("Cart", async () => {
  it("add item to cart", () => {
    const { result } = renderHook(() => useCart());
    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.items[0]).toEqual(sampleItems[0]);
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
    expect(result.current.items[0]).toEqual(sampleItems[1]);
  });

  it("Prevent item duplication add 1 to the items count instead", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.items.length).toBe(1);
  });

  it("Add 1 to the items count instead of duplicating", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.items[0].count).toBe(2);
  });

  it("Total the price of an item that is more than one", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    act(() => {
      result.current.addToCart(sampleItems[0]);
    });

    expect(result.current.items[0].price).toBe(24);
  });
});
