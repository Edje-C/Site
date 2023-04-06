import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/chat";

import Enter from "/pages/enter.tsx";

export const AppContext = createContext({
  name: "",
  setName: (name) => {},
});

const App = () => {
  const [name, setName] = useState("");

  return (
    <AppContext.Provider value={{ name, setName }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
