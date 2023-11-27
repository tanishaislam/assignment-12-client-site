import { RiDeleteBin2Line } from "react-icons/ri";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageMember = () => {
    const [carts, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const fil = carts.filter(filt => filt.role === 'member')
    console.log(fil)
    const handleReject = (items)=>{
        axiosSecure.patch(`/carts/user/${items._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                toast.success('successfully remove')
            }
        })
    }
    return (
        <div>
        <div>
            <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Agreement Requests</h1>
            <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-md">
                <thead>
                <tr>
                    <th></th> 
                    <th>User Name</th> 
                    <th>User Email</th> 
                    <th></th> 
                </tr>
                </thead> 
                <tbody>
                {
                        fil.map((items, index) => <tr key={items._id}>
                        <th>{index + 1}</th>
                        <td>{items.userName}</td>
                        <td>{items.userEmail}</td>
                        <td><button onClick={()=>handleReject(items)} className="bg-red-500 text-white text-md px-3 py-2 font-semibold rounded-md"><RiDeleteBin2Line /></button></td>
                    </tr>
                    )
                }
                </tbody> 
            </table>
        </div>
    </div>
    );
};

export default ManageMember;