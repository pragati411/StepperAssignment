import { useContext } from "react";
import { userProfileContext } from "../context/userProfilecontext";

const FormField = () => {
  const { userDetails, setUserDetails } = useContext(userProfileContext);
  console.log(userDetails, setUserDetails);

  return (
    <>
      <div>
        <p>Name: </p>
        <input
          name="name"
          value={userDetails.basic.name}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <p>City: </p>
        <input
          name="city"
          value={userDetails.basic.city}
          placeholder="enter your city"
        />
      </div>
      <div>
        <p>Mobile: </p>
        <input
          name="mobile"
          type="number"
          value={userDetails.basic.mobile}
          placeholder="enter your mobile"
        />
      </div>
    </>
  );
};

export default FormField;
