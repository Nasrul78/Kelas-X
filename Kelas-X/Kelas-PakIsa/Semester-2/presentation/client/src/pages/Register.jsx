import { useNavigate, Link } from "react-router";
import { useState } from "react";
import api from "../api/axios";
import { User, Mail, Lock, Eye, EyeOff, Rocket, ArrowRight } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const pass = formData.get("password")?.trim();
    const confirmPass = formData.get("password_confirmation")?.trim();

    if (pass != confirmPass) {
      setErrorMsg("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    api
      .post("/register", data)
      .then(({ data }) => {
        localStorage.setItem("ACCESS_TOKEN", data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(
          err.response?.data?.message || "Registration failed. Try again.",
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
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <Rocket size={32} />
              </div>
              <h2 className="text-4xl font-black text-white tracking-tight">
                Create Account
              </h2>
              <p className="text-slate-500 mt-3 text-lg font-medium">
                Join the revolution
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <Input
                label="Full Name"
                name="name"
                id="name"
                type="text"
                required
                placeholder="John Doe"
                icon={User}
              />

              <Input
                label="Email Address"
                name="email"
                id="email"
                type="email"
                required
                placeholder="john@example.com"
                icon={Mail}
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Input
                    label="Password"
                    name="password"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    icon={Lock}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="relative">
                  <Input
                    label="Confirm"
                    name="password_confirmation"
                    id="password_confirmation"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    icon={Lock}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 bottom-3 text-slate-500 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {errorMsg && (
                <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-5 py-4 rounded-xl text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                  {errorMsg}
                </div>
              )}

              <Button
                type="submit"
                isLoading={isLoading}
                className="w-full mt-4"
                size="xl"
                icon={ArrowRight}
              >
                Create Account
              </Button>
            </form>

            <p className="mt-10 text-center text-sm font-medium text-slate-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Register;
