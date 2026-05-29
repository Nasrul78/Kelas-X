import { useNavigate } from "react-router";

const features = [
  {
    icon: "🔐",
    title: "Secure by Design",
    desc: "Experience ultimate peace of mind with our state-of-the-art encryption and security protocols.",
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Built for speed. Our platform delivers instantaneous responses and smooth interactions.",
  },
  {
    icon: "🛡️",
    title: "Reliable & Stable",
    desc: "Unmatched uptime and stability ensured by our globally distributed cloud architecture.",
  },
];

const stats = [
  { value: "100k+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Expert Support" },
];

const testimonials = [
  {
    quote:
      "This platform has completely transformed how we handle our internal workflows. The speed and security are simply unmatched.",
    name: "Alex Thompson",
    role: "CTO, TechFlow",
  },
  {
    quote:
      "The most intuitive interface I've ever used. Our team was up and running in minutes, not days.",
    name: "Sarah Chen",
    role: "Product Design, Visionary",
  },
  {
    quote:
      "Customer support is top-notch. They actually listen to feedback and implement features we need.",
    name: "Marcus Ortiz",
    role: "Founder, Growthly",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Perfect for individuals and side projects.",
    features: ["Core features", "Community support", "1GB Storage"],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    desc: "For teams that need scale and advanced tools.",
    features: [
      "Everything in Starter",
      "Priority Support",
      "Unlimited Projects",
      "Advanced Analytics",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    desc: "Comprehensive solutions for large organizations.",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "SLA Guarantees",
      "On-premise options",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="bg-mesh min-h-screen text-slate-50 selection:bg-primary/30 overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary glass px-5 py-2 rounded-full">
            The Future of Workflow
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.1]">
            Elevate your
            <br />
            <span className="text-gradient">productivity.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            The all-in-one platform designed to streamline your business, 
            enhance collaboration, and secure your most valuable data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started for Free
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Live Demo →
            </button>
          </div>
          <div className="flex items-center gap-8 mt-12 grayscale opacity-50 contrast-125">
             <div className="font-bold text-2xl tracking-tighter">TECHRUM</div>
             <div className="font-bold text-2xl tracking-tighter italic">Vortex</div>
             <div className="font-bold text-2xl tracking-tighter">QUARK</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-4xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 glass rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-10 gap-2 hover:bg-white/5 transition-colors"
            >
              <span className="text-4xl font-black text-white tracking-tight">
                {s.value}
              </span>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Built for modern teams
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Powerful tools that help you focus on what matters most.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="glass p-10 rounded-3xl flex flex-col gap-6 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight italic">
            Trusted everywhere.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden"
            >
              <div className="text-5xl text-primary/10 absolute -top-2 -left-2 font-serif">"</div>
              <p className="text-slate-300 italic relative z-10 text-lg leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-violet-600 shrink-0" />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Investment
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Plans for everyone
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[2.5rem] p-10 flex flex-col gap-8 transition-all hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 border-2 border-white/20"
                  : "glass border border-white/10"
              }`}
            >
              <div>
                <p className={`text-sm font-bold uppercase tracking-widest ${plan.highlight ? "text-white/80" : "text-primary text-gradient"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-slate-500"}`}>/{plan.period}</span>
                </div>
              </div>
              
              <ul className="flex flex-col gap-4">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${plan.highlight ? "bg-white/20" : "bg-primary/20 text-primary"}`}>
                      ✓
                    </div>
                    <span className={plan.highlight ? "text-white/90" : "text-slate-300"}>{f}</span>
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => navigate("/register")}
                className={`mt-auto py-4 rounded-2xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-slate-50 shadow-xl"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 max-w-5xl mx-auto px-8 py-32 text-center pointer-events-none">
        <div className="glass rounded-[3rem] p-20 flex flex-col items-center gap-8 pointer-events-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/10 to-transparent -z-10" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Ready to <span className="text-gradient">transform</span>.
          </h2>
          <p className="text-slate-400 text-xl max-w-lg leading-relaxed">
            Join 100,000+ creators and businesses building the future on our platform.
          </p>
          <button
            onClick={() => navigate("/register")}
            className="px-10 py-5 rounded-2xl bg-primary text-white font-black text-xl hover:bg-primary-hover shadow-2xl shadow-primary/40 transition-all hover:scale-105"
          >
            Start Your Journey Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="font-black text-2xl tracking-tighter">CORE.</div>
           <div className="text-sm text-slate-500">
             © 2026 Core Systems Inc. All rights reserved. Built with passion.
           </div>
           <div className="flex gap-6 text-sm font-semibold text-slate-400">
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
