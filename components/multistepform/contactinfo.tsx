import MultiStepHeader from "./formparts/header";
import { Mail } from "lucide-react";
import InputNameField from "./formparts/inputnamefield";

export default function ContactInfoStep() {
  return (
    <div className="space-y-8">
      <MultiStepHeader
        title="Contact Information"
        description="How can we reach you"
        icon={Mail}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputNameField
          name="Email Address*"
          placeholder="Please enter your email address"
          type="email"
          warninng="Please enter your email address"
        />
        <InputNameField
          name="Phone Number*"
          placeholder="Please enter your phone number"
          warninng="Please enter your phone number"
        />
      </div>
      <InputNameField
        name="Adress*"
        placeholder="Please enter your adress"
        warninng="Please enter your your adress"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InputNameField
          name="City"
          placeholder="Please enter your City"
          warninng="Enter your city"
        />
        <InputNameField
          name="Zip code*"
          placeholder="Enter your Zip code"
          warninng="Please enter your zip code"
        />
      </div>
    </div>
  );
}
