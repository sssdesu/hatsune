import React from "react";
import ReactDOM from "react-dom/client";
import { signal } from "@preact/signals-react";

const count = signal(0);

function App() {
  return (
    <div className="p-4">
      <h1>Hello world</h1>
      <button onClick={() => count.value++}>count: {count}</button>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
