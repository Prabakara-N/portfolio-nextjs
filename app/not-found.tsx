export default function Page() {
  return (
    <div className="dark min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10 animate-fade-up">
        {/* PAGE text - left side on desktop, top on mobile */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider">
          PAGE
        </div>

        {/* Circle with 404 and diagonal stripes */}
        <div className="relative flex items-center justify-center">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 border-white flex items-center justify-center relative overflow-hidden">
            <div className="relative flex items-center justify-center z-10">
              <span className="text-8xl sm:text-9xl font-bold">4</span>
              <div className="relative inline-flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                  N
                </span>
                <span className="text-8xl sm:text-9xl font-bold">0</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                  T
                </span>
              </div>
              <span className="text-8xl sm:text-9xl font-bold">4</span>
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-full bg-white/5 blur-3xl animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* FOUND text - right side on desktop, bottom on mobile */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider">
          FOUND
        </div>
      </div>
    </div>
  );
}
