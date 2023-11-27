import Swal from "sweetalert2";
import useCart from "../../../../Hooks/useCart";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { UpdateCart } from "../../../../Hooks/useUpdateCart";

const AgrimentRequest = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const handleReject =(items)=>{
        // axiosSecure.patch(`/carts/user/${items._id}`)
        // .then(res => {
        //     console.log(res.data)
        //     if(res.data.modifiedCount > 0){
        //         toast.success(`${items.name} is an member now`)
        //     }
        // })
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${items._id}`)
                .then(res =>{
                    if(res.data?.deletedCount > 0){
                        refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    }
                })
            
            }
          });
    }


    const handleMakeMember = (user)=>{
        // try{
        // UpdateCart(user._id)
        // .then(data => {
        //     console.log(data)
        //     refetch()
        //     if(data.modifiedCount > 0){
        //             toast.success(` is an member now`)
        //     }
        // })
        // }catch(err){
        //     toast.error(err)
        // }
        axiosSecure.patch(`/carts/member/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                toast.success(`${user.name} is an member now`)
            }
        }
        )
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
                        <th>Name</th> 
                        <th>Job</th> 
                        <th>company</th> 
                        <th>location</th> 
                        <th>Last Login</th> 
                        <th>Favorite Color</th>
                    </tr>
                    </thead> 
                    <tbody>
                    {
                            cart.map((items, index) => <tr key={items._id}>
                            <th>{index + 1}</th>
                            <td>{items.userName}</td>
                            <td>{items.userEmail}</td>
                            <td>{items.floor_no}</td>
                            <td>{items.block_name}</td>
                            <td>{items.rent}</td>
                            <td>{items.apartment_no}</td>
                            <td>
                                {
                                    items.role === 'member'? 
                                    'member' :  items.role === 'user'?
                                    'user':
                                    <button onClick={()=>handleMakeMember(items)}  className="bg-green-500 text-white px-3 py-1 font-semibold rounded-md">Accept</button>
                                }
                            </td>
                            <td><button onClick={()=>handleReject(items)} className="bg-red-500 text-white text-md px-3 py-1 font-semibold rounded-md">Reject</button></td>
                        </tr>
                        )
                    }
                    </tbody> 
                </table>
</div>
        </div>
    );
};

export default AgrimentRequest;