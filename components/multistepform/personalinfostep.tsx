import { User } from "lucide-react";
import MultiStepHeader from "./formparts/header";
import InputNameField from "./formparts/inputnamefield";

export default function PersonalInfoStep() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <MultiStepHeader
        title="Personal Information"
        description="Tell us a bit about yourself to get started"
      />
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Name */}
        <InputNameField
          name="First name"
          placeholder="Enter your first name"
          warninng="Please enter your first name"
        />
        {/* Last Name */}
        <InputNameField
          name="Last name"
          placeholder="Enter your last name"
          warninng="Please enter your last name"
        />
      </div>
      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Date of birth*/}
        <div className="space-y-2">
          <label
            htmlFor=""
            className="text-sm block font-semibold text-gray-700"
          >
            Date of Birth*
          </label>
          <div className="relative">
            <input
              type="date"
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm `}
              placeholder="Enter your first name"
            />
            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
              Please enter date of birth
            </div>
          </div>
        </div>
        {/* Gender */}
        <div className="space-y-2">
          <label
            htmlFor=""
            className="text-sm block font-semibold text-gray-700"
          >
            Gender
          </label>
          <select
            name=""
            id=""
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20b focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm hover:border-gray-300 "
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="Prefer_not_to_say">Prefer not to say</option>
          </select>
        </div>
      </div>
    </div>
  );
}
