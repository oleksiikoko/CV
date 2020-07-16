import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

import { Contacts } from "components";
import { act } from "react-dom/test-utils";

afterEach(cleanup);

describe("BottomPageSwitcher", () => {
  const items = [
    {
      iconId: "phone",
      contact: "+380966138713",
    },
    {
      iconId: "telegram",
      contact: "@oleksii_ko",
      href: "https://t.me/oleksii_ko",
    },
    {
      iconId: "mail",
      contact: "oleksiij.ko@gmail.com",
      href: "mailto: oleksiij.ko@gmail.com",
    },
  ];

  beforeEach(() => {
    render(<Contacts items={items} />);
  });

  it("contacts count", () => {
    expect(screen.queryAllByTestId("contacts")).toHaveLength(items.length);
  });

  it("container have class", () => {
    screen.getAllByTestId("contacts").map((item) => {
      expect(item).toHaveClass("contact-item df");
    });
  });

  it("contacts have text", () => {
    items.map((item) => {
      expect(screen.getByText(item.contact)).toBeTruthy();
    });
  });
});
