import { User } from "lucide-react";

interface MultiStepHeaderProps {
  title: string;
  description: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function MultiStepHeader({
  title,
  description,
  icon: Icon = User,
}: MultiStepHeaderProps) {
  return (
    <div className="text-center mb-10">
      <div className="inline-flex items-center justify-center w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-3">{title}</h2>
      <p className=" text-gray-600 text-lg">{description}</p>
    </div>
  );
}
