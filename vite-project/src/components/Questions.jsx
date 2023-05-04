import { useContext, useState } from "react";

import { userProfileContext } from "./Form";
import FormField from "./UserField";

export default function Questions() {
  const [option, setOption] = useState([]);

  const { userDetails, setUserDetails } = useContext(userProfileContext);
  console.log(setUserDetails);

  console.log(option);
  const selectedOption = (e) => {
    setOption((lastState) => [...lastState, e.target.value]);
    userDetails.questions.select = option;
  };

  return (
    <div>
      <FormField />
      <div>
        {userDetails.questions.map((item) => {
          return (
            <div key={item.id}>
              <legend> {item.title}</legend>
              <br />
              {item.options.map((value) => {
                return (
                  <div key={value}>
                    <input
                      type="radio"
                      value={value}
                      name={`question${item.name}`}
                      onClick={selectedOption}
                    />
                    <label>{value}</label>
                  </div>
                );
              })}

              <br />
            </div>
          );
        })}
        {/* <legend> 1: Current employment status</legend>
        <br />

        <input type="radio" id="unemployed" name="employment" />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input type="radio" id="part-time" name="employment" />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input type="radio" id="full-time" name="employment" />
        <label htmlFor="full-time">Full-time</label>
        <br />
        <br />

        <legend> 2: What is your hobby</legend>
        <br />

        <input type="radio" id="unemployed" name="hobby" />

        <label htmlFor="unemployed">Cricket</label>
        <br />

        <input type="radio" id="part-time" name="hobby" />
        <label htmlFor="part-time">Movies</label>
        <br />

        <input type="radio" id="full-time" name="hobby" />
        <label htmlFor="full-time">Photography</label>
        <br />
        <br />
        <legend> 3: What is profession</legend>
        <br />

        <input type="radio" id="unemployed" name="profession" />

        <label htmlFor="unemployed">Frontend developer</label>
        <br />

        <input type="radio" id="part-time" name="profession" />
        <label htmlFor="part-time">Backened Developer</label>
        <br />

        <input type="radio" id="full-time" name="profession" />
        <label htmlFor="full-time">Full stack</label>
        <br /> */}
      </div>
    </div>
  );
}
