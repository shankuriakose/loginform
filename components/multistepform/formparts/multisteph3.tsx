import React from "react";
import { User } from "lucide-react";

interface MultiStepH3Props {
  title: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function MultiStepH3({
  title,
  icon: Icon = User,
}: MultiStepH3Props) {
  return (
    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
        <Icon className="w-4 h-4 text-white" />
      </div>
      {title}
    </h3>
  );
}
