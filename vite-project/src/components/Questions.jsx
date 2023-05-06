import { useContext } from "react";
import { userProfileContext } from "../context/userProfilecontext";

export default function Questions() {
  const { userDetails, setUserDetails } = useContext(userProfileContext);

  const selectedOption = (e) => {
    const { name, value } = e.target;

    setUserDetails((prevState) => {
      return {
        ...prevState,
        questions: prevState.questions.map((item) => {
          const current = { ...item };
console.log(item, item.name)
          if (item.name === name) {
            current.select = value;
          }
          return current;
        }),
      };
    });
  };

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
                    <input
                      type="radio"
                      value={value}
                      name={item.name}
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
      </div>
    </div>
  );
}
