import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/others/authentication2.png";

function Signup() {
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const singUpInfo = { name, email, password };
    console.log(singUpInfo);
  };

  return (
    <div className='flex flex-row-reverse max-w-7xl mx-auto justify-center space-x-24 h-screen items-center'>
      <div>
        <img src={loginImg} alt='person' />
      </div>
      <form onSubmit={handleSignUp} className='bg-white p-20 px-28 '>
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
            className='w-72 border rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>
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

        <br />
        <button
          type='submit'
          className='bg-[#ff3811] hover:bg-blue-700 text-white w-full font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Signup
        </button>
        <div className='text-center my-4 text-sm font-medium'>
          or Sign in with
        </div>
        <div className='text-center space-x-4 text-[#ff3811]'>
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
          already signup?{" "}
          <Link to='/login'>
            <span className='text-[#ff3811] font-medium'>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
