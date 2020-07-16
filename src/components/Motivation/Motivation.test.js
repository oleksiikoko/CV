import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { Motivation } from "components";

afterEach(cleanup);

describe("Header", () => {
  const items = [
    {
      text: "Ukrainian motivation",
      language: "Ukrainian",
    },
    {
      text: "En motivation",
      language: "English",
    },
  ];

  beforeEach(() => {
    render(<Motivation items={items} />);
  });

  it("container render", () => {
    expect(screen.queryByTestId("motivation")).toBeTruthy();
    expect(screen.queryByTestId("motivation")).toHaveClass("motivation");
  });

  it("language render", () => {
    expect(screen.queryByTestId("motivation__language")).toBeTruthy();
    expect(screen.queryByTestId("motivation__language")).toHaveClass(
      "motivation__language"
    );
  });

  it("language-btn items[0] render", () => {
    expect(screen.queryByText(items[0].language)).toBeTruthy();
    expect(screen.queryByText(items[0].language)).toHaveClass(
      "motivation__language__active-btn"
    );
  });

  it("language-btn items[1] render", () => {
    expect(screen.queryByText(items[1].language)).toBeTruthy();
    expect(screen.queryByText(items[1].language)).not.toHaveClass(
      "motivation__language__active-btn"
    );
  });

  it("on item[1] click then on item[0] click", () => {
    act(() => {
      fireEvent.click(screen.queryByText(items[1].language));
    });
    expect(screen.queryByText(items[0].language)).toBeTruthy();
    expect(screen.queryByText(items[0].language)).not.toHaveClass(
      "motivation__language__active-btn"
    );
    expect(screen.queryByText(items[1].language)).toBeTruthy();
    expect(screen.queryByText(items[1].language)).toHaveClass(
      "motivation__language__active-btn"
    );

    act(() => {
      fireEvent.click(screen.queryByText(items[0].language));
    });
    expect(screen.queryByText(items[0].language)).toBeTruthy();
    expect(screen.queryByText(items[0].language)).toHaveClass(
      "motivation__language__active-btn"
    );
    expect(screen.queryByText(items[1].language)).toBeTruthy();
    expect(screen.queryByText(items[1].language)).not.toHaveClass(
      "motivation__language__active-btn"
    );
  });

  it("motivation__descriptioin", () => {
    expect(screen.queryByTestId("description")).toBeTruthy();
  });
});
