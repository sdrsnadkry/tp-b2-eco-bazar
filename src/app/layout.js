import Header from "./_components/header";
import "./globals.css";

import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] });

const poppins = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Eco bazar",
  description: "This is an e-commerce site for selling vegetables and fruits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
