import { User } from "lucide-react";

export default function PersonalInfoStep() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
          <User className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 mb-3">
          Personal Information
        </h2>
        <p className=" text-gray-600 text-lg">
          Tell us a bit about yourself to get started
        </p>
      </div>
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Name */}
        <div className="space-y-2">
          <label
            htmlFor=""
            className="text-sm block font-semibold text-gray-700"
          >
            First Name
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm `}
              placeholder="Enter your first name"
            />
            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
              Please enter your first name
            </div>
          </div>
        </div>
        {/* Last Name */}
        <div className="space-y-2">
          <label
            htmlFor=""
            className="text-sm block font-semibold text-gray-700"
          >
            Last Name
          </label>
          <div className="relative">
            <input
              type="text"
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm `}
              placeholder="Enter your Last name"
            />
            <div className="absolute -bottom-6 left-0 flex items-center text-red-500 text-sm">
              Please enter your Last name
            </div>
          </div>
        </div>
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
