import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { ExperienceItem } from "components";
import { formatDateMmYyyy } from "utils";

afterEach(cleanup);

describe("ExperienceItem", () => {
  const item = {
    companyName:
      'Blockchain-based mobile development startup - "Extracoin/Etalonium"',
    position: "C++/Qt developer",
    link: "https://etalonium.io/ ",
    startDate: "2019-01-01",
    endDate: "2019-12-01",
    tasks: [
      {
        task: "Decentralized application development",
      },
      {
        task: "Multithreaded code execution",
      },
      {
        task: "Finding and preventing memory leaks",
      },
      {
        task: "Blockchain network support",
      },
    ],
  };
  const formattedDateStart = formatDateMmYyyy(item.startDate);
  const formattedDateEnd = formatDateMmYyyy(item.endDate);
  const linkName = item.link.replace("https://", "").replace("/", "");

  beforeEach(() => {
    render(<ExperienceItem item={item} />);
  });

  it("item have class", () => {
    expect(screen.queryByTestId("experience-item")).toBeTruthy();
    expect(screen.queryByTestId("experience-item")).toHaveClass(
      "experience-item"
    );
  });

  it("item have position", () => {
    expect(screen.queryByText(item.position)).toBeTruthy();
    expect(screen.queryByText(item.position)).toHaveClass(
      "experience-item__position"
    );
  });

  it("item have date", () => {
    expect(
      screen.queryByText(`${formattedDateStart} - ${formattedDateEnd}`)
    ).toBeTruthy();
    expect(
      screen.queryByText(`${formattedDateStart} - ${formattedDateEnd}`)
    ).toHaveClass("experience-item__date");
  });

  it("item have company name", () => {
    expect(screen.queryByText(item.companyName)).toBeTruthy();
    expect(screen.queryByText(item.companyName)).toHaveClass(
      "experience-item__company"
    );
  });

  it("item have company name", () => {
    item.tasks.map((task) => {
      expect(screen.queryByText(task.task)).toBeTruthy();
      expect(screen.queryByText(task.task).closest("ul")).toBeTruthy();
    });
  });

  it("item have company link", () => {
    item.tasks.map((task) => {
      expect(screen.queryByTestId("company-link")).toBeTruthy();
      expect(screen.queryByTestId("company-link")).toHaveAttribute(
        "href",
        item.link
      );
    });
  });
});
