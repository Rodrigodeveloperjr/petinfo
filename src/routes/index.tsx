import { FormSignIn } from "../components/FormSignIn";
import { Routes, Route } from "react-router-dom";
import { PageSignUp } from "../pages/PageSignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSignUp />} />
      <Route path="/signin" element={<FormSignIn />} />
    </Routes>
  );
};

export { AllRoutes };
