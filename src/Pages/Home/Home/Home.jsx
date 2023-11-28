import AboutTheBuild from "../AboutTheBuild/AboutTheBuild";
import Banner from "../Banner/Banner";
import BuildArea from "../BuildBeatuifulArea/BuildArea";
import GoogleMap from "../GoogleMap/GoogleMap";


const Home = () => {
    return (
        <div>
            <div className="container mx-auto mt-2">
            <Banner></Banner>
            <AboutTheBuild></AboutTheBuild>  
            <BuildArea></BuildArea>      
        </div>
        <GoogleMap></GoogleMap>
        </div>
        
    );
};

export default Home;