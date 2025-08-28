interface SettingsWidgetProps {
  title: string;
  description: string;
}

export default function SettingsWidget({
  title,
  description,
}: SettingsWidgetProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white/70 rounded-xl border border-gray-200 hover:bg-white/90 transition-all duration-200">
      <div className="flex-1">
        <label
          htmlFor=""
          className="text-base font-semibold text-gray-800 block mb-1"
        >
          {title}
        </label>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        type="button"
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 `}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 shadow-lg`}
        />
      </button>
    </div>
  );
}
