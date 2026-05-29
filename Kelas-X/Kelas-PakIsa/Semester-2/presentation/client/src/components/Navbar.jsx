import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-5 max-w-6xl mx-auto">
      <span className="text-lg font-bold tracking-tight">Company Name</span>
      <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#testimonials" className="hover:text-white transition-colors">
          Testimonials
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          Pricing
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="text-sm px-4 py-2 rounded-lg border border-neutral-800 text-neutral-300 hover:bg-neutral-800 transition-colors"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="text-sm px-4 py-2 rounded-lg bg-lime-400 text-neutral-950 font-semibold hover:bg-lime-300 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Header;
