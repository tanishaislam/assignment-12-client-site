import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const MemberAnous = () => {
    const [allAnous, setAllAnous] = useState([]);
    const axiosSecure = useAxiosSecure();
    axiosSecure.get('/anous')
        .then(res => {
            setAllAnous(res.data)
        })
    return (
        <div>
            <div>
                <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Announcements Page</h1>
                <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
            </div>
            {
                    allAnous.map(anous => <div key={anous._id} className="lg:w-8/12  w-11/12 m-auto border-2 py-20 mb-20 px-10">
                    <h1 className="text-center lg:text-2xl md:text-2xl text-xl font-semibold mb-16">{anous.title}</h1>
                    <p className="text-lg">{anous.description}</p>
                    <h2 className="font-semibold text-lg mt-16 ">Announcement by Admin</h2>
                    <p>Admin Phone No: 01942---------</p>
                    <p>Admin Home address:</p>
                    <p>Khulna, Dhaka</p>
            </div>
       ) }

       
        </div>
    );
};

export default MemberAnous;