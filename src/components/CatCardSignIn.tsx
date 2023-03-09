import cat2 from "../assets/Rectangle 3 (1).svg";
import cat3 from "../assets/Rectangle 5 (1).svg";
import cat4 from "../assets/Rectangle 4 (1).svg";
import cat from "../assets/Rectangle 2 (1).svg";

const CatCardSignIn = () => {
  return (
    <div className="w-full max-w-391 h-479 mr-0 mb-20 md:mr-10">
      <h1 className="text-custom-gray-1 font-medium text-4xl">Petinfo</h1>

      <h2 className="text-custom-gray-1 font-semibold text-3xl py-6 flex">
        Amor e carinho por meio do conhecimento
      </h2>

      <p className="text-custom-gray-3 font-normal text-base pb-6">
        Todas as informações para melhorar a vida do seu pet em um só lugar
      </p>

      <div className="flex flex-row justify-start">
        <div className="flex flex-col justify-between pr-5">
          <div className="flex flex-row justify-between">
            <img src={cat} alt="cat" className="mr-2" />
            <img src={cat2} alt="cat" />
          </div>

          <img src={cat4} alt="cat" />
        </div>

        <img src={cat3} alt="cat" className="mr-2" />
      </div>
    </div>
  );
};

export { CatCardSignIn };
