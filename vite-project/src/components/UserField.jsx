import { useContext } from "react";
import { userProfileContext } from "../context/userProfilecontext";

const FormField = () => {
  const { userDetails, setUserDetails } = useContext(userProfileContext);
  console.log(userDetails, setUserDetails);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => {
      return {
        ...prevState,
        basic: {
          ...prevState.basic,
          [name]: value,
        },
      };
    });
  };

  return (
    <>
      <div>
        <p>Name: </p>
        <input
          name="name"
          value={userDetails.basic.name}
          placeholder="Enter your name"
          onChange={onInputChange}
        />
      </div>
      <div>
        <p>City: </p>
        <input
          name="city"
          value={userDetails.basic.city}
          placeholder="enter your city"
          onChange={onInputChange}
        />
      </div>
      <div>
        <p>Mobile: </p>
        <input
          name="mobile"
          type="number"
          value={userDetails.basic.mobile}
          placeholder="enter your mobile"
          onChange={onInputChange}
        />
      </div>
    </>
  );
};

export default FormField;
