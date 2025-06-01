export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Main glassmorphic container */}
      <div className="relative max-w-4xl w-full mx-auto">
        <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              The Game Changers
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
              A Startup Community That Builds, Grows, and Gives Back
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're building something extraordinary — a vibrant community of
              doers, dreamers, and disruptors. Game Changers is more than just a
              startup network; it's a movement of passionate founders,
              professionals, and innovators coming together to support each
              other and create meaningful impact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Whether you're scaling your first venture, exploring new
              collaborations, or just looking to learn and contribute — you're
              in the right place.
            </p>

            {/* What to Expect Section */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                🔥 What to Expect
              </h3>

              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 text-left">
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    🤝 Powerful collaborations across domains
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 text-left">
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    💡 Shared learning through meetups, tasks & peer challenges
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 text-left">
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    🌱 Social impact initiatives driven by our community
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 text-left">
                  <div className="text-lg font-semibold text-gray-800 mb-2">
                    🎯 A space to grow — personally, professionally, and
                    together
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                🚀 Launching June 2025 — Stay tuned. We're almost ready to
                change the game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
