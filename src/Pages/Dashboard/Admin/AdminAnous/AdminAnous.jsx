import toast from "react-hot-toast";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const AdminAnous = () => {
    const axiosSecure = useAxiosSecure();
    const handleAnnouncement = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const make = {
            title,
            description
        }
        axiosSecure.post('/anous', make)
        .then(res => {
            console.log(res.data)
            if(res.data?.insertedId){
                toast.success('Annoucement is successfully added')
            }
        })
    }
    return (
        <div className="w-7/12 m-auto">
            <div>
                <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Make Announcements</h1>
                <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
            </div>

            <form onSubmit={handleAnnouncement} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Title</span>
                    </label>
                    <input 
                        type="text"
                        name="title" 
                        placeholder="Title" 
                        className="input input-bordered" 
                        required 
                     />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Descriptions</span>
                    </label>
                    <textarea id="myTextarea" name="description" placeholder="Descriptions" rows="4" cols="50" required className="border-2 p-2"></textarea>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary bg-gradient-to-r from-gray-700 to-violet-50 text-white border-none">Submit</button>
                    </div>
                </form>
        </div>
    );
};

export default AdminAnous;