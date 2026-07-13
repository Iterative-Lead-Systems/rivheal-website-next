"use client";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--accent)/0.08)_0%,_transparent_50%)]" />

      <div className="container mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Coming Soon
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
          Smarter Healthcare
          <span className="block text-gradient-primary">In Your Hands</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up">
          Smart appointments. Real-time queue tracking. Portable medical records. All in one app designed for Nigerian patients. Be among the first to experience it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <a
            href="/home-care-waitlist"
            className="px-8 py-4 rounded-xl text-base font-semibold bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elevated"
          >
            Join the Waitlist
          </a>
          <a
            href="#modules"
            className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
          >
            See Our Solutions
          </a>
        </div>

        {/* Social proof micro-copy */}
        <p className="mt-6 text-sm text-muted-foreground animate-fade-in">
          Early access launching soon · No credit card required
        </p>
      </div>

      {/* Floating decorative blobs */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl animate-float"
        style={{ animationDelay: "-2s" }}
      />
    </section>
  );
}
