import { createStore, applyMiddleware, Middleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store = createStore(reducers, bindMiddleware([sagaMiddleware]));

  sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
