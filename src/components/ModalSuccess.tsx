import done from "../assets/Group 17.svg";

const ModalSuccess = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start pb-4 bg-custom-gray-9 shadow-2xl fixed bottom-7 right-4 left-0 rounded p-8 sm:h-32 sm:left-auto sm:max-w-md">
      <div className="flex flex-row justify-center items-center pb-4">
        <img src={done} alt="feito" />
        <h3 className="text-custom-sucess font-medium text-base pl-3">
          Sua conta foi criada com sucesso!
        </h3>
      </div>

      <p className="text-custom-gray-2 font-normal text-sm">
        Agora você pode acessar os conteúdos utilizando seu usuário e senha na
        página de login:{" "}
        <a className="text-custom-brand-1 cursor-pointer underline">
          Acessar página de login
        </a>
      </p>
    </div>
  );
};

export { ModalSuccess };
