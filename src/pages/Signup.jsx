import axios from "axios";
import {Link} from "react-router-dom";

const handleSignup= (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formEmail = formData.get('email'); 
    const formPassword = formData.get('password');
    const formFirstName = formData.get('firstName');
    const formLastName = formData.get('lastName');
    axios.post('https://devplat.heraldcollege.edu.np/herald-auth/auth/signup', {
    email: formEmail,
    password: formPassword,
    first_name: formFirstName,
    last_name: formLastName
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
    
};
function Signup() {
  return (
    <div className="flex justify-between w-dvw bg-[#F0FDF4] h-dvh">
        <div className="flex-1 w-1/2 h-dvh"> 
            
        </div>

        <div className="bg-white flex rounded-l-[54px] w-1/2 justify-center items-center">
            <form className="flex flex-col gap-10 w-2/5" onSubmit={handleSignup}>
                <div>
                <p className="text-3xl font-bold text-green-900">Create Account</p>
                <p>Enter your details below</p>
                </div>

                <div className="flex gap-2">
                <div className='flex flex-col w-full'>
                    <label className="font-bold ">First Name</label>
                    <input name="firstName" type="text" placeholder="John" className="border border-gray-300 rounded-lg py-3 px-2 w-full" />
                </div>
                <div className='flex flex-col w-full'>
                    <label className="font-bold ">Last Name</label>
                    <input name="lastName" type="text" placeholder="Doe" className="border border-gray-300 rounded-lg py-3 px-2 w-full" />
                </div>

                </div>
      
                <div className='flex flex-col w-full'>
                    <label className="font-bold ">Email Address</label>
                    <input name="email" type="email" placeholder="student@heraldcollege.edu.np" className="border border-gray-300 rounded-lg py-3 px-2 w-full" />
                </div>

                <div className='flex flex-col'>
                    <label className="font-bold ">Password</label>
                    <input name="password" type="password" placeholder="Create a password" className="border-2 border-gray-300 rounded-lg py-3 px-2 w-full"/>
                </div>
            
                <button type="submit" className="bg-green-700 py-3 px-2 text-white rounded-xl cursor-pointer">
                    Sign up
                </button>
                <p>Already have an account? <Link to="/login" className="text-green-700 font-bold">Login</Link> </p>
            </form>

        </div>
    </div>
  )
}

export default Signup
