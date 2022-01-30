import { StylesProvider } from "@material-ui/core/styles";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./components/App";
import rootReducer from "./module";
import { ChakraProvider } from "@chakra-ui/react";

// vscode.postMessage({ command: "init" });

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
