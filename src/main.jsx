import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalContextProvider } from "./context/globalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
