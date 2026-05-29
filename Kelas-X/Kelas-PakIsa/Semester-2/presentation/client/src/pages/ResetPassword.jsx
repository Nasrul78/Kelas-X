import { useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router";
import api from "../api/axios";
import { Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: searchParams.get("email") || "",
    token: searchParams.get("token") || "",
    password: "",
    password_confirmation: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    api
      .post("/reset-password", formData)
      .then(() => {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Failed to reset password.");
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
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mx-auto mb-6">
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Reset Password
              </h2>
              <p className="text-slate-500 mt-2 text-sm font-medium">
                Enter your new password below.
              </p>
            </div>

            {success ? (
              <div className="text-center space-y-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-4 rounded-xl text-sm font-medium">
                  Password reset successfully! Redirecting to login...
                </div>
                <Link to="/login">
                  <Button className="w-full">Go to Login Now</Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="relative">
                  <Input
                    label="New Password"
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 text-slate-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <Input
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={formData.password_confirmation}
                  onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                />

                {error && (
                  <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 px-5 py-4 rounded-xl text-xs font-medium">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  isLoading={isLoading}
                  className="w-full"
                  size="lg"
                  icon={ArrowRight}
                >
                  Reset Password
                </Button>
              </form>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
