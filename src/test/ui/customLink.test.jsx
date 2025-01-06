import { render, screen } from "@testing-library/react";
import { describe, test } from "vitest";
import CustomLink from "../../components/link/CustomLink";
import { MemoryRouter } from "react-router-dom";

describe("Custom Link variants", () => {
  // this tests rely on classList and css-modules hashes the className the we wrote, but still inlcude it in the hashed value
  function getBaseClassName(className) {
    return className.split("_")[1]; // this will give the className the written, by removing the hash strings
  }

  test("link on dark background", () => {
    render(
      <MemoryRouter>
        <CustomLink to="/" variant="link dark">
          Home
        </CustomLink>
      </MemoryRouter>,
    );

    const baseClassName = getBaseClassName(screen.getByText("Home").className);
    expect(baseClassName).toBe("linkOnDark");
  });

  test("link on light background", () => {
    render(
      <MemoryRouter>
        <CustomLink to="/" variant="link light">
          Home
        </CustomLink>
      </MemoryRouter>,
    );

    const baseClassName = getBaseClassName(screen.getByText("Home").className);
    expect(baseClassName).toBe("linkOnLight");
  });

  test("As button on light background", () => {
    render(
      <MemoryRouter>
        <CustomLink to="/" variant="button light">
          Home
        </CustomLink>
      </MemoryRouter>,
    );

    const baseClassName = getBaseClassName(screen.getByText("Home").className);
    expect(baseClassName).toBe("linkAsButtonOnLight");
  });

  test("As button on dark background", () => {
    render(
      <MemoryRouter>
        <CustomLink to="/" variant="button dark">
          Home
        </CustomLink>
      </MemoryRouter>,
    );

    const baseClassName = getBaseClassName(screen.getByText("Home").className);
    expect(baseClassName).toBe("linkAsButtonOnDark");
  });
});
