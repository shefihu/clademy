import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import OnboardingLayout from "../../layout/auth/OnboardingLayout";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const Login = () => {
  // inputs value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //password
  const [showPass, setShowPass] = useState(false);
  // ui states
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState(null);

  const requestBody = {
    query: `
        query{
          login(email:"${email}", password:"${password}"){
            token
            email
            name
            userId
            profile
          }
        }
      `,
  };

  const loginHandler = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const { data } = await axios.post(
        "  https://clademy-server.onrender.com/graphql",
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const user = data.data.login;
      const store = {
        token: user.token,
        email: user.email,
        name: user.name,
        userId: user.userId,
      };
      Cookies.set("user", JSON.stringify(store), { expires: 30 });
      localStorage.setItem("clademyprofile", user.profile);
      navigate("/");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setMessage("Invalid login parameters");
      setLoading(false);
    }
  };

  const navigate = useNavigate();
  return (
    <OnboardingLayout>
      <div className="w-full h-full relative  flex items-center justify-end">
        <div className=" z-50  w-[500px] py-10 lg:flex hidden items-center  space-y-4 bg-[#F5F5F5]  rounded-2xl px-6 ">
          <div className="w-full ">
            <div>
              <h1 className="text-[40px] font-bold">Welcome back!! 🤩</h1>
              <p className="text-[16px] text-[#ADB0B6]">
                Enter your email and password
              </p>
            </div>
            <div className="text-center">
              {message == "Auth successsful" && (
                <p className="mt-3  text-green-600">{message}</p>
              )}

              {message && message != "Auth successsful" && (
                <p className="mt-3  text-red-600">{message}</p>
              )}
            </div>
            <div className=" w-full h-full mt-3 space-y-4">
              <form
                onSubmit={(e) => loginHandler(e)}
                // onSubmit={onSubmit}
                className="w-full flex flex-col  space-y-6"
              >
                <div className="flex flex-col w-full space-y-4">
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Business Email
                      </span>
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder="Email"
                      className="w-full h-[44px] px-2 border bg-white border-[#C8CACE]"
                    />
                  </div>
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Password
                      </span>
                    </div>
                    <div className="relative w-full ">
                      <input
                        type={!showPass ? "password" : "text"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        placeholder="Password"
                        className="w-full h-[44px] pl-2 pr-10 border bg-white border-[#C8CACE]"
                      />
                      <div className="absolute w-10 h-full flex justify-center items-center  top-0 right-0 z-20">
                        {!showPass ? (
                          <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                          >
                            <RxEyeClosed />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                          >
                            <RxEyeOpen />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className=" space-y-1">
                    <div className="flex space-x-2">
                      <a href="/reset" className="text-[black]">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  //   onClick={function () {
                  //     setLoading(true);
                  //     setTimeout(() => {
                  //       setLoading(false);
                  //       navigate("/");
                  //     }, 3000);
                  //   }}
                  type="submit"
                  className="flex w-[446px] h-[60px] text-white font-medium justify-center items-center  rounded-full bg-[black] "
                >
                  {loading ? (
                    <div className="py-2">
                      <ClipLoader color="white" />
                    </div>
                  ) : (
                    <h1 className="text-lg font-bold">Sign In</h1>
                  )}
                </Button>
              </form>
              <p>
                Don't have an account?{" "}
                <a href="/register" className="text-black">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex lg:hidden">
          <div className="w-full px-4 pt-4">
            <div>
              <h1 className="text-[30px] font-bold">Welcome back!! 🤩</h1>
              <p className="text-[16px] text-[#ADB0B6]">
                Enter your email and password
              </p>
            </div>
            <div className=" w-full h-full mt-3 space-y-4">
              <div className="w-full flex flex-col  space-y-6">
                <div className="flex flex-col w-full space-y-4">
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Business Email
                      </span>
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-[44px] px-2 border bg-white border-[#C8CACE]"
                    />
                  </div>
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Password
                      </span>
                    </div>
                    <div className="relative w-full ">
                      <input
                        type={!showPass ? "password" : "text"}
                        placeholder="Password"
                        className="w-full h-[44px] pl-2 pr-10 border bg-white border-[#C8CACE]"
                      />
                      <div className="absolute w-10 h-full flex justify-center items-center  top-0 right-0 z-20">
                        {!showPass ? (
                          <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                          >
                            <RxEyeClosed />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                          >
                            {/* <img src={eyeSlash} alt="eyeIcon" /> */}
                            <RxEyeOpen />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className=" space-y-1">
                    <div className="flex space-x-2">
                      <a href="/reset" className="text-[black]">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  //   onClick={function () {
                  //     setLoading(true);
                  //     setTimeout(() => {
                  //       setLoading(false);
                  //       navigate("/");
                  //     }, 3000);
                  //   }}
                  className="flex w-full h-[60px] text-white font-medium justify-center items-center  rounded-full bg-[black] "
                >
                  {loading ? (
                    <div className="py-2">
                      <ClipLoader color="white" />
                    </div>
                  ) : (
                    <h1 className="text-lg font-bold">Sign In</h1>
                  )}
                </Button>
              </div>
              <p>
                Don't have an account?{" "}
                <a href="/register" className="text-black">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Login;
