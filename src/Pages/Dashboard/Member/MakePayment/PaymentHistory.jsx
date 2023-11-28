import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure();
    const {data: payments=[], refetch} = useQuery({
        queryKey: ['payments'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })
    return (
        <div>
            <div>
                <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Your Payment History</h1>
                <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
            </div>

            <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>User Email</th>
                        <th>Price</th>
                        <th>Transection Id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>{payment?.email}</td>
                            <td>{payment?.price}</td>
                            <td>{payment?.transectionId}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
                </div>
            </div>
            
        </div>
    );
};

export default PaymentHistory;