import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ReduxProvider from "./redux/provider";

export const metadata: Metadata = {
  title: "T-Commerce",
  description: "Tyr-Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`antialiased p-0 md:py-4 md:px-8 gap-8 flex flex-col justify-center`}
      >
        <ReduxProvider>
          <Navbar />
          <section className="w-full sm:w-3/4 p-4 self-center min-w-[350px] max-w-[1200px]">
            {children}
          </section>
        </ReduxProvider>
      </body>
    </html>
  );
}
