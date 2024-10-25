import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import AuthProvider from "@/Services/AuthProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: 'Car Doctor',
    template: '%s | Car Doctor'

  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ToastContainer/>
      <AuthProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <div className="p-3">
            <Navbar></Navbar>
            {children}
          </div>
          <Footer></Footer>
        </body>
      </AuthProvider>
    </html >
  );
}
