import React from "react";
import { act, render, cleanup, screen } from "@testing-library/react";

import { Preview } from "components";
import { gif } from "assets/testData/base64.gif.json";

describe("GifPreview component ", () => {
  describe("<GifPreview gifPreview={gif} showPreview={false} onPreviewEnded={onPreviewEnded} name='testName' />", () => {
    // jest.useFakeTimers();

    const onPreviewEnded = jest.fn();
    let rendered;

    beforeEach(() => {
      rendered = render(<Preview gifPreview={gif} _id={23} active={false} />);
      // act(() => {
      //   jest.useFakeTimers();
      // });
    });

    // it("img rendered", () => {
    //   act(() => {
    //     const { queryByTestId } = rendered;
    //     expect(queryByTestId("gif-preview")).toBeTruthy();
    //   });
    // });

    // it("img have className", () => {
    //   const { queryByTestId } = rendered;
    //   expect(queryByTestId("gif-preview")).toBeTruthy();
    // });
    it.todo("img have id");
    it.todo("img have src");
    it.todo("img have alt");
  });
});
