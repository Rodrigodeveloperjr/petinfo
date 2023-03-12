interface IModalBackground {
  children: React.ReactNode;
}

const ModalBackground = ({ children }: IModalBackground) => {
  return (
    <div className="w-full h-screen overflow-auto fixed inset-0 flex flex-row justify-center items-center z-50 bg-custom-shadow-1 px-5">
      {children}
    </div>
  );
};

export { ModalBackground };
