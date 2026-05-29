import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-gray-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-500">
              Nexus
            </Link>
            <p className="mt-4 text-sm text-gray-500 max-w-sm">
              Empowering the future with secure, scalable, and dynamic web applications. Build faster, perform better.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors text-sm">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nexus. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
