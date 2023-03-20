import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../styles/globals.css";
import { NextSeoProps } from "next-seo";

type CustomMetadata = NextSeoProps & {
  author: string;
  keywords: string;
};

export const metadata: CustomMetadata = {
  title: "Zack Dx - Programming and Code Snippets Blog",
  description:
    "A blog about programming and code snippets, covering a wide range of topics including web development, software engineering, data science, and more.",
  author: "Zack Dx",
  keywords:
    "programming, code snippets, web development, software engineering, data science",
  openGraph: {
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/105835098?v=4",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    type: "website",
    url: "https://harshitmishra.in",
    site_name: "Zack Dx",
    title: "Zack Dx - Programming and Code Snippets Blog",
    description:
      "A blog about programming and code snippets, covering a wide range of topics including web development, software engineering, data science, and more.",
  },
  twitter: {
    handle: "@example",
    site: "@harshitmishra.in",
    cardType: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
