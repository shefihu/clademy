import { Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import OnboardingLayout from "../../layout/auth/OnboardingLayout";

const Register = () => {
  // inputs value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //password
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  // ui states
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [cpassword, setCPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (password.trim().length < 6) {
        setMessage("Password must be more than 6 characters");
        setLoading(false);
        return;
      }
      if (password.trim() != cpassword.trim()) {
        setMessage("Passwords do not match");
        setLoading(false);
        return;
      }
      const requestBody = {
        query: `
            mutation{
                createUser(userInput: {email: "${email}", password:"${password}", name:"${name}"}){
                    _id
                    email
                }
            }
          `,
      };

      const { data } = await axios.post(
        "  https://clademy-server.onrender.com/graphql",
        JSON.stringify(requestBody),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data.data);
      if (data.data.createUser.email == undefined || null) {
        setMessage("Email is already taken");
        setLoading(false);
        return;
      } else {
        console.log("eetet");
        navigate("/login");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <OnboardingLayout>
      <div className="w-full  relative py-6 flex items-center justify-end">
        <div className=" z-50  w-[500px] py-10 lg:flex hidden items-center   space-y-4 bg-[#F5F5F5]  rounded-2xl px-6 ">
          <div className="w-full ">
            <div>
              {" "}
              <h1 className="text-[40px] font-bold">
                Hey!! 😁,
                <br /> Welcome to clademy
              </h1>
              <p className="text-[16px] text-[#ADB0B6]">
                I see you're ready to learn with this virtual classroom,
                Goodluck!
              </p>
            </div>
            <div className="text-center">
              {message == "Auth successsful" && (
                <p className="mt-3 text-green-600  ">{message}</p>
              )}

              {message && message != "Auth successsful" && (
                <p className="mt-3 text-red-600  ">{message}</p>
              )}
            </div>
            <div className=" w-full  mt-3 space-y-4">
              <form
                // onSubmit={(e) => registerHandler(e)}
                // onSubmit={onSubmit}
                className="w-full flex flex-col  space-y-6"
              >
                <div className="flex flex-col w-full space-y-4">
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Full Name
                      </span>
                    </div>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full h-[44px] px-2 border bg-white border-[#C8CACE]"
                    />
                  </div>
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">Email</span>
                    </div>
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
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
                        required
                        value={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
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
                            <RxEyeOpen />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Confirm Password
                      </span>
                    </div>
                    <div className="relative w-full ">
                      <input
                        required
                        value={cpassword}
                        name="cpassword"
                        onChange={(e) => setCPassword(e.target.value)}
                        type={!showConfirmPass ? "password" : "text"}
                        placeholder="Confirm Password"
                        className="w-full h-[44px] pl-2 pr-10 border bg-white border-[#C8CACE]"
                      />
                      <div className="absolute w-10 h-full flex justify-center items-center  top-0 right-0 z-20">
                        {!showConfirmPass ? (
                          <button
                            type="button"
                            onClick={() => setShowConfirmPass(!showConfirmPass)}
                          >
                            <RxEyeClosed />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowConfirmPass(!showConfirmPass)}
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
                  onClick={function () {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      navigate("/");
                    }, 3000);
                  }}
                  //   type="submit"
                  className="flex w-[446px] h-[60px] text-white font-medium justify-center items-center  rounded-full bg-[black] "
                >
                  {loading ? (
                    <div className="py-2">
                      <ClipLoader color="white" />
                    </div>
                  ) : (
                    <h1 className="text-lg font-bold">Create Account</h1>
                  )}
                </Button>
              </form>
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-black">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full  flex lg:hidden">
          <div className="w-full px-4 pt-4">
            <div>
              {" "}
              <h1 className="text-[40px] font-bold">
                Hey!! 😁,
                <br /> Welcome to clademy
              </h1>
              <p className="text-[16px] text-[#ADB0B6]">
                I see you're ready to learn with this virtual classroom,
                Goodluck!
              </p>
            </div>
            <div className=" w-full  mt-3 space-y-4">
              <div
                // onSubmit={onSubmit}
                className="w-full flex flex-col  space-y-6"
              >
                <div className="flex flex-col w-full space-y-4">
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Full Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full h-[44px] px-2 border bg-white border-[#C8CACE]"
                    />
                  </div>
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
                            <RxEyeOpen />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="h-[66px] space-y-2 w-full">
                    <div className="h-[22px] w-">
                      <span className="text-[12px] text-[#878C95]">
                        Confirm Password
                      </span>
                    </div>
                    <div className="relative w-full ">
                      <input
                        type={!showConfirmPass ? "password" : "text"}
                        placeholder="Confirm Password"
                        className="w-full h-[44px] pl-2 pr-10 border bg-white border-[#C8CACE]"
                      />
                      <div className="absolute w-10 h-full flex justify-center items-center  top-0 right-0 z-20">
                        {!showConfirmPass ? (
                          <button
                            type="button"
                            onClick={() => setShowConfirmPass(!showConfirmPass)}
                          >
                            <RxEyeClosed />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowConfirmPass(!showConfirmPass)}
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
                  onClick={function () {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      navigate("/");
                    }, 3000);
                  }}
                  className="flex w-full h-[60px] text-white font-medium justify-center items-center  rounded-full bg-[black] "
                >
                  {loading ? (
                    <div className="py-2">
                      <ClipLoader />
                    </div>
                  ) : (
                    <h1 className="text-lg font-bold">Create Account</h1>
                  )}
                </Button>
              </div>
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-black">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Register;
