import { it, describe, expect, vi } from "vitest";

import getGamesList from "../../api/getGamesList";

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
  beforeEach(() => {
    fetch.mockReset();
  });

  it("Return games data", async () => {
    fetch.mockResolvedValue(fetchResponse(mockResolve));
    const data = await getGamesList();
    expect(data).toEqual(mockResolve);
  });

  it("To have been called with correct page ", async () => {
    fetch.mockResolvedValue(fetchResponse(mockResolve));
    const data = await getGamesList(2);
    expect(fetch.mock.calls[0].shift()).toEqual(
      "https://api.rawg.io/api/games?key=f008b5f591794723b4303e2b1bb23169&page=2",
    );
  });

  it("Handle error", async () => {
    const data = await getGamesList("invalid page number");
    expect(data).toThrow(Error);
  });
});
