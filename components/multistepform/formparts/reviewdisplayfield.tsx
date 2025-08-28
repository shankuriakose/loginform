interface ReviewDisplayFieldProps {
  label: string;
  value: string;
}

export default function ReviewDisplayField({
  label,
  value,
}: ReviewDisplayFieldProps) {
  return (
    <div className="space-y-1">
      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </span>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );
}
