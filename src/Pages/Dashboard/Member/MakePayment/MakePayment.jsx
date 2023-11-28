import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import useCart from "../../../../Hooks/useCart";

const MakePayment = () => {
    const {user} = useAuth();
    const [carts] = useCart()
    const fil = carts.filter(filt => filt.role === 'member')
    const userfind = fil.filter(fin => fin.userEmail === user?.email)

    return (
        <div>
            <div>
                <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Payment Page</h1>
                <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
            </div>

            <div className="w-7/12 m-auto">
            {
                userfind.map(items => <>
                <form className="card-body" key={items?._id}>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">UserName</span>
                        </label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder={items?.userName} 
                            className="input input-bordered" 
                            readOnly
                        />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">userEmail</span>
                        </label>
                        <input 
                            type="text"
                            name="email" 
                            placeholder={items?.userEmail} 
                            className="input input-bordered"
                            readOnly 
                        />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">floor no</span>
                        </label>
                        <input 
                            type="text"
                            name="email" 
                            placeholder={items?.floor_no} 
                            className="input input-bordered" 
                            readOnly
                        />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">block name</span>
                        </label>
                        <input 
                            type="text"
                            name="email" 
                            placeholder={items?.block_name} 
                            className="input input-bordered" 
                            readOnly
                        />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">rent</span>
                        </label>
                        <input 
                            type="text"
                            name="email" 
                            placeholder={items?.rent} 
                            className="input input-bordered" 
                            readOnly
                        />

                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">apartment no</span>
                        </label>
                        <input 
                            type="text"
                            name="email" 
                            placeholder={items?.apartment_no} 
                            className="input input-bordered" 
                            readOnly
                        />
                        </div>
                    </div>
                    <div className="m-auto mt-4">
                    <Link to='/dashboard/paymentNow'>
                    <button className="btn bg-zinc-700 text-white px-8">Pay Now</button>
                    </Link>
                    </div>
                </form>
                
                
                </>)
            }
            </div>
        </div>
    );
};

export default MakePayment;