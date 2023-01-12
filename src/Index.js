import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
