import React from "react";
import { act, render, cleanup, screen } from "@testing-library/react";

import { GifPreview } from "components";
import { gif } from "assets/testData/base64.gif.json";
import { stringToImgSource, calculateGifHeightInsideBlockWidth } from "utils";

describe("GifPreview component ", () => {
  describe("<GifPreview gifPreview={gif} showPreview={false} onPreviewEnded={onPreviewEnded} name='testName' />", () => {
    const onPreviewEnded = jest.fn();
    let rendered;

    beforeEach(() => {
      rendered = render(
        <GifPreview
          gif={gif}
          showPreview={false}
          onPreviewEnded={onPreviewEnded}
          name="testName"
        />
      );
    });

    it("img rendered", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toBeTruthy();
    });

    it("img have className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toHaveClass(
        "portfolio__gif-preview"
      );
    });

    it("img have id", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toHaveAttribute("id", "testName");
    });

    it("img have alt", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toHaveAttribute(
        "alt",
        "testName preview"
      );
    });
  });

  describe("<GifPreview gifPreview={gif} showPreview={false} onPreviewEnded={onPreviewEnded} name='testName' />", () => {
    const onPreviewEnded = jest.fn();
    let rendered;

    beforeEach(() => {
      rendered = render(
        <GifPreview
          gif={gif}
          showPreview={true}
          onPreviewEnded={onPreviewEnded}
          name="testName"
        />
      );
    });

    it("img rendered", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toBeTruthy();
    });

    it("img have className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toHaveClass(
        "portfolio__gif-preview portfolio__gif-preview--show"
      );
    });

    it("img have id", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toHaveAttribute("id", "testName");
    });

    it("img have alt", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toHaveAttribute(
        "alt",
        "testName preview"
      );
    });
  });
});
