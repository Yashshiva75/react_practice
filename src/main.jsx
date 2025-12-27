import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import ContextProvider from "./Context/Context.jsx";
import { store } from "./Redux/Store/Store.js";
import ThemeProvider from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  // <ContextProvider>
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  </Provider>
  /* </ContextProvider> */
);
