import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles.css";
import colors from "../Variables/variableCollection.json";
import textTokens from "../Variables/textStyles.json";

const colorNames: Record<string, string> = { accent2: "accent-2" };
Object.entries(colors).forEach(([name, value]) => {
  if (name !== "$metadata") {
    document.documentElement.style.setProperty(`--${colorNames[name] ?? name}`, String(value));
  }
});
textTokens.textStyles.forEach((style) => {
  document.documentElement.style.setProperty(`--fs-${style.name}`, `${style.fontSize}px`);
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
