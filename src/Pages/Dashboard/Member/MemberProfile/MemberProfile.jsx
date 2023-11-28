import useAuth from "../../../../Hooks/useAuth";


const MemberProfile = () => {
    const {user} = useAuth();
    return (
        <div>
        <div>
            <h1 className="text-center font-semibold lg:text-3xl md:text-2xl text-xl">Member Profile</h1>
            <div className="border-b-2 w-20 m-auto py-2 border-zinc-500 mb-16"></div>
        </div>
        <div>
            <img src={user?.photoURL} className="h-20 w-20 rounded-full m-auto mb-5" alt="" />
            <h3 className="text-center lg:text-xl md:text-xl text-lg font-semibold"><span className="text-gray-600">User Name: </span> {user?.displayName}</h3>
            <h3 className="text-center lg:text-xl md:text-xl text-lg font-semibold mt-3"><span className="text-gray-600">User Email: </span> {user?.email}</h3>
        </div>
    </div>
    );
};

export default MemberProfile;