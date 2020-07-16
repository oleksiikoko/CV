import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { Skills } from "components";

afterEach(cleanup);

describe("Header", () => {
  const skills = [
    {
      text:
        "Understanding JavaScript strengths and weaknesses, <b>es5</b> and <b>es6</b> Standards",
    },
    {
      text: "Manipulating a DOM model",
    },
    {
      text:
        "Markup of adaptive, flexbox HTML pages using SCSS preprocessor following the BEM methodology",
    },
    {
      text:
        "SPA application development using the React and React-router framework, implementation of the Redux state management tool",
    },
    {
      text:
        "Creating RestApi with Node.js, using Express and mongoose to work with MongoDB",
    },
    {
      text: "Writing clean, reusable, mutable code using OOP/OOD principles",
    },
    {
      text: "Networking protocols: TCP/IP, HTTP",
    },
    {
      text: "Linux",
    },
    {
      text: "Git",
    },
  ];

  beforeEach(() => {
    render(<Skills skills={skills} />);
  });

  it("container render", () => {
    expect(screen.queryByTestId("skills")).toBeTruthy();
  });

  it("container render", () => {
    expect(screen.queryAllByTestId("description")).toHaveLength(skills.length);
  });
});
