import cat2 from "../assets/Rectangle 3.svg";
import cat3 from "../assets/Rectangle 5.svg";
import cat4 from "../assets/Rectangle 4.svg";
import cat from "../assets/Rectangle 2.svg";

const CatCard = () => {
  return (
    <div className="w-full max-w-320 h-419 ml-0 mb-20 md:ml-28">
      <h1 className="text-custom-gray-1 font-medium text-4xl">Petinfo</h1>

      <h2 className="text-custom-brand-1 font-semibold text-3xl py-6">
        Ooooooba!
      </h2>

      <p className="text-custom-gray-3 font-normal text-base pb-6">
        Agora vamos poder contribuir para o bem estar do seu pet por meio do
        conhecimento
      </p>

      <div className="flex flex-row justify-between">
        <img src={cat} alt="cat" className="mr-2" />

        <div className="flex flex-col justify-between pr-5">
          <div className="flex flex-row justify-between">
            <img src={cat2} alt="cat" className="mr-2" />
            <img src={cat3} alt="cat" />
          </div>

          <img src={cat4} alt="cat" />
        </div>
      </div>
    </div>
  );
};

export { CatCard };
