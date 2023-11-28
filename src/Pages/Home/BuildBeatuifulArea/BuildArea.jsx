import { BsCheck2Square } from 'react-icons/bs';
import cuponImg from '../../../assets/depositphotos_68857205-stock-photo-couple-holding-a-minature-house.jpg'

const BuildArea = () => {
    return (
        <div>
            <div>
            <div className="text-center py-10 pt-16">
                <h1 className=" text-gray-700 font-semibold font-cursive text-5xl"><span className="">Exclusive Coupon Section</span></h1>
                <p className='font-semibold mt-3'>Coupon Details is here...</p>
                <div className='bg-gray-700 w-28 h-1 m-auto mt-5'></div>
            </div>
            <div>
            <div className=''>
                <div className="hero h-auto container mx-auto py-10 mb-20">
                    <div className=" grid lg:grid-cols-2 grid-cols-1 justify-center gap-20 items-center">
                        <div>
                            <img  src={cuponImg} className="rounded-lg" />
                        </div>
                        <div className='text-start py-10'> 
                            <h1 className="lg:text-4xl text-3xl  font-bold pb-2 text-gray-700 font-cursive">See Special Cupon details</h1>
                            <p className="py-6 w-10/12 pb-10 text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda  excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in.</p>
                            <h2 className='text-xl font-bold'>Special Cupon Code</h2>
                            <div>
                                <button className='bg-purple-800 text-white py-2 px-5 rounded-md font-semibold mt-5'>23477832</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default BuildArea;