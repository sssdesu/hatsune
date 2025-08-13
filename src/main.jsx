import React from "react";
import ReactDOM from "react-dom/client";
import { signal } from "@preact/signals-react";
import "./index.css";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const count = signal(0);

function App() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Hello world</h1>
      <Button onClick={() => count.value++}>count: {count}</Button>
      <Card>
        <CardHeader>
          <CardTitle>Sample Card</CardTitle>
        </CardHeader>
        <CardContent>Shadcn UI works!</CardContent>
      </Card>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
