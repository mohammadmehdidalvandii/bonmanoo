import "./globals.css";

export const metadata = {
  title: "خرید اینترنتی قهوه بن مانو",
  description: "بهترین کیفیت دانه قهوه پودر قهوه از ما تهیه کنید",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">       
      <body>
          {children}
        </body>
    </html>
  );
}
