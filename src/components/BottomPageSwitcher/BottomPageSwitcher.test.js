import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

import { BottomPageSwitcher } from "components";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("BottomPageSwitcher", () => {
  const states = [{ name: "testName1" }, { name: "testName2" }];
  const onTabChange = jest.fn();

  beforeEach(() => {
    onTabChange.mockClear();
    render(
      <BottomPageSwitcher
        states={states}
        onTabChange={onTabChange}
        curTab={0}
      />
    );
  });

  it("container rendered", () => {
    expect(screen.queryByTestId("bottom-page-switcher")).toBeTruthy();
  });

  it("container have class", () => {
    expect(screen.queryByTestId("bottom-page-switcher")).toHaveClass(
      "bottom-page-switcher"
    );
  });

  it("button count", () => {
    expect(screen.queryAllByTestId("bottom-page-switcher__btn")).toHaveLength(
      2
    );
  });

  it("active button", () => {
    expect(screen.queryAllByTestId("bottom-page-switcher__btn")[0]).toHaveClass(
      "bottom-page-switcher--active"
    );
  });

  it("disabled button", () => {
    expect(
      screen.queryAllByTestId("bottom-page-switcher__btn")[1]
    ).not.toHaveClass("bottom-page-switcher--active");
  });

  it("active button click", () => {
    act(() => {
      fireEvent.click(screen.queryAllByTestId("bottom-page-switcher__btn")[0]);
    });

    expect(screen.queryAllByTestId("bottom-page-switcher__btn")[0]).toHaveClass(
      "bottom-page-switcher--active"
    );
    expect(
      screen.queryAllByTestId("bottom-page-switcher__btn")[1]
    ).not.toHaveClass("bottom-page-switcher--active");
    expect(screen.queryAllByTestId("bottom-page-switcher__btn")[0]).toHaveClass(
      "bottom-page-switcher--active"
    );
  });
});
