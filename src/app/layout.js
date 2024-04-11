import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavbarConponent from "@/components/NavbarConponent";

const inter = Inter({ subsets: ["latin"] });
const popPins = Poppins({subsets:["latin"],weight:"400"})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={popPins.className}>
        <NavbarConponent/>
        {children}
      </body>
    </html>
  );
}
