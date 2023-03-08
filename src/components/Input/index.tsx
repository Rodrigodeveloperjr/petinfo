interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="mb-6">
      <label className="text-custom-gray-1 font-medium text-base">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full h-11 bg-custom-gray-8 border border-custom-gray-6 rounded px-4 mt-3 placeholder:text-custom-gray-4 placeholder:font-normal placeholder:text-base focus:bg-custom-gray-9 focus:border-custom-gray-1"
      />
    </div>
  );
};

export { Input };
