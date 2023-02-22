import rootReducer from "./reducers";
import { rootSaga } from "../saga";
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store