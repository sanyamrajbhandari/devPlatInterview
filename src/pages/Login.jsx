import axios from "axios";
import {Link} from "react-router-dom";

const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formEmail = formData.get('email'); 
    const formPassword = formData.get('password');
    axios.post('https://devplat.heraldcollege.edu.np/herald-auth/auth/login', {
    email: formEmail,
    password: formPassword
  })
  .then(response => {
    console.log(response)})
  .catch(error => console.error(error));
  
};
function Login() {
  return (
    <div className="flex justify-between w-dvw bg-[#F0FDF4] h-dvh">
        <div className="flex-1 w-1/2 h-dvh"> 
            
        </div>

        <div className="bg-white flex rounded-l-[54px] w-1/2 justify-center items-center">
            <form className="flex flex-col gap-10 w-2/5" onSubmit={handleLogin}>
                <div>
                <p className="text-3xl font-bold text-green-900">Welcome Back</p>
                <p>Please enter your details to sign in.</p>
                </div>
                <div className='flex flex-col w-full'>
                    <label className="font-bold ">Email Address</label>
                    <input name="email" type="email" placeholder="student@heraldcollege.edu.np" className="border border-gray-300 rounded-lg py-3 px-2 w-full" />
                </div>

                <div className='flex flex-col'>
                    <label className="font-bold ">Password</label>
                    <input name="password" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" className="border-2 border-gray-300 rounded-lg py-3 px-2 w-full"/>
                </div>
            
                <button type="submit" className="bg-green-700 py-3 px-2 text-white rounded-xl cursor-pointer">
                    Sign in
                </button>
                <p>Don't have an account? <Link to="/signup" className="text-green-700 font-bold">Signup</Link> </p>
            </form>

        </div>
    </div>
  )
}

export default Login