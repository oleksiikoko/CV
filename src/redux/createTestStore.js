import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./rootReducer";
import { sagaWatcher } from "redux/sagaWatcher";

class Store {
  constructor(initialState) {
    this.saga = createSagaMiddleware();
    this.store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk, this.saga)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );

    this.saga.run(sagaWatcher);
  }

  get createdStore() {
    return this.store;
  }
}

export default Store;
