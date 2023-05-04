import { useContext } from "react";
import { userProfileContext } from "./Form";

function Result() {
  const { userDetails, setUserDetails } = useContext(userProfileContext);

  return (
    <div>
      <h1>Result</h1>
    </div>
  );
}
export default Result;
