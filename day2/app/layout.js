import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen border m-1 border-white">
        <div className=" border-2 border-red-600">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
