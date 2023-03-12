import { Button } from "./Button";
import x from "../assets/X.svg";

const ModalRemovePost = () => {
  return (
    <div className="w-full max-w-800 flex flex-col justify-start items-start p-6 bg-custom-gray-9 rounded-lg">
      <div className="w-full flex flex-row justify-between items-center mb-12">
        <h3 className="text-custom-gray-1 font-medium text-base sm:text-xl">
          Confirmação de exclusão
        </h3>

        <div className="w-10 h-8 flex flex-row justify-center items-center bg-custom-gray-6 rounded cursor-pointer">
          <img src={x} alt="x" />
        </div>
      </div>

      <h2 className="text-custom-gray-1 font-medium text-2xl mb-4">
        Tem certeza que deseja excluir este post?
      </h2>

      <p className="text-custom-gray-3 font-normal text-base mb-12">
        Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes
        de concluir
      </p>

      <div className="w-full h-20 flex flex-col-reverse justify-between items-start sm:max-w-302 sm:flex-row sm:items-center sm:h-auto">
        <Button
          text="Cancelar"
          background="bg-custom-gray-6"
          borderColor="border-custom-gray-6"
          textColor="text-custom-gray-4"
          hoverBackground="bg-custom-gray-8"
          maxWidth="sm:max-w-97"
        />
        <Button
          text="Sim, excluir este post"
          background="bg-custom-alert-1"
          borderColor="border-custom-alert-1"
          textColor="text-custom-gray-9"
          hoverBackground="bg-custom-alert-2"
          maxWidth="sm:max-w-189"
        />
      </div>
    </div>
  );
};

export { ModalRemovePost };
