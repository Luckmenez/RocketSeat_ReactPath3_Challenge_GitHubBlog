import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";

const Home = lazy(() => import("./pages/Home"));
const Issue = lazy(() => import("./pages/Issue"));

export function Router() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<Issue />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
