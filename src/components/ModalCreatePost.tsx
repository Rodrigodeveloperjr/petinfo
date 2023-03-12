import { Button } from "./Button";
import x from "../assets/X.svg";
import { Input } from "./Input";

const ModalCreatePost = () => {
  return (
    <div className="w-full max-w-800 flex flex-col justify-start items-start p-6 bg-custom-gray-9 rounded-lg sm:items-end">
      <div className="w-full flex flex-row justify-between items-center mb-12">
        <h2 className="text-custom-gray-1 font-medium text-base sm:text-xl">
          Criando novo post
        </h2>

        <div className="w-10 h-8 flex flex-row justify-center items-center bg-custom-gray-6 rounded cursor-pointer">
          <img src={x} alt="x" />
        </div>
      </div>

      <Input label="Título do post" placeholder="Digite o título aqui..." />

      <div className="w-full mb-6">
        <label className="text-custom-gray-1 font-medium text-base">
          Conteúdo do post
        </label>
        <textarea
          placeholder="Desenvolva o conteúdo do post aqui..."
          className="w-full h-32 bg-custom-gray-8 border border-custom-gray-6 rounded p-4 mt-3 placeholder:text-custom-gray-4 placeholder:font-normal placeholder:text-base focus:bg-custom-gray-9 focus:border-custom-gray-1 resize-none"
        />
      </div>

      <div className="w-full h-20 flex flex-col-reverse justify-between items-start sm:max-w-225 sm:flex-row sm:items-center sm:h-auto">
        <Button
          text="Cancelar"
          background="bg-custom-gray-6"
          borderColor="border-custom-gray-6"
          textColor="text-custom-gray-4"
          hoverBackground="bg-custom-gray-9"
          maxWidth="sm:max-w-105"
        />
        <Button
          text="Publicar"
          background="bg-custom-brand-1"
          borderColor="border-custom-brand-1"
          textColor="text-custom-gray-9"
          hoverBackground="bg-custom-brand-2"
          maxWidth="sm:max-w-105"
        />
      </div>
    </div>
  );
};

export { ModalCreatePost };
