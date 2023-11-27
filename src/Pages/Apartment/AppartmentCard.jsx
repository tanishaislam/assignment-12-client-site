import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUsers from "../../api/useUsers";


const AppartmentCard = ({items}) => {
    const {image, floor_no, block_name, apartment_no, rent} = items;
    const {user} = useAuth();
    const [users] = useUsers();
    const navigate = useNavigate();
     const location = useLocation()
     const axiosSecure = useAxiosSecure();
    const handleAgriment = (items) =>{
        if(user && user.email){
            //send user to the database
            console.log(user.email, items)
            const cartItems = {
                userName: user?.displayName,
                userEmail: user?.email,
                floor_no,
                block_name,
                apartment_no,
                rent,
                status: 'pending',
            }
            axiosSecure.post('/carts', cartItems)
            .then(res => {
                console.log(res.data)
                if(res.data?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "successfully added",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Plese logged in to add it",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  //send to the login page
                    navigate('/login', {state: {from: location}})
                }
              });
        }
        
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl shadow-gray-300 p-3 rounded-none border border-black">
                <figure>
                <img src={image} className="h-56 " alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">{block_name}</h2>
                  <div className="flex flex-col gap-2">
                  <p><span className="font-semibold">Appartment No:</span> {apartment_no}</p>
                  <p><span className="font-semibold">Floor No:</span> {floor_no}</p> 
                  
                  </div>
                  <p><span className="font-semibold">Rent:</span> {rent}</p>
                  <div className="card-actions">
                    <button onClick={()=>handleAgriment(items)} className="btn btn-primary text-white bg-black">Agreement</button>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default AppartmentCard;