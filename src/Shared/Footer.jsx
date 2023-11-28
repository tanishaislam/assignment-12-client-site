import NavLogo from "./Navber/NavLogo";


const Footer = () => {
    return (
        <div className="bg-zinc-800 text-white py-10">
            <footer className="footer p-10  text-base-content container mx-auto">
            <aside className="mb-4 text-white">
                <NavLogo></NavLogo>
                <p className="pb-4 pt-5">ACME Industries Ltd.<br/>Providing reliable tech since 2023</p>
            </aside> 
            <nav className="text-white">
                <header className="footer-title">Services</header> 
                <a className="link link-hover">Appartment services</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav className="text-white">
                <header className="footer-title">Company</header> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">address</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav className="text-white">
                <header className="footer-title">Legal</header> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;