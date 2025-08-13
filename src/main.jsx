import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { signal } from "@preact/signals-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

const apiKey = signal("");
const model = signal("openrouter/auto");
const input = signal("");
const messages = signal([]);

function ChatMessage({ role, content }) {
  return (
    <div className={`my-2 ${role === "user" ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block rounded-lg px-4 py-2 max-w-full break-words ${
          role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function App() {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.value.length]);

  const sendMessage = async () => {
    if (!apiKey.value || !input.value) return;
    const userMsg = { role: "user", content: input.value };
    messages.value = [...messages.value, userMsg];
    input.value = "";
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey.value}`,
        },
        body: JSON.stringify({
          model: model.value,
          messages: messages.value,
        }),
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "No response";
      messages.value = [...messages.value, { role: "assistant", content: reply }];
    } catch (e) {
      messages.value = [
        ...messages.value,
        { role: "assistant", content: `Error: ${e.message}` },
      ];
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="flex flex-col gap-2 border-b p-4 sm:flex-row">
        <Input
          type="password"
          placeholder="OpenRouter API Key"
          value={apiKey.value}
          onInput={(e) => (apiKey.value = e.target.value)}
          className="sm:w-1/2"
        />
        <Input
          placeholder="Model (e.g. openrouter/auto)"
          value={model.value}
          onInput={(e) => (model.value = e.target.value)}
          className="sm:w-1/2"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.value.map((m, i) => (
          <ChatMessage key={i} {...m} />
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex gap-2 border-t p-4">
        <Textarea
          rows={2}
          placeholder="Type your message..."
          value={input.value}
          onInput={(e) => (input.value = e.target.value)}
          onKeyDown={handleKey}
          className="flex-1"
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
