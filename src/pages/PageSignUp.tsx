import { CatCardSignUp } from "../components/CatCardSignUp";
import { FormSignUp } from "../components/FormSignUp";

const PageSignUp = () => {
  return (
    <div className="flex flex-col-reverse min-h-screen p-5 justify-center items-start box-border md:flex-row md:items-center">
      <FormSignUp />
      <CatCardSignUp />
    </div>
  );
};

export { PageSignUp };
