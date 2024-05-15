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
          <div className="container xl:max-w-screen-xl">
            
            <div className="grid grid-cols-4 h-screen p-4">
                <div className="col-span-1 overflow-y-auto p-4 bg-gray-200">
                    <Sidebar />
                </div>
                <div className="col-span-3 overflow-y-auto space-y-5 p-4 bg-white">
                  {children}
                </div>
            </div>

          </div>

        </Providers>
      </body>
    </html>
  )
}
