import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const LandingPage = lazy(() => import("../pages/LandingPage"));

export default function AppRoutes() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route index path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    );
  }
