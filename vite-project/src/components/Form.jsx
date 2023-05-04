import { createContext, useState } from "react";
import { Stepper } from "react-form-stepper";
import FormField from "./UserField";
import Questions from "./Questions";
import Result from "./Result";
export const userProfileContext = createContext(null);
const UserProfileProvider = userProfileContext.Provider;

const RegisterUser = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userDetails, setUserDetails] = useState({
    basic: {
      name: "pragati",
      city: "bhopal",
      mobile: "764335",
    },
    questions: [
      {
        id: 1,
        name: "hobby",
        title: "What is your hobby",
        options: ["music", "cricket"],
        select: null,
      },
      {
        id: 2,
        name: "professionn",
        title: "what is your profession",
        options: ["Frontend", "Backened"],
        select: null,
      },
    ],
  });

  const steps = [{ label: "" }, { label: "" }, { label: "" }];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <FormField />;
      case 1:
        return <Questions />;
      case 2:
        return <Result />;
      default:
        return null;
    }
  }

  return (
    <UserProfileProvider value={{ userDetails, setUserDetails }}>
      <div>
        <Stepper steps={steps} activeStep={activeStep} />
        <div style={{ padding: "20px" }}>
          {getSectionComponent()}
          {activeStep !== 0 && activeStep !== steps.length - 1 && (
            <button onClick={() => setActiveStep(activeStep - 1)}>
              Previous
            </button>
          )}
          {activeStep !== steps.length - 1 && (
            <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
          )}
        </div>
      </div>
    </UserProfileProvider>
  );
};

export default RegisterUser;
