import { useContext, useEffect, useRef, useState } from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import loginImg from "../../assets/others/authentication2.png";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value) == true) {
      alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        alert("User Login Successfully!");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex max-w-7xl mx-auto justify-center space-x-24 h-screen items-center'>
      <div>
        <img src={loginImg} alt='person' />
      </div>
      <form onSubmit={handleSignIn} className='bg-white p-20 px-28 '>
        <h2 className='text-3xl text-center font-semibold text-gray-800 mb-10'>
          Login
        </h2>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <div className='mb-2'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-bold mb-2'
          >
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <div className='mb-1 mt-4'>
          <LoadCanvasTemplate />
        </div>
        <div className='mb-2 mt-2'>
          <input
            type='text'
            name='captcha'
            placeholder='Write captcha here...'
            ref={captchaRef}
            id='captcha'
            className='w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
        <button
          type='button'
          onClick={handleValidateCaptcha}
          className='bg-yellow-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Verify
        </button>{" "}
        <br />
        <span className='text-sm mb-4 mt-2'>
          Forget password?{" "}
          <span className='text-blue-500 cursor-pointer'>reset</span>
        </span>
        <br />
        <button
          type='submit'
          disabled={disabled}
          className='bg-[#ffb152] text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Login
        </button>
        <div className='text-center my-4 text-sm font-medium'>
          or Sign in with
        </div>
        <div className='text-center space-x-4 text-[#ffb152]'>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaFacebook />
          </button>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaGoogle />
          </button>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaLinkedin />
          </button>
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          New here?{" "}
          <Link to='/signup'>
            <span className='text-[#ffb152] font-medium'>Sign up</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
