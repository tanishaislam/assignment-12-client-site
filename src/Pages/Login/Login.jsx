import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginImg from '../../assets/istockphoto-665094738-612x612.jpg'
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation()
  const from = location?.state?.from?.pathname || '/'
    const handleLogin= async (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('signIn successfull')
            navigate(from, {replace: true})
        })
        .catch(err => console.log(err))
    }
    const handleGoogleSignIn=async ()=>{
        try{
  
            const result = await signInWithGoogle();
            console.log(result)
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: 'user'
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                toast.success('signIn successfull')
             navigate(from, {replace: true})
            })
            
        
            }catch(err){
              console.log(err)
              toast.error(err?.message)
            }
    }
    return (
        <div>
            <div className="container mx-auto flex justify-center lg:flex-row flex-col items-center pt-10">
            <div className="w-1/2">
                <img src={LoginImg} alt="" />
            </div>
            <div className=" p-5">
                <div className="card  w-full shadow-2xl bg-base-100 px-7">
                <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please Login now!</h1>
                <p className="text-center text-gray-400"> Lorem ipsum dolor sit amet consectetur. <br /> repellat voluptatem.</p>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="email" 
                        className="input input-bordered" 
                        required 
                        // onBlur={(e)=>setEmail(e.target.value)}
                     />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        className="input input-bordered" 
                        required
                        // onBlur={(e)=>setPassword(e.target.value)}
                     />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-red-600 to-violet-50 text-white border-none">Login</button>
                    <button onClick={handleGoogleSignIn} className=" mt-5 btn btn-primary bg-gray-100 text-black border-none">
                        <FcGoogle />Continue With Google
                    </button>
                    </div>
                    <p className="text-center text-black  py-6">Do not have an account ? <Link to="/signup" className="text-gray-600 font-bold">Please Register</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;