"use client";
import React, { createContext, useContext, useState } from "react";

type Step = {
  id: number;
  title: string;
  description: string;
};

type FormContextType = {
  currentStep: number;
  steps: Step[];
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps: Step[] = [
    { id: 1, title: "Personal Info", description: "Basic information" },
    { id: 2, title: "Contact Detail", description: "How to reach you" },
    { id: 3, title: "Preferences", description: "Customize choices" },
    { id: 4, title: "Review", description: "Final Check" },
  ];

  const value: FormContextType = {
    currentStep,
    steps,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
