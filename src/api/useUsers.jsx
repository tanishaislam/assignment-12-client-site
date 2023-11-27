import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[],} = useQuery({
        queryKey: ['cart'],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts`)
            return res.data;
        }
    })
    return [users]
};

export default useUsers;