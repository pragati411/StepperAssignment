import { useMemo, useState } from "react";
import { Stepper } from "react-form-stepper";
import FormField from "./UserField";
import Questions from "./Questions";
import Result from "./Result";
import { UserProfileProvider } from "../context/userProfilecontext";
import { Container } from "./style";
const steps = [{ label: "" }, { label: "" }, { label: "" }];
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
        name: "profession",
        title: "what is your profession",
        options: ["Frontend", "Backened"],
        select: null,
      },
    ],
  });

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

  const changeView = (page) => {
    setActiveStep((prevState) => prevState + page);
  };

  const prevBtnDisable = useMemo(() => {
    return activeStep === 0;
  }, [activeStep]);

  const nextBtnDisable = useMemo(() => {
    return activeStep === 2;
  }, [activeStep]);

  return (
    <UserProfileProvider value={{ userDetails, setUserDetails }}>
      <div>
        <Stepper steps={steps} activeStep={activeStep} />
        <Container>
          {getSectionComponent()}
          <button disabled={prevBtnDisable} onClick={() => changeView(-1)}>
            Previous
          </button>
          <button disabled={nextBtnDisable} onClick={() => changeView(1)}>
            Next
          </button>
        </Container>
      </div>
    </UserProfileProvider>
  );
};

export default RegisterUser;
