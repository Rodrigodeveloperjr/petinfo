import { Input } from "../Input";

const FormSignUp = () => {
  return (
    <form className="w-full max-w-369 h-672 bg-custom-gray-9 border border-custom-gray-10 rounded py-11 px-6 box-border">
      <div className="h-8 flex flex-row items-center justify-between">
        <h2 className="text-custom-gray-11 font-medium text-xl">Cadastro</h2>
        <a className="w-full max-w-160 h-8 flex flex-row items-center border border-custom-gray-6 rounded px-2 text-custom-gray-1 font-medium text-sm">
          Voltar para o login
        </a>
      </div>

      <div>
        <Input label="Usuário" placeholder="Digite seu usuário aqui" />
        <Input label="Email" placeholder="Digite seu email aqui" />
        <Input
          label="Link da foto do perfil"
          placeholder="Insira o link aqui"
        />
        <Input label="Senha" placeholder="Digite sua senha aqui" />
      </div>
    </form>
  );
};

export { FormSignUp };
