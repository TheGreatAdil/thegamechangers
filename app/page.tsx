import { Mail, Instagram } from "lucide-react";
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Brands, Images, Sessions } from "@/lib/data";
import CaptureButton from "@/components/CaptureButton";

const brands1 = Brands.slice(0, Brands.length / 3);
const brands2 = Brands.slice(Brands.length / 3, (Brands.length / 3) * 2);
const brands3 = Brands.slice((Brands.length / 3) * 2, Brands.length);

export default function Component() {
  return (
    <div className="min-h-screen">
      <div className="fixed z-0">
        <BackgroundGradientAnimation />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="section-spacing" id="home">
          <div className="glass-card section-padding max-w-6xl mx-auto">
            <h1 className="hero-title mb-8">The Game Changers</h1>
            <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              Bringing together purpose-driven individuals who support each
              other's entrepreneurial journeys while building initiatives that
              create real-world impact.
              <br />
              <br />
              <Link
                href={"/#events"}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text"
              >
                🔈 Check out our{" "}
                <span className="border-b border-red-500 whitespace-nowrap">
                  upcoming event!
                </span>
              </Link>
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="glass-card section-padding">
              <div className="text-center">
                <h2 className="section-title">About Game Changers</h2>
                <h3 className="section-subtitle">Our Mission</h3>
                <p className="text-xl text-gray-600 italic mb-12 max-w-4xl mx-auto leading-relaxed">
                  &quot;To bring together purpose-driven individuals who support
                  each other's entrepreneurial journeys while building
                  initiatives that create real-world impact.&quot;
                </p>
                <h3 className="section-subtitle">
                  A Community That Builds, Collaborates & Creates Impact
                </h3>
                <p className="body-text-center">
                  <Link href="/#home" className="text-lg font-semibold">
                    Game Changers
                  </Link>{" "}
                  began as a simple WhatsApp group — a space where passionate
                  individuals from different industries could connect, share
                  ideas, and inspire one another. What started as casual
                  conversations soon evolved into something more powerful: a
                  community of{" "}
                  <b>entrepreneurs, change-makers, and innovators</b> determined
                  to grow together and give back to society. We believe that
                  when the right minds meet, <b>real magic happens</b>. Whether
                  you're building a startup, supporting a cause, or just
                  figuring out your journey — Game Changers is your space to
                  belong, grow, and create meaningful connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Started Section */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="glass-card section-padding">
              <div className="text-center">
                <h2 className="section-title">How It Started</h2>
                <p className="body-text-center">
                  <Link href="/#home" className="brand-link">
                    Game Changers
                  </Link>{" "}
                  was born during the Huddle Global Program in 2022, when a
                  group of passionate individuals met — including student
                  volunteers from MEA Engineering College and other aspiring
                  entrepreneurs.
                  <br />
                  <br />
                  The initial connection sparked something powerful. The
                  students added some of their alumni who were already building
                  startups, and together, we began attending events, exchanging
                  ideas, and capturing our journey through shared photos and
                  stories — all inside a newly created WhatsApp group.
                  <br />
                  <br />
                  Over time, more people joined from the <b>
                    Huddle 2023
                  </b> and <b>2024</b> editions, each bringing their own
                  experience, vision, and energy. What started as a group chat
                  quickly evolved into a growing, action-oriented community of{" "}
                  <b>founders, builders, and change-makers</b>.<br />
                  <br />
                  Today,{" "}
                  <Link href="/#home" className="brand-link">
                    Game Changers
                  </Link>{" "}
                  is a collective — a space where everyone is a contributor, and
                  every member is a founder in shaping the journey forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="glass-card section-padding">
              <h2 className="section-title text-center mb-16">
                What to Expect
              </h2>

              <div className="feature-grid">
                <div className="feature-card">
                  <div className="text-5xl mb-6 text-center">🤝</div>
                  <h3 className="card-title">Powerful Collaborations</h3>
                  <p className="card-text">
                    Connect and collaborate across diverse domains and
                    industries
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-5xl mb-6 text-center">💡</div>
                  <h3 className="card-title">Shared Learning</h3>
                  <p className="card-text">
                    Engage in meetups, tasks, and peer challenges for continuous
                    growth
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-5xl mb-6 text-center">🌱</div>
                  <h3 className="card-title">Social Impact</h3>
                  <p className="card-text">
                    Drive meaningful initiatives that create positive change in
                    communities
                  </p>
                </div>

                <div className="feature-card">
                  <div className="text-5xl mb-6 text-center">🎯</div>
                  <h3 className="card-title">Growth Space</h3>
                  <p className="card-text">
                    Develop personally, professionally, and together as a
                    community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="section-container">
            <div className="glass-card section-padding pb-4">
              <h2 className="section-title text-center mb-0">
                Brands Behind The Game Changers
              </h2>

              <div className="max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,white,white,white,white,white,transparent)]">
                <InfiniteSlider
                  className="h-fit py-12 pb-4 md:pb-6"
                  duration={30}
                >
                  {brands1.map((brand, i) => (
                    <div
                      className="feature-card w-24 md:w-36 h-30 md:h-40 p-3 md:p-4 flex flex-col justify-between"
                      key={i}
                    >
                      <div className="relative size-16 md:size-24 mx-auto">
                        <Image
                          fill
                          src={brand.src}
                          alt={brand.name + " logo"}
                          className="object-cover rounded-xl"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="card-title text-xs md:text-sm mb-0">
                        {brand.name}
                      </h3>
                    </div>
                  ))}
                </InfiniteSlider>
                <InfiniteSlider
                  className="h-fit py-12 pt-0 pb-4 md:pb-6"
                  duration={30}
                  reverse
                >
                  {brands2.map((brand, i) => (
                    <div
                      className="feature-card w-24 md:w-36 h-30 md:h-40 p-3 md:p-4 flex flex-col justify-between"
                      key={i}
                    >
                      <div className="relative size-16 md:size-24 mx-auto">
                        <Image
                          fill
                          src={brand.src}
                          alt={brand.name + " logo"}
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <h3 className="card-title text-sm mb-0">{brand.name}</h3>
                    </div>
                  ))}
                </InfiniteSlider>
                <InfiniteSlider className="h-fit pb-4 md:pb-6" duration={30}>
                  {brands3.map((brand, i) => (
                    <div
                      className="feature-card w-24 md:w-36 h-30 md:h-40 p-3 md:p-4 flex flex-col justify-between"
                      key={i}
                    >
                      <div className="relative size-16 md:size-24 mx-auto">
                        <Image
                          fill
                          src={brand.src}
                          alt={brand.name + " logo"}
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <h3 className="card-title text-xs md:text-sm mb-0">
                        {brand.name}
                      </h3>
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="section-spacing">
          <div className="section-container">
            <div className="glass-card section-padding">
              <h2 className="section-title text-center mb-12">
                Events & Meetups
              </h2>
              <div className="text-center mb-16">
                <p className="body-text max-w-4xl mx-auto">
                  We regularly host bootcamps, workshops, meetups, and
                  brainstorming sessions — designed to foster startup
                  collaboration, cross-industry learning, and community
                  problem-solving.
                </p>
              </div>
              <div className="mb-16" id="events">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Upcoming Event
                </h3>
                <div className="max-w-4xl mx-auto">
                  <div className="event-card shimmer-effect group overflow-hidden">
                    <div className="relative w-full h-96 md:h-[30rem] mb-6">
                      <Image
                        src="/Wayanad Meet Poster.jpg"
                        alt="Wayanad Meetup"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="px-6 pb-6">
                      <div className="text-center lg:text-left">
                        <h4 className="text-3xl font-bold text-gray-800 mb-4">
                          Game Changers Meetup –{" "}
                          <span className="whitespace-nowrap">
                            June 15, 2025
                          </span>
                        </h4>
                        <div className="text-lg font-semibold text-gray-700 mb-2">
                          <p>
                            📍 Venue: Wayanad Gate Resort, Mananthavady, Wayanad
                          </p>
                          <p>🕙 Time: 10:00 AM – 5:00 PM</p>
                        </div>
                        <p className="body-text mb-6">
                          The Game Changers Meetup is a unique, invite-only
                          gathering of some of the most passionate and driven
                          young startup founders, innovators, and changemakers
                          from across Kerala. What started as a WhatsApp group
                          during Huddle Global 2022 has now grown into a
                          thriving circle of founders committed to
                          collaboration, growth, and meaningful impact.
                        </p>
                        <div className="mb-6 text-left">
                          <h5 className="text-xl text-center font-bold text-gray-800 mb-4">
                            What to Expect:
                          </h5>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <span className="text-xl">🤝</span>
                              <p className="body-text">
                                Networking with 60+ startup founders
                              </p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <span className="text-xl">🎯</span>
                              <p className="body-text">
                                4 Power-Packed Masterclasses by industry experts
                              </p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <span className="text-xl">💬</span>
                              <p className="body-text">
                                Open discussions, idea exchanges & collaboration
                                opportunities
                              </p>
                            </div>
                            <div className="flex items-start space-x-3">
                              <span className="text-xl">🌍</span>
                              <p className="body-text">
                                A focus on how we, as a collective, can
                                contribute to society through entrepreneurship
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6 text-left">
                          <h5 className="text-xl text-center font-bold text-gray-800 mb-4">
                            Sessions:
                          </h5>
                          <div className="max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,white,white,white,white,transparent)]">
                            <InfiniteSlider className="h-fit" duration={15}>
                              {Sessions.map((session, i) => (
                                <div
                                  key={i}
                                  className="relative size-48 md:size-64 mx-auto"
                                >
                                  <Image
                                    fill
                                    src={session.src}
                                    alt={session.alt}
                                    className="object-cover rounded-xl"
                                  />
                                </div>
                              ))}
                            </InfiniteSlider>
                          </div>
                        </div>

                        <p className="body-text mb-8 italic">
                          This meetup isn't just an event — it's a movement of
                          doers. If you're passionate about building something
                          meaningful, you'll find your tribe here.
                        </p>
                        <CaptureButton
                          href="https://makemypass.com/event/game-changers-meetup?ticket_id=77e3dd55-0860-4dc8-9596-c9c4b3b4c4bd"
                          eventName="Get Tickets"
                          className="btn-gradient btn-shimmer inline-block text-lg group"
                        >
                          Get Tickets
                        </CaptureButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Our Journey So Far
                </h3>
                <div className="max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,white,white,white,white,transparent)]">
                  <InfiniteSlider className="h-fit" duration={50} reverse>
                    {Images.map((image, i) => (
                      <div
                        key={i}
                        className="relative size-40 md:size-48 mx-auto"
                      >
                        <Image
                          fill
                          src={image.src}
                          alt={image.alt}
                          className="object-cover rounded-xl"
                        />
                      </div>
                    ))}
                  </InfiniteSlider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="section-spacing pb-12">
          <div className="section-container">
            <div className="glass-card section-padding py-6 pb-4">
              <div className="grid gap-8 md:grid-cols-2 mb-2">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    The Game Changers
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bringing together purpose-driven individuals who support
                    each other's entrepreneurial journeys while building
                    initiatives that create real-world impact.
                  </p>
                </div>

                <div className="text-center md:text-right">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                    Connect
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="mailto:info@thegamechangers.world"
                      className="flex items-center justify-center md:justify-end text-gray-600 hover:text-orange-600 transition"
                    >
                      info@thegamechangers.world
                      <Mail className="size-4 ml-2" />
                    </a>
                    <CaptureButton
                      href="https://www.instagram.com/thegamechangers.world/"
                      eventName="Visit TheGameChangers Instagram"
                      className="flex items-center justify-center md:justify-end text-gray-600 hover:text-orange-600 transition"
                    >
                      @thegamechangers.world
                      <Instagram className="size-4 ml-2" />
                    </CaptureButton>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 text-center">
                <p className="text-gray-500 text-sm mt-6 md:mt-4">
                  Designed at{" "}
                  <CaptureButton
                    href="https://tascbar.com"
                    eventName="Visit Tascbar"
                    className="underline"
                  >
                    Tascbar
                  </CaptureButton>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
