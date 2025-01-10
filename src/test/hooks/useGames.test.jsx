import { it, describe, expect, vi } from "vitest";
import useGames from "../../hooks/useGames";
import { renderHook, act } from "@testing-library/react";

// mock the resolve value of the fetch
function fetchResponse(data) {
  return { ok: true, json: () => new Promise((resolve) => resolve(data)) };
}

global.fetch = vi.fn();

const mockResolve = {
  count: 2000,
  next: "random.url/0",
  previous: "random.url/1",
};

describe("Get Games list", () => {
  // needs to rest the mock bofore every test, cause vi.fn() store history of mock calls.
  beforeEach(() => {
    fetch.mockReset();
  });

  it("Returns Correct data", async () => {
    fetch.mockResolvedValue(fetchResponse(mockResolve));
    // need to wrap the renderHook to a async IIFE, in order to await it's response
    let { result } = await (async () => renderHook(() => useGames()))();

    // I don't why I need this , but do. I don't have any updates to do so I put empty async function.
    await act(async () => { });

    expect(result.current.state.data).toEqual(mockResolve);
  });

  it("Correct URL when passed in a page argument", async () => {
    fetch.mockResolvedValue(fetchResponse(mockResolve));
    let { result } = await (async () => renderHook(() => useGames()))();

    await act(async () => {
      result.current.changePage(2);
    });

    // this is the first call
    expect(fetch.mock.calls[0].shift()).toBe(
      "https://api.rawg.io/api/games?key=f008b5f591794723b4303e2b1bb23169",
    );
    // this is the call after changing page @ act() function
    expect(fetch.mock.calls[1].shift()).toBe(
      "https://api.rawg.io/api/games?key=f008b5f591794723b4303e2b1bb23169&page=2",
    );
  });

  it("handle error, invalid argument 'page'", async () => {
    fetch.mockResolvedValue(fetchResponse(mockResolve));
    let { result } = await (async () => renderHook(() => useGames()))();

    await act(async () => {
      expect(() => result.current.changePage("invalid argument")).toThrow(
        Error,
      );
    });
  });

  it("handle fetching error", async () => {
    fetch.mockImplementation(() => Promis.reject(new Error("Fetch Error")));
    let { result } = await (async () => renderHook(() => useGames()))();

    await act(async () => {
      result.current.changePage(1);
    });

    expect(result.current.state.error).toBeInstanceOf(Error);
  });
});
