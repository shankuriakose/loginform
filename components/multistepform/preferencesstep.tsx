import MultiStepHeader from "./formparts/header";
import { Mail, Settings } from "lucide-react";
import SettingsWidget from "./formparts/settingswidget";
import MultiSelect from "./formparts/multiselect";
import { languageOptions, themeOptions } from "@/lib/data";
import MultiStepH3 from "./formparts/multisteph3";

export default function PreferenceStep() {
  return (
    <div className="space-y-8">
      <MultiStepHeader
        title="Preferences"
        description="Customise your experience"
        icon={Settings}
      />
      {/* From fields */}
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50">
          <MultiStepH3 title="Communication Preferences" icon={Mail} />
          <div className="space-y-6">
            <SettingsWidget
              title="Newsletter Subscription"
              description="Recieve our weekly Newsletter updates"
            />
            <SettingsWidget
              title="Push notification"
              description="Get notified about important updates and messages"
            />
          </div>
        </div>
        {/* Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MultiSelect title="Theme Preference" options={themeOptions} />
          {/* Language */}
          <MultiSelect title="Language Preference" options={languageOptions} />
        </div>
      </div>
    </div>
  );
}
