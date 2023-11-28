import { useEffect, useState } from "react";
import AppartmentCard from "./AppartmentCard";
import { FadeLoader } from "react-spinners";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import './Item.css'


const Apartment = () => {
    const [appartments, setAppartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage ]=  useState(0)
    const {count} = useLoaderData();
    const itemParpage = 6;
    const numberOfPage = Math.ceil(count / itemParpage);
    const pages = [];
    for(let i = 0; i < numberOfPage; i++){
        pages.push(i)
    }
    // const pages = [...Array(numberOfPage).keys()]
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:5000/rooms?page=${currentPage}`)
        .then(res =>{
             setAppartments(res.data)
             setLoading(false)
            })
    },[currentPage])
    if(loading){
        return <>
            <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
                <FadeLoader color="#000000" />
            </div>
        </>
    }



    return (
        
        <div className="container mx-auto px-5">


            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 my-16">
                {
                    appartments.map(items => <AppartmentCard key={items._id} items={items}></AppartmentCard>)
                }
            </div>
            <div className="pagination">
                {
                    pages.map(page => <button className={ currentPage === page ? 'selected  btn border-2 font-bold border-black mr-3':' btn mr-3 bg-white text-black border-black border-2 font-bold'} onClick={()=>setCurrentPage(page)} key={page}>{page}</button>)
                }
            </div>
            
            
        </div>
    );
};

export default Apartment;