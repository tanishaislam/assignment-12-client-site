import useAxiosSecure from "./useAxiosSecure";


export const UpdateCart = async (user)=>{
    const axiosSecure = useAxiosSecure();
    const {data} = await axiosSecure.patch(`/carts/member/${user}`)
    return data;
}