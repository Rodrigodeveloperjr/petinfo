import { CatCardSignIn } from "../components/CatCardSignIn";
import { FormSignIn } from "../components/FormSignIn";

const SignIn = () => {
  return (
    <div className="flex flex-col min-h-screen p-5 justify-center items-start box-border md:flex-row md:items-center">
      <CatCardSignIn />
      <FormSignIn />
    </div>
  );
};

export { SignIn };
