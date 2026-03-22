import { useState } from "react";
import Home from "./pages/Home";
import Result from "./pages/Result";

function navigate(setPage, page) {
  setPage(page);
  window.scrollTo({ top: 0, behavior: "instant" });
}

export default function App() {
  const [page, setPage] = useState("home");
  const [roastData, setRoastData] = useState(null);

  return page === "home" ? (
    <Home
      onNavigateToResult={(data) => {
        setRoastData(data);
        navigate(setPage, "result");
      }}
      onNavigateHome={() => navigate(setPage, "home")}
    />
  ) : (
    <Result
      roastData={roastData}
      onNavigateHome={() => navigate(setPage, "home")}
    />
  );
}
