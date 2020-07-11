import React from "react";
import { render as rtlRender } from "@testing-library/react";
import createdStore from "redux/createStore";
import { Provider } from "react-redux";

function render(component, { store = createdStore } = {}) {
  return rtlRender(<Provider store={store}>{component}</Provider>);
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
