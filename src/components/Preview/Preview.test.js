import React from "react";
import { act, render, cleanup, screen } from "@testing-library/react";

import { Preview } from "components";
import { gif } from "assets/testData/base64.gif.json";

afterEach(cleanup);

describe("GifPreview component ", () => {
  describe("<Preview gif={gif} _id='testId' active={false} />", () => {
    let rendered;

    beforeEach(() => {
      rendered = render(<Preview gif={gif} _id="testId" active={false} />);
    });

    it("PreviewButton rendered", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toBeTruthy();
    });

    it("img have className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toBeTruthy();
    });
  });

  describe("<Preview _id='testId' active={false} />", () => {
    let rendered;

    beforeEach(() => {
      rendered = render(<Preview _id="testId" active={false} />);
    });

    it("PreviewButton rendered", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).not.toBeTruthy();
    });

    it("img have className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).not.toBeTruthy();
    });
  });
});
