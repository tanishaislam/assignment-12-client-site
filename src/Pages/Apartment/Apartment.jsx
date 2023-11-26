import { useEffect, useState } from "react";
import AppartmentCard from "./AppartmentCard";
import { FadeLoader } from "react-spinners";
import axios from "axios";


const Apartment = () => {
    const [appartments, setAppartments] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:5000/rooms')
        .then(res =>{
             setAppartments(res.data)
             setLoading(false)
            })
    },[])
    if(loading){
        return <>
            <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <FadeLoader color="#000000" />
            </div>
        </>
    }
    return (
        <div className="container mx-auto px-5">
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-10 my-16">
                {
                    appartments.map(items => <AppartmentCard key={items._id} items={items}></AppartmentCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;