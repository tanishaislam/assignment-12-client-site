import useCart from "../../../../Hooks/useCart";

const AgrimentRequest = () => {
    const [cart] = useCart()
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
                            <td><button className="bg-green-500 text-white px-3 py-1 font-semibold rounded-md">Accept</button></td>
                            <td><button className="bg-red-500 text-white text-md px-3 py-1 font-semibold rounded-md">Reject</button></td>
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