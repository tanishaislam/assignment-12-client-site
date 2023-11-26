import { Link, useNavigate } from "react-router-dom";
import RegisterImg from '../../assets/istockphoto-665094738-612x612.jpg'
import { imagUpload } from "../../api/imgbb";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
   const navigate = useNavigate()
    const handleRegister = async(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        try{
            const imageData = await imagUpload(image)
            const result = await createUser(email, password)
            await updateUserProfile(name, imageData?.data?.display_url)
            const userInfo = {
                name: name,
                email: email,
                role: 'user'
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data?.insertedId){
                    console.log('user added to the database')
                    toast.success('signUp successfull')
                    navigate('/')
                }
            })
            console.log(result)
            
        }catch(err){
            console.log(err)
            toast.error(err?.message)
        }
        
        
    }
    return (
        <div>
               <div>
            <div className="lg:mt-20 mt-7 container mx-auto flex justify-center lg:flex-row flex-col items-center">
            <div className="w-1/2">
                <img src={RegisterImg} alt="" />
            </div>
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 px-7">
                <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please Register now!</h1>
                <p className="text-center text-gray-400"> laborum cum iure temporibus rerum. <br /> Totam, repellat voluptatem.</p>
                <form onSubmit={handleRegister} noValidate='' action='' className="card-body">
                    <div className="flex gap-5 flex-col">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        className="input input-bordered" 
                        required 
                    />
                    </div>
                    <div>
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                            required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>
                    </div>
                    <div className="flex gap-5 flex-col">
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
                     />
                    </div>
                    
                    </div>
                    <div>
                    {/* {
                        passErr? <p className="text-start text-red-500">{passErr}</p>: ''
                    } */}
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary bg-gradient-to-r from-red-600 to-zinc-50 text-white border-none">Register</button>
                    </div>
                    <p className="text-center text-black py-6">Already have an account ? <Link to="/login" className="text-gray-600 font-bold">Please Login</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SignUp;
