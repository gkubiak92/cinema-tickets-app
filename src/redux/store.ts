import { createStore, applyMiddleware, Middleware } from "redux";
import { persistStore } from "redux-persist";
import persistedRootReducer from "./root-reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(
  persistedRootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
