interface InputNameFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  warninng: string;
}
export default function InputNameField({
  name,
  placeholder,
  warninng,
  type = "text",
}: InputNameFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor="" className="text-sm block font-semibold text-gray-700">
        {name}
      </label>
      <div className="relative">
        <input
          type={type}
          className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm `}
          placeholder={placeholder}
        />
        <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
          {warninng}
        </div>
      </div>
    </div>
  );
}
