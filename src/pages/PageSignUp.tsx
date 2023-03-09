import { FormSignUp } from "../components/FormSignUp";
import { CatCard } from "../components/CatCard";

const PageSignUp = () => {
  return (
    <div className="flex flex-col-reverse min-h-screen p-5 justify-center items-start box-border md:flex-row md:items-center">
      <FormSignUp />
      <CatCard />
    </div>
  );
};

export { PageSignUp };
