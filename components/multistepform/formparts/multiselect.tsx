import React from "react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  title: string;
  options: Option[];
  defaultValue?: string;
}

export default function MultiSelect({
  title,
  options,
  defaultValue,
}: MultiSelectProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        {title}
      </label>
      <select
        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-gray-300"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
