import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import useUsers from "../api/useUsers";

const useMember = () => {
    const {user, loading} = useAuth();
    const [users] = useUsers()
    const axiosSecure = useAxiosSecure();

    const {data: isMember, isPending: isMemberLoading} = useQuery({
        queryKey: [user.email, 'isMember'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/carts/member/${user.email}`)
            return res.data?.member;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;