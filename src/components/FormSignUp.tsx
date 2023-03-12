import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";

const FormSignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-369 h-672 flex flex-col justify-between bg-custom-gray-9 border border-custom-gray-10 rounded py-11 px-6 box-border">
      <div className="h-8 flex flex-row items-center justify-between">
        <h2 className="text-custom-gray-11 font-medium text-xl">Cadastro</h2>
        <Link
          to="/signin"
          className="w-full max-w-160 h-8 flex flex-row items-center border border-custom-gray-6 rounded px-2 text-custom-gray-1 font-medium text-sm cursor-pointer hover:bg-custom-gray-8"
        >
          Voltar para o login
        </Link>
      </div>

      <form>
        <Input label="Usuário" placeholder="Digite seu usuário aqui" />
        <Input label="Email" placeholder="Digite seu email aqui" />
        <Input
          label="Link da foto do perfil"
          placeholder="Insira o link aqui"
        />
        <Input label="Senha" placeholder="Digite sua senha aqui" />

        <div className="h-102 flex flex-col justify-between items-start">
          <Button
            text="Cadastrar"
            background="bg-custom-brand-1"
            borderColor="border-custom-brand-1"
            textColor="text-custom-gray-9"
            hoverBackground="bg-custom-brand-2"
            maxWidth="max-w-321"
          />
          <Button
            text="Voltar para o login"
            background="bg-custom-gray-9"
            borderColor="border-custom-gray-6"
            textColor="text-custom-gray-1"
            hoverBackground="bg-custom-gray-8"
            maxWidth="max-w-321"
            onClick={() => navigate("/signin")}
          />
        </div>
      </form>
    </div>
  );
};

export { FormSignUp };
