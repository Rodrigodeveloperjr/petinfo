interface IButton {
  text: string;
  background: string;
  borderColor: string;
  textColor: string;
  hoverBackground: string;
}

const Button = ({
  text,
  background,
  borderColor,
  textColor,
  hoverBackground,
}: IButton) => {
  return (
    <button
      className={`w-full h-38 ${background} border ${borderColor} rounded px-4 ${textColor} font-medium text-base hover:${hoverBackground}`}
    >
      {text}
    </button>
  );
};

export { Button };
