import MultiStepHeader from "./formparts/header";
import { Lock, User, Mail } from "lucide-react";
import MultiStepH3 from "./formparts/multisteph3";
import ReviewDisplayField from "./formparts/reviewdisplayfield";

export default function ReviewStep() {
  return (
    <div className="space-y-8">
      <MultiStepHeader
        title="Review & Submit"
        description="Please review your information before submitting"
        icon={Lock}
      />
      {/* Review Sections */}
      <div className="space-y-6">
        {/* Card 1 Personal information*/}
        <div className="bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl p-8 shadow-lg">
          <MultiStepH3 title="Personal Information" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewDisplayField label="Full name" value="Logical data" />
            <ReviewDisplayField label="Date of Birth" value="Logical Data" />
            <ReviewDisplayField label="Gender" value="Logical Data" />
          </div>
        </div>
        {/* Card 2  Contact information*/}
        <div className="bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl p-8 shadow-lg">
          <MultiStepH3 title="Contact Information" icon={Mail} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ReviewDisplayField label="Email Adress" value="Logical data" />
            <ReviewDisplayField label="Phone Number" value="Logical Data" />
            <ReviewDisplayField label="Full Adress" value="Logical Data" />
          </div>
        </div>
        {/* Card 3  Preferences*/}
        <div className="bg-gradient-to-r from-white to-blue-50/30 backdrop-blur-sm border-2 border-blue-200/50 rounded-2xl p-8 shadow-lg">
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Newsletter
            </span>
            <div className="flex items-center">
              {/* Conditional rendering */}
              <div className={`w-3 h-3 rounded-full mr-2 `}></div>
              <p className="text-lg font-semibold text-gray-900"></p>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Notifications
            </span>
            <div className="flex items-center">
              {/* Conditional rendering */}
              <div className={`w-3 h-3 rounded-full mr-2 `}></div>
              <p className="text-lg font-semibold text-gray-900"></p>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Theme
            </span>
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="text-lg font-semibold text-gray-900 capitalize "></p>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Language
            </span>
            <div className="flex items-center">
              <div className="flex items-center">
                <p className="text-lg font-semibold text-gray-900 uppercase tracking-wide"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
