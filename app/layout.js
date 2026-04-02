import { Outfit } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "NexNest Solutions | Future of Living",
  description: "Next-generation real estate solutions powered by AI and Headless CMS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased bg-[#020617] text-slate-200`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
