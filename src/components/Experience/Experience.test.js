import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { Experience } from "components";

afterEach(cleanup);

describe("Experience", () => {
  const experienceItems = [
    {
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
    },
  ];

  beforeEach(() => {
    render(<Experience experienceItems={experienceItems} />);
  });

  it("item have items", () => {
    expect(screen.queryAllByTestId("experience-item")).toHaveLength(
      experienceItems.length
    );
  });
});
