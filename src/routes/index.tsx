import { FormSignIn } from "../components/FormSignIn";
import { Routes, Route } from "react-router-dom";
import { PageSignUp } from "../pages/PageSignUp";
import { CatCardSignIn } from "../components/CatCardSignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSignUp />} />
      <Route path="/signin" element={<CatCardSignIn />} />
    </Routes>
  );
};

export { AllRoutes };
