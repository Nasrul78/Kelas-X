import { useState } from "react";
import { Link } from "react-router";
import api from "../api/axios";
import { Mail, ArrowRight, ArrowLeft, KeyRound } from "lucide-react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");

    api
      .post("/forgot-password", { email })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Something went wrong.");
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
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <KeyRound size={28} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-slate-500 mt-2 text-sm font-medium">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            {message ? (
              <div className="text-center space-y-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-4 rounded-xl text-sm font-medium">
                  {message}
                </div>
                <Link to="/login">
                  <Button variant="secondary" className="w-full" icon={ArrowLeft}>
                    Back to login
                  </Button>
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <Input
                  label="Email Address"
                  type="email"
                  required
                  placeholder="name@example.com"
                  icon={Mail}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  Send Reset Link
                </Button>

                <Link to="/login" className="flex items-center justify-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors mt-4">
                  <ArrowLeft size={16} />
                  Back to login
                </Link>
              </form>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
