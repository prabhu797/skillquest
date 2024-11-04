import { Provider } from "react-redux";
import HelperApp from "./utils/HelperApp";
import { Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

import store from './store/Store';
import Spinner from "./components/uiComponents/Spinner";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App(props) {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<Spinner />}>
          <PersistGate persistor={persistor}>
            <BrowserRouter basename='/'>
              <HelperApp props={props} />
            </BrowserRouter>
          </PersistGate>
        </Suspense>
      </Provider>
    </>
  );
}
