import React from "react";
import { render as rtlRender } from "@testing-library/react";
import Store from "redux/createTestStore";
import { Provider } from "react-redux";

function renderWithRedux(
  component,
  { initialState, store = new Store(initialState).createdStore } = {}
) {
  return rtlRender(<Provider store={store}>{component}</Provider>);
}

export { renderWithRedux };
