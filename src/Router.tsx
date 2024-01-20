import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

const Home = lazy(() => import("./pages/Home"));

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
