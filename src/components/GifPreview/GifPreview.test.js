import React from "react";
import ReactDOM from "react-dom";
import { act, render, cleanup } from "@testing-library/react";

import { GifPreview } from "components";
import { gif } from "assets/testData/base64.gif.json";

describe("GifPreview component ", () => {
  describe("<GifPreview gifPreview={gif} showPreview={false} onPreviewEnded={onPreviewEnded} name='testName' />", () => {
    // jest.useFakeTimers();

    const onPreviewEnded = jest.fn();
    let rendered = document.createElement("div");
    document.body.appendChild(rendered);

    beforeEach(() => {
      act(() => {
        ReactDOM.render(
          <GifPreview
            gifPreview={gif}
            showPreview={false}
            onPreviewEnded={onPreviewEnded}
            name="testName"
          />,
          rendered
        );
      });
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it("img rendered", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("gif-preview")).toBeTruthy();
    });

    // it("img have className", () => {
    //   const { queryByTestId } = rendered;
    //   expect(queryByTestId("gif-preview")).toBeTruthy();
    // });
    it.todo("img have id");
    it.todo("img have src");
    it.todo("img have alt");
  });
});
