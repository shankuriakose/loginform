"use client";
import { useFormContext } from "@/lib/context/formcontext";
import { stepIcons } from "@/lib/icons";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import PersonalInfoStep from "./personalinfostep";
import ContactInfoStep from "./contactinfo";
import PreferencesStep from "./preferencesstep";
import ReviewStep from "./review";

export default function MultiStepForm() {
  const { steps, currentStep } = useFormContext();

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <ContactInfoStep />;
      case 3:
        return <PreferencesStep />;
      case 4:
        return <ReviewStep />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-12">
        {/*  ##TODO Imlpliment the logic */}
        <div className="flex items-center justify-between mb-6">
          {steps.map((step, index) => {
            const Icon = stepIcons[step.id];
            const isActive = currentStep === step.id;
            const isComplete = currentStep > step.id;

            return (
              <div className="flex items-center" key={step.id}>
                <div className="flex flex-col items-center ">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-500 transform ${
                      isComplete
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 border-green-500 text-white shadow scale-110"
                        : isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-600 text-white shadow-lg scale-110"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {isComplete ? (
                      <Check className="w-8 h-8" />
                    ) : (
                      <Icon className="w-8 h-8" />
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <p
                      className={`text-sm font-bold ${
                        isActive
                          ? "text-blue-600 "
                          : isComplete
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      Step {step.id}
                    </p>
                    <p
                      className={`text-xs font-bold ${
                        isActive
                          ? "text-blue-600 "
                          : isComplete
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p
                      className={`text-sm font-bold ${
                        isActive
                          ? "text-blue-600 "
                          : isComplete
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden sm:block w-24 h-1 mx-6 rounded-full transition-all duration-500 ${
                      currentStep > step.id
                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                        : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            );
          })}
        </div>
        {/* Mobile progress bar */}
        <div className="sm:hidden">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-black text-gray-700">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {steps[currentStep - 1].title}
            </span>
          </div>
          {/* Progressbar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-700"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
      {/* Form Content */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 p-10 mb-10">
        <div className="min-h-[600]">{renderStepComponent()}</div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between items">
        <button
          className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-200 ${
            currentStep === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-200 transform hover:-translate-y-1"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
        {currentStep < steps.length ? (
          <button
            className={`flex items-center px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-1`}
          >
            <ChevronRight className="w-5 h-5 mr-2" />
            Next Step
          </button>
        ) : (
          <button className="flex items-center px-10 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-1">
            Submit Registration
          </button>
        )}
      </div>
    </div>
  );
}
