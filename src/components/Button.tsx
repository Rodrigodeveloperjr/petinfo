interface IButton {
  text: string;
  background: string;
  borderColor: string;
  textColor: string;
}

const Button = ({ text, background, borderColor, textColor }: IButton) => {
  return (
    <button
      className={`w-full h-38 ${background} border ${borderColor} rounded px-4 ${textColor} font-medium text-base`}
    >
      {text}
    </button>
  );
};

export { Button };
