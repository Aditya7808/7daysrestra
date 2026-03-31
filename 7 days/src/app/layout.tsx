import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "7Days Restra | Authentic Chinese & Indian Cuisine in Gorakhpur",
  description:
    "Experience the finest Chinese and Indian cuisine at 7Days Restra, Kunraghat, Gorakhpur. Fresh ingredients, authentic flavors, served 7 days a week. Open 10AM–11:30PM.",
  keywords: [
    "restaurant",
    "Gorakhpur",
    "Chinese food",
    "Indian cuisine",
    "Kunraghat",
    "7Days Restra",
    "best restaurant Gorakhpur",
  ],
  openGraph: {
    title: "7Days Restra | Authentic Flavors, Every Day",
    description:
      "Fresh ingredients, authentic Chinese & Indian cuisine. Located near MMMUT, Kunraghat, Gorakhpur.",
    url: "https://7days-restra.grexa.site",
    siteName: "7Days Restra",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "7Days Restra",
              image: "/hero-bg.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Main Gate Deoria Rd, in front of MMMUT Engineering College, Divya Nagar",
                addressLocality: "Gorakhpur",
                addressRegion: "Uttar Pradesh",
                postalCode: "273010",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.7606,
                longitude: 83.3732,
              },
              url: "https://7days-restra.grexa.site",
              telephone: "+91-8604790727",
              servesCuisine: ["Chinese", "Indian"],
              priceRange: "₹₹",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "10:00",
                closes: "23:30",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "45",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
