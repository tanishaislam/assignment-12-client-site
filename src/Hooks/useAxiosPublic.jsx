import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://asignment-12-server-one.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;