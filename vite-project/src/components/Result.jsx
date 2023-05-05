import { useContext } from "react";
import { userProfileContext } from "../context/userProfilecontext";

function Result() {
  const { userDetails } = useContext(userProfileContext);

  return (
    <div>
      <h3>Name : {userDetails.basic.name}</h3>
      <h3> City : {userDetails.basic.city}</h3>
      <h3> Phone :{userDetails.basic.mobile}</h3>
      <div>
        {userDetails &&
          userDetails.questions.map((item) => {
            return (
              <div key={item.id}>
                <p>Q :{item.title}</p>
                <p>A : {item.select}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Result;
