import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">My-Page</div>
                <div className="flex space-x-4">
                    <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
                    <Link to="/signup" className="text-white hover:text-gray-200">Signup</Link>
                    <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
