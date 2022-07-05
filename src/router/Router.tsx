import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/Pages/Home";
import { FetchCheck } from "../components/Pages/FetchCheck";
import { NodeFetchCheck } from "../components/Pages/NodeFetchCheck";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<FetchCheck />} />
        <Route path="/nodefetch" element={<NodeFetchCheck />} />
      </Routes>
    </BrowserRouter>
  );
});
