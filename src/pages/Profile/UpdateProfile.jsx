import Lottie from "lottie-react";
import { useContext, useRef } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginLottie from "../../../public/registrationLottie.json";
import { AuthContext } from "../../provider/AuthProvider";

const UpdateProfile = () => {
  const loginAnimation = useRef();
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const userName = form.get("userName");
    const photoUrl = form.get("photoUrl");

    updateUserProfile(userName, photoUrl)
      .then((result) => {
        toast.success("Profile Updated Successfully!");
        e.target.reset();
        navigate("/profile");
      })
      .catch((error) => {
        toast.error("Profile Update Failed: " + error);
      });
  };

  return (
    <div className="py-5 px-10 flex flex-row justify-center border-0 border-red-400 gap-5">
      
      <Helmet>
        <title>Haven Estate | Update Profile</title>
      </Helmet>
      <div className="border-0 lg:flex-1 flex justify-center items-center text-center">
        <Lottie
          className="w-[450px]"
          lottieRef={loginAnimation}
          animationData={loginLottie}
        />
      </div>

      <div className="border-0 mt-8 lg:flex-1">
        <div className="w-full max-w-md px-8  py-10 space-y-3 rounded-xl shadow-xl border-t-2">
          <h1 className="text-2xl font-bold text-center">Update Profile</h1>

          <form onSubmit={handleUpdateProfile} className="mt-5 space-y-5">
            <div className="space-y-3 text-sm">
              <label htmlFor="userName" className="block ">
                User Name
              </label>
              <input
                required
                type="text"
                name="userName"
                id="userName"
                defaultValue={user.displayName}
                placeholder="User Name"
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <div className="space-y-3 text-sm">
              <label htmlFor="photoUrl" className="block">
                Photo Url
              </label>
              <input
                required
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Photo Url"
                defaultValue={user.photoURL}
                className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 font-bold">
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
