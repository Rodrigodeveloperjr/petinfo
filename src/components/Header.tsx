import photo from "../assets/Rectangle 5 (1).svg";
import { Button } from "./Button";

const Header = () => {
  return (
    <header className="w-full max-w-603 h-138 flex flex-row justify-between items-center">
      <h1 className="text-custom-gray-1 font-medium text-2xl">Petinfo</h1>

      <div className="w-full max-w-205 flex flex-row justify-between items-center">
        <Button
          text="Criar publicação"
          background="bg-custom-brand-1"
          borderColor="border-custom-brand-1"
          textColor="text-custom-gray-9"
          hoverBackground="bg-custom-brand-2"
          maxWidth="max-w-152"
        />
        <img
          src={photo}
          className="w-10 h-10 rounded-full border border-custom-brand-1"
        />
      </div>
    </header>
  );
};

export { Header };
