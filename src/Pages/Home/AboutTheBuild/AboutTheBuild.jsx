import { IoBarChartSharp } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { BsBuildingsFill } from "react-icons/bs";
import { SiInfluxdb } from "react-icons/si";

const AboutTheBuild = () => {
    return (
        <div>
            <div className="text-center py-20 ">
                <h1 className="font-semibold font-cursive text-5xl">About the building</h1>
                <p className="w-1/2 m-auto pt-5 font-body">neque tenetur ipsum totam, quas laboriosam mollitia reiciendis. Provident magni placeat neque! Quo eligendi voluptates assumenda quibusdam quidem reiciendis sed!</p>
                <p className="border-b h-1 w-24 m-auto bg-black border-black mt-4"></p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-32">
                <div className="text-center border p-6">
                    <div className="pb-4"> 
                    <IoBarChartSharp className="text-3xl m-auto" />
                    </div>
                    <h1 className="text-3xl font-semibold font-cursive">Architectural Marvel</h1>
                    <p className="font-body pt-3 pb-5">Our building stands as a testament to the fusion of innovation and sophistication</p>
                    <button className="font-semibold bg-black text-white py-2 px-4 rounded-md">More Details</button>
                </div>
                <div className="text-center border p-6">
                    <div className="pb-4"> 
                    <GoLightBulb className="text-3xl m-auto" />
                    </div>
                    <h1 className="text-3xl font-semibold font-cursive">Technological Prowess</h1>
                    <p className="font-body pt-3 pb-5">Embrace the future with cutting-edge technology integrated seamlessly into every corner</p>
                    <button className="font-semibold bg-black text-white py-2 px-4 rounded-md">More Details</button>
                </div>
                <div className="text-center border p-6">
                    <div className="pb-4"> 
                    <BsBuildingsFill className="text-3xl m-auto" />
                    </div>
                    <h1 className="text-3xl font-semibold font-cursive">Sustainable Oasis</h1>
                    <p className="font-body pt-3 pb-5">Our commitment to the environment extends beyond aesthetics. extends beyond aesthetics.</p>
                    <button className="font-semibold bg-black text-white py-2 px-4 rounded-md">More Details</button>
                </div>
                <div className="text-center border p-6">
                    <div className="pb-4"> 
                    <SiInfluxdb className="text-3xl m-auto" />
                    </div>
                    <h1 className="text-3xl font-semibold font-cursive">A Glimpse into Luxury</h1>
                    <p className="font-body pt-3 pb-5">Step into a world of opulence where every detail is meticulously crafted your experience. </p>
                    <button className="font-semibold bg-black text-white py-2 px-4 rounded-md">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default AboutTheBuild;