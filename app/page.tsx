import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 relative">
      <div className="fixed z-0">
        <BackgroundGradientAnimation />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-6 py-3 md:py-6 pt-6 md:pt-12">
          <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl px-6 py-6 md:px-12 md:py-12 max-w-6xl mx-auto relative">
            <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg text-center">
              THE GAME CHANGERS
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-3 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl px-6 py-6 md:px-12 md:py-12">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-800 mb-6">
                  About Game Changers
                </h2>
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                  Our Mission
                </h3>
                <p className="text-xl text-gray-600 italic mb-12 max-w-4xl mx-auto leading-relaxed">
                  &quot;To bring together purpose-driven individuals who support
                  each other's entrepreneurial journeys while building
                  initiatives that create real-world impact.&quot;
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  <b>Game Changers</b> began as a simple WhatsApp group — a
                  space where passionate individuals from different industries
                  could connect, share ideas, and inspire one another. What
                  started as casual conversations soon evolved into something
                  more powerful: a community of{" "}
                  <b>entrepreneurs, change-makers, and innovators</b> determined
                  to grow together and give back to society. We believe that
                  when the right minds meet, <b>real magic happens</b>. Whether
                  you're building a startup, supporting a cause, or just
                  figuring out your journey — Game Changers is your space to
                  belong, grow, and create meaningful connections.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 text-center hover:bg-orange-100/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Collaboration
                  </h4>
                  <p className="text-sm text-gray-600">Across industries</p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 text-center hover:bg-orange-100/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Shared Learning
                  </h4>
                  <p className="text-sm text-gray-600">& peer growth</p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 text-center hover:bg-orange-100/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Social Impact
                  </h4>
                  <p className="text-sm text-gray-600">Community-driven</p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 text-center hover:bg-orange-100/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Personal Growth
                  </h4>
                  <p className="text-sm text-gray-600">
                    Professional development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="px-6 py-3 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl px-6 py-6 md:px-12 md:py-12">
              <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
                🔥 What to Expect
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 hover:bg-orange-100/50 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                  <div className="text-5xl mb-6 text-center">🤝</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Powerful Collaborations
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    Connect and collaborate across diverse domains and
                    industries
                  </p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 hover:bg-orange-100/50 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                  <div className="text-5xl mb-6 text-center">💡</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Shared Learning
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    Engage in meetups, tasks, and peer challenges for continuous
                    growth
                  </p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 hover:bg-orange-100/50 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                  <div className="text-5xl mb-6 text-center">🌱</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Social Impact
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    Drive meaningful initiatives that create positive change in
                    communities
                  </p>
                </div>

                <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 hover:bg-orange-100/50 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-xl">
                  <div className="text-5xl mb-6 text-center">🎯</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                    Growth Space
                  </h3>
                  <p className="text-base text-gray-600 text-center leading-relaxed">
                    Develop personally, professionally, and together as a
                    community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="px-6 py-3 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl px-6 py-6 md:px-12 md:py-12">
              <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
                📸 Events & Meetups
              </h2>

              <div className="text-center mb-16">
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  We regularly host bootcamps, workshops, meetups, and
                  brainstorming sessions — designed to foster startup
                  collaboration, cross-industry learning, and community
                  problem-solving.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  🎯 Upcoming Event
                </h3>
                <div className="max-w-4xl mx-auto">
                  <div className="backdrop-blur-lg bg-white/40 border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-8 items-center">
                      <div className="relative w-full lg:w-64 h-64 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src="/Wayanad Meet Poster.jpg"
                          alt="Wayanad Meetup"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <h4 className="text-3xl font-bold text-gray-800 mb-4">
                          Wayanad Meetup – June 15
                        </h4>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          Our upcoming event in Wayanad will be the first
                          full-day meetup of Game Changers — a space to build
                          deeper connections and plan impactful initiatives
                          together.
                        </p>
                        <Link
                          href={
                            "https://makemypass.com/event/game-changers-meetup"
                          }
                          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg hover:scale-105 relative overflow-hidden group"
                        >
                          <span className="relative z-10">Get Tickets</span>
                          <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center">
                  Previous Meetups
                </h3>
                <div className="flex justify-center gap-6 flex-wrap">
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg">
                    <Image
                      src="/placeholder.svg?height=192&width=256"
                      alt="Previous meetup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg">
                    <Image
                      src="/placeholder.svg?height=192&width=256"
                      alt="Previous meetup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md hover:shadow-lg">
                    <Image
                      src="/placeholder.svg?height=192&width=256"
                      alt="Previous meetup"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-3 md:py-6 pb-6 md:pb-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl shadow-2xl px-6 py-6 md:px-12 md:py-12">
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8 leading-relaxed">
                🚀 Launching June 2025 — Be part of the first wave of Game
                Changers.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Join Early</span>
                <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
