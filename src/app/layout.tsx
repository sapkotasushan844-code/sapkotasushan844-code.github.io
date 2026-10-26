import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Outfit, Syne } from "next/font/google";
import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { profile } from "@/lib/content";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Mechanical Engineering student at Howard University seeking an engineering internship. Portfolio of Sushan Sapkota, Washington, D.C. Expected graduation May 2027.";

export const metadata: Metadata = {
  title: "Sushan Sapkota · Mechanical Engineering",
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Sushan Sapkota",
    "Mechanical Engineering",
    "Howard University",
    "MATLAB",
    "SolidWorks",
    "AutoCAD",
    "Washington D.C.",
  ],
  openGraph: {
    title: "Sushan Sapkota · Mechanical Engineering",
    description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#050814",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: profile.email,
  telephone: "+1-240-926-4543",
  jobTitle: profile.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.school,
  },
  sameAs: [profile.linkedinHref],
  knowsLanguage: ["English", "Nepali"],
  description: profile.objective,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} ${plex.variable}`}>
      <body className="min-h-screen bg-ink font-sans text-mist antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Background />
        <div className="relative z-10">
          <a href="#content" className="skip-link">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
