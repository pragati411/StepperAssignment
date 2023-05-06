import { useContext } from "react";
import axios from "axios";
import { userProfileContext } from "../context/userProfilecontext";
import { toast } from "react-toastify";

function Result() {
  const { userDetails } = useContext(userProfileContext);

  const saveData = () => {
    axios
      .post("http://localhost:3000/form-data", {
        name: userDetails.basic.name,
        city: userDetails.basic.city,
        phone: userDetails.basic.mobile,
        questions: userDetails.questions,
      })
      .then(function (response) {
        toast.success("Data saved successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(response);
      })
      .catch(function (error) {
        toast("There is an issue , Please try later");
        console.log(error);
      });
  };

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
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}
export default Result;
