import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSocialLogin = () => {
    googleLogin()
      .then((result) => {
        const savedUser = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };

        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
            // }
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="text-center my-4">
      <div className="divider">OR</div>
      <button
        onClick={handleSocialLogin}
        className="btn btn-circle btn-outline"
      >
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
