import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thegamechangers.world"),
  keywords: [
    "entrepreneurship community",
    "startup collaboration",
    "game changers",
    "entrepreneur network",
    "business meetups",
    "innovation community",
    "startup ecosystem",
    "social impact initiatives",
    "entrepreneurial journey",
    "founder community",
    "startup events",
    "business networking",
    "change makers",
    "startup mentorship",
    "collaborative entrepreneurship",
  ],
  title: {
    default: "The Game Changers",
    template: "%s | The Game Changers",
  },
  description:
    "Bringing together purpose-driven individuals who support each other's entrepreneurial journeys while building initiatives that create real-world impact.",
  openGraph: {
    type: "website",
    title: "The Game Changers",
    description:
      "Bringing together purpose-driven individuals who support each other's entrepreneurial journeys while building initiatives that create real-world impact.Bringing together purpose-driven individuals who support each other's entrepreneurial journeys while building initiatives that create real-world impact.",
    url: "https://www.thegamechangers.world",
    siteName: "The Game Changers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Game Changers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Game Changers",
    description:
      "Bringing together purpose-driven individuals who support each other's entrepreneurial journeys while building initiatives that create real-world impact.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.thegamechangers.world",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.thegamechangers.world/#organization",
    name: "The Game Changers",
    alternateName: "Game Changers",
    url: "https://www.thegamechangers.world",
    logo: "https://www.thegamechangers.world/logo.png",
    description:
      "The Game Changers is a purpose-driven community of entrepreneurs, change-makers, and innovators who support each other's entrepreneurial journeys while building initiatives that create real-world impact.",
    foundingDate: "2022",
    founder: {
      "@type": "Person",
      name: "Dr. Vipin VK",
      description: "Serial entrepreneur and founder of Stem Cadets",
    },
    memberOf: {
      "@type": "Organization",
      name: "Entrepreneurship Community",
    },
    knowsAbout: [
      "Entrepreneurship",
      "Startup Collaboration",
      "Social Impact",
      "Innovation",
      "Community Building",
      "Business Networking",
    ],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: [
      "https://www.instagram.com/thegamechangers.world/",
      "https://www.thegamechangers.world",
    ],
    event: {
      "@type": "Event",
      name: "Wayanad Meetup",
      startDate: "2025-06-15",
      location: {
        "@type": "Place",
        name: "Wayanad",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
      },
      description:
        "The first full-day meetup of Game Changers - a space to build deeper connections and plan impactful initiatives together.",
      organizer: {
        "@type": "Organization",
        name: "The Game Changers",
        url: "https://www.thegamechangers.world",
      },
      offers: {
        "@type": "Offer",
        url: "https://makemypass.com/event/game-changers-meetup",
        availability: "https://schema.org/InStock",
      },
    },
    mainEntity: {
      "@type": "WebSite",
      "@id": "https://www.thegamechangers.world/#website",
      url: "https://www.thegamechangers.world",
      name: "The Game Changers",
      publisher: {
        "@id": "https://www.thegamechangers.world/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.thegamechangers.world/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <SchemaMarkup />
        {children}
      </body>
    </html>
  );
}
