
import Header from "../Header";
import vazirFont from "../../constants/localFonts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "../Providers";
import Footer from "../Footer";
import ScrollToTopButton from "@/components/scrollToTopButton";
import { Suspense } from "react";



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`} suppressHydrationWarning={true}>
        <Providers>
          <Toaster />
          <Suspense>
            <Header />
          </Suspense>
          
          <div className="container xl:max-w-screen-xl overflow-x-hidden">
            {children}
            <ScrollToTopButton />  
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
