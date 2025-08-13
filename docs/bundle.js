            var count = 0;
              return func.call(context, child, count++);
          function useRef2(initialValue) {
          function useEffect2(create, deps) {
          exports.useEffect = useEffect2;
          exports.useRef = useRef2;
          var React5 = require_react();
          var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                  React5.Children.forEach(props.children, function(child) {
          function getSelection(input2) {
            if ("selectionStart" in input2) {
                start: input2.selectionStart,
                end: input2.selectionEnd
              selection = getOffsets(input2);
          function setSelection(input2, offsets) {
            if ("selectionStart" in input2) {
              input2.selectionStart = start;
              input2.selectionEnd = Math.min(end, input2.value.length);
              setOffsets(input2, offsets);
          didWarnOld18Alpha || void 0 === React5.startTransition || (didWarnOld18Alpha = true, console.error(
          useEffect2(
        var React5 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React5.useState, useEffect2 = React5.useEffect, useLayoutEffect = React5.useLayoutEffect, useDebugValue = React5.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
        exports.useSyncExternalStore = void 0 !== React5.useSyncExternalStore ? React5.useSyncExternalStore : shim;
          var React5 = require_react();
          var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          var jsx5 = jsxWithValidationDynamic;
          exports.jsx = jsx5;
  var import_react5 = __toESM(require_react(), 1);
  // src/components/ui/button.jsx
  var import_react2 = __toESM(require_react(), 1);

  // src/lib/utils.js
  function cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // src/components/ui/button.jsx
  var Button = import_react2.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      ref,
      className: cn(
        "inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-50",
        className
      ),
      ...props
    }
  ));
  Button.displayName = "Button";

  // src/components/ui/input.jsx
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var Input = import_react3.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "input",
    {
      ref,
      className: cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      ),
      ...props
    }
  ));
  Input.displayName = "Input";

  // src/components/ui/textarea.jsx
  var import_react4 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var Textarea = import_react4.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "textarea",
    {
      ref,
      className: cn(
        "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      ),
      ...props
    }
  ));
  Textarea.displayName = "Textarea";

  // src/main.jsx
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var apiKey = d("");
  var model = d("openrouter/auto");
  var input = d("");
  var messages = d([]);
  function ChatMessage({ role, content }) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: `my-2 ${role === "user" ? "text-right" : "text-left"}`, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: `inline-block rounded-lg px-4 py-2 max-w-full break-words ${role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`,
        children: content
      }
    ) });
  }
    const endRef = (0, import_react5.useRef)(null);
    (0, import_react5.useEffect)(() => {
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
            Authorization: `Bearer ${apiKey.value}`
          },
          body: JSON.stringify({
            model: model.value,
            messages: messages.value
          })
        });
        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || "No response";
        messages.value = [...messages.value, { role: "assistant", content: reply }];
      } catch (e3) {
        messages.value = [
          ...messages.value,
          { role: "assistant", content: `Error: ${e3.message}` }
        ];
      }
    };
    const handleKey = (e3) => {
      if (e3.key === "Enter" && !e3.shiftKey) {
        e3.preventDefault();
        sendMessage();
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex h-screen flex-col bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col gap-2 border-b p-4 sm:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Input,
          {
            type: "password",
            placeholder: "OpenRouter API Key",
            value: apiKey.value,
            onInput: (e3) => apiKey.value = e3.target.value,
            className: "sm:w-1/2"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Input,
          {
            placeholder: "Model (e.g. openrouter/auto)",
            value: model.value,
            onInput: (e3) => model.value = e3.target.value,
            className: "sm:w-1/2"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex-1 overflow-y-auto p-4", children: [
        messages.value.map((m2, i2) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChatMessage, { ...m2 }, i2)),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref: endRef })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex gap-2 border-t p-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Textarea,
          {
            rows: 2,
            placeholder: "Type your message...",
            value: input.value,
            onInput: (e3) => input.value = e3.target.value,
            onKeyDown: handleKey,
            className: "flex-1"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { onClick: sendMessage, children: "Send" })
    import_client.default.createRoot(root).render(/* @__PURE__ */ (0, import_jsx_runtime4.jsx)(App, {}));
