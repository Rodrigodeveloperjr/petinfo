import { MouseEventHandler } from "react";

interface IButton {
  text: string;
  background: string;
  borderColor: string;
  textColor: string;
  hoverBackground: string;
  maxWidth: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  text,
  background,
  borderColor,
  textColor,
  hoverBackground,
  maxWidth,
  onClick,
}: IButton) => {
  return (
    <button
      className={`w-full ${maxWidth} h-38 ${background} border ${borderColor} rounded px-4 ${textColor} font-medium text-base hover:${hoverBackground}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
