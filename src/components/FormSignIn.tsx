import { Button } from "./Button";
import { Input } from "./Input";

const FormSignIn = () => {
  return (
    <div className="w-full max-w-369 h-600 flex flex-col justify-around bg-custom-gray-9 border border-custom-gray-10 rounded py-11 px-6 box-border">
      <h2 className="text-custom-gray-1 font-medium text-xl">Login</h2>

      <form>
        <Input label="Email" placeholder="ex@gmail.com" />
        <Input label="Senha" placeholder="*****" />

        <div>
          <Button
            text="Acessar"
            background="bg-custom-brand-1"
            borderColor="border-custom-brand-1"
            textColor="text-custom-gray-9"
            hoverBackground="bg-custom-brand-2"
          />
          <div className="h-82 flex flex-col justify-between items-center my-6 text-center">
            <p className="text-custom-gray-1 font-medium text-sm">
              Ainda não possui conta?
            </p>
            <p className="text-custom-gray-3 font-normal text-sm">
              Clicando no botão abaixo, você pode se cadastrar rapidamente
            </p>
          </div>
          <Button
            text="Cadastrar"
            background="bg-custom-gray-9"
            borderColor="border-custom-gray-6"
            textColor="text-custom-gray-1"
            hoverBackground="bg-custom-gray-8"
          />
        </div>
      </form>
    </div>
  );
};

export { FormSignIn };
