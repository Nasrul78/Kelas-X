import { useNavigate, Link } from "react-router";
import { useState } from "react";
import api from "../api/axios";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    api
      .post("/login", data)
      .then(({ data }) => {
        localStorage.setItem("ACCESS_TOKEN", data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(
          err.response?.data?.message ||
            "Invalid credentials. Please try again.",
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 z-100 bg-bg-base flex items-center justify-center p-4 overflow-hidden bg-mesh">
      <div className="w-full max-w-md my-auto">
        <Card className="p-10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-white tracking-tight">
                Welcome back
              </h2>
              <p className="text-slate-500 mt-3 text-lg font-medium">
                Continue your journey
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <Input
                label="Email Address"
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="name@example.com"
                icon={Mail}
              />

              <div className="space-y-1">
                <div className="relative">
                  <Input
                    label="Password"
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    icon={Lock}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 text-slate-500 hover:text-white transition-colors z-20"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="flex justify-end pr-1">
                  <Link
                    to="/forgot-password"
                    className="text-xs font-bold text-primary hover:text-primary-hover transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div className="flex items-center ml-1">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-slate-900 border-white/10 rounded-md text-primary focus:ring-primary/40"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm font-medium text-slate-500"
                >
                  Keep me signed in
                </label>
              </div>

              {errorMsg && (
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-5 py-4 rounded-xl text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full"
                size="xl"
                icon={ArrowRight}
              >
                Sign In
              </Button>
            </form>

            <p className="mt-10 text-center text-sm font-medium text-slate-500">
              New to the platform?{" "}
              <Link to="/register" className="font-bold text-primary hover:text-primary-hover transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
