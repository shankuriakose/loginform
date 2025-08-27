import MultiStepForm from "@/components/multistepform/mulitstepform";
import { FormProvider } from "@/lib/context/formcontext";

export default function MultiStepFormPage() {
  return (
    <>
      <FormProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
          <MultiStepForm />
        </div>
      </FormProvider>
    </>
  );
}
