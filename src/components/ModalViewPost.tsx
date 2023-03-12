import photo from "../assets/Rectangle 5 (1).svg";
import x from "../assets/X.svg";

const ModalViewPost = () => {
  return (
    <div className="w-full max-w-800 flex flex-col justify-start items-start p-6 bg-custom-gray-9 rounded-lg sm:items-end">
      <div className="w-full flex flex-row">
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

        <div className="w-10 h-8 flex flex-row justify-center items-center bg-custom-gray-6 rounded cursor-pointer">
          <img src={x} alt="x" />
        </div>
      </div>

      <h2 className="text-custom-gray-1 font-semibold text-2xl pb-6">
        Outubro Rosa: Detalhes sobre a importância da prevenção do câncer de
        mama em cadelas e gatas
      </h2>

      <p className="text-custom-gray-3 font-normal text-base">
        Assim como em humanos, cadelas e gatas também podem desenvolver câncer
        de mama. Ainda hoje, para ambas as espécies, o câncer de mama tem maior
        incidência. Mesmo com a evolução da medicina veterinária e da oncologia,
        o câncer de mama muitas vezes não tem cura, sendo o tratamento paliativo
        uma alternativa para dar conforto às fêmeas. Por isso, a conscientização
        sobre o tema é uma das ações de prevenção de maior importância,
        principalmente para a campanha do outubro rosa. Então como podemos
        ajudar a prevenir o câncer de mama em cadelas e gatas? Assim como outros
        tipos de câncer, o câncer de mama pode ter inúmeras causas. Entre as
        mais comuns, temos fatores genéticos, como predisposição de algumas
        raças, exposição à poluição, tabagismo passivo, obesidade, além do fato
        de os pets estarem vivendo mais, o que também pode causar maior chances
        de tumores. No caso do câncer de mama, a influência hormonal é um dos
        fatores de maior contribuição para o aparecimento dessa doença.
      </p>
    </div>
  );
};

export { ModalViewPost };
