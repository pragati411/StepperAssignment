import { useContext } from "react";
import { userProfileContext } from "./Form";

function Result() {
  const { userDetails, setUserDetails } = useContext(userProfileContext);
  console.log(setUserDetails);

  return (
    <div>
      <h3>Name : {userDetails.basic.name}</h3>
      <h3> City : {userDetails.basic.city}</h3>
      <h3> Phone :{userDetails.basic.mobile}</h3>
      <div>
        {userDetails.questions.select.map((item, index) => {
          console.log("line no 15", item.title);
          return (
            <div key={index}>
              <li key={index}>{item}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Result;
