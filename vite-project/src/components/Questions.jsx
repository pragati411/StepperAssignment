import { useContext } from "react";
import FormField from "./UserField";
import { userProfileContext } from "./Form";

export default function Questions() {
  const { userDetails, setUserDetails } = useContext(userProfileContext);

  return (
    <div>
      

      <div>
        {userDetails.questions.map((item) => {
          return (
            <div key={item.id}>
              <legend> {item.title}</legend>
              <br />
              {item.options.map((value) => {
                return (
                  <div key={value}>
                    <input type="radio" name={item.value} />
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
