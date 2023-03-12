import photo from "../assets/Rectangle 5 (1).svg";
import { Button } from "./Button";

const Post = () => {
  return (
    <div className="w-full max-w-800 flex flex-col justify-start items-start mb-16">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full flex flex-row items-center pb-6">
          <div className="flex flex-row items-center">
            <img src={photo} className="w-8 h-8 rounded-full" />
            <h3 className="text-custom-gray-1 font-medium text-sm pl-1.5 whitespace-nowrap">
              Rodrigo Silva
            </h3>
          </div>

          <p className="text-custom-gray-4 font-medium text-sm whitespace-nowrap pl-3.5">
            Outubro de 2022
          </p>
        </div>

        <div className="w-full max-w-127 h-8 flex flex-row justify-between items-center pb-4 md:pb-0">
          <Button
            text="Editar"
            background="bg-custom-gray-9"
            borderColor="border-custom-gray-6"
            textColor="text-custom-gray-1"
            hoverBackground="bg-custom-gray-8"
            maxWidth="max-w-32"
          />
          <Button
            text="Excluir"
            background="bg-custom-gray-7"
            borderColor="border-custom-gray-6"
            textColor="text-custom-gray-4"
            hoverBackground="bg-custom-gray-1"
            maxWidth="max-w-32"
          />
        </div>
      </div>

      <h2 className="text-custom-gray-1 font-semibold text-2xl pb-6">
        Outubro Rosa: Detalhes sobre a importância da prevenção do câncer de
        mama em cadelas e gatas
      </h2>

      <p className="text-custom-gray-3 font-semibold text-sm pb-5">
        Assim como em humanos, cadelas e gatas também podem desenvolver câncer
        de mama. Ainda hoje, para ambas as espécies, o câncer de mama tem
        maior...
      </p>

      <a className="text-custom-brand-1 font-medium text-base cursor-pointer hover:underline">
        Acessar publicação
      </a>
    </div>
  );
};

export { Post };
