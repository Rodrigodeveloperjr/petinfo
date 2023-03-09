import { Routes, Route } from "react-router-dom";
import { PageSignUp } from "../pages/PageSignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSignUp />} />
    </Routes>
  );
};

export { AllRoutes };
