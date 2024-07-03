import vazirFont from "@/constants/localFonts"
import Providers from "@/pages/Providers"
import { Toaster } from "react-hot-toast"
import '../../globals.css'
import Sidebar from "./Sidebar"

export const metadata = {
  title: ' پروفایل کاربر',
  description: 'پروفایل کاربر',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans`} suppressHydrationWarning={true}>
        <Providers>
          <Toaster />
          <div className="container xl:max-w-screen-xl overflow-x-hidden">
            
            <div className="grid grid-flow-col h-screen p-4">
                <Sidebar />
                <div className={`col-span-6 sm:col-span-7 md:col-span-9  overflow-y-auto space-y-5 p-4 bg-white text-sm md:text-base`}>
                  {children}
                </div>
            </div>

          </div>

        </Providers>
      </body>
    </html>
  )
}
