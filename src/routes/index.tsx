import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { SubHeader } from "../components/SubHeader";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Post />} />
    </Routes>
  );
};

export { AllRoutes };
