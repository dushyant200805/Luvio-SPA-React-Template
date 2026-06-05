import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import "./index.css";
// ================= Font Awesome (All Icons) =================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);


// ================= Render App =================
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
); 