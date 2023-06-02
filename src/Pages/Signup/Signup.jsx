import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import loginImg from "../../assets/others/authentication2.png";

function Signup() {
  const { createUser, singInWithGoogle, updateUserProfle } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = ({ email, password, name, photo }) => {
    createUser(email, password)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign in Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUserProfle(name, photo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign in Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex flex-row-reverse max-w-7xl mx-auto justify-center space-x-24 h-screen items-center'>
      <div>
        <img src={loginImg} alt='person' />
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='bg-white p-20 px-28 '
      >
        <h2 className='text-3xl text-center font-semibold text-gray-800 mb-10'>
          Create an account
        </h2>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
            Name
          </label>
          <input
            type='name'
            name='name'
            id='name'
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", {
              required: "Name is required",
            })}
          />
          <br />
          {errors.name && (
            <span className='text-red-500'>{errors.name.message}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='photo' className='block text-gray-700 font-bold mb-2'>
            PhotoURL
          </label>
          <input
            type='text'
            name='photo'
            id='photo'
            className={`w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.photo ? "border-red-500" : ""
            }`}
            {...register("photo", {
              required: "PhotoURL is required",
            })}
          />
          <br />
          {errors.photo && (
            <span className='text-red-500'>{errors.photo.message}</span>
          )}
        </div>
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

        <br />
        <button
          type='submit'
          className='bg-[#ffb152]  text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Signup
        </button>
        <div className='text-center my-4 text-sm font-medium'>
          or Sign in with
        </div>
        <div className='text-center space-x-4 text-[#ffb152]'>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaFacebook />
          </button>
          <button
            type='button'
            onClick={handleGoogleSignIn}
            className='p-3 rounded-full bg-slate-100'
          >
            <FaGoogle />
          </button>
          <button className='p-3 rounded-full bg-slate-100'>
            <FaLinkedin />
          </button>
        </div>
        <div className='text-center text-md mt-3 text-sm text-slate-600'>
          already signup?{" "}
          <Link to='/login'>
            <span className='text-[#ffb152] font-medium'>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
