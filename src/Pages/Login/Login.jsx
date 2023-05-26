import { useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
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
  const { loginUser, singInWithGoogle } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const captchaRef = useRef();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value) == true) {
      alert("Captcha Matched");
      setDisable(false);
    } else {
      alert("Captcha Does Not Match");
      setDisable(true);
    }
  };

  const handleSignIn = ({ email, password }) => {
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
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className='bg-white p-20 px-28 '
      >
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
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          <br />
          {errors.email && (
            <span className='text-red-500'>{errors.email.message}</span>
          )}
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
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Password is required",
            })}
          />
          <br />
          {errors.password && (
            <span className='text-red-500'>{errors.password.message}</span>
          )}
        </div>
        <div className='mb-1 mt-4'>
          <LoadCanvasTemplate />
        </div>
        <div className='mb-2 mt-2'>
          <input
            type='text'
            name='captcha'
            id='captcha'
            ref={captchaRef}
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.captcha ? "border-red-500" : ""
            }`}
            {...register("captcha", {
              required: "captch is required",
            })}
          />
          <br />
          {errors.captcha && (
            <span className='text-red-500'>{errors.captcha.message}</span>
          )}
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
          <button
            onClick={singInWithGoogle}
            className='p-3 rounded-full bg-slate-100'
          >
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
