"use client";

import GlobalStyle from "./styles/GlobalStyle"; // GlobalStyles 파일 경로에 따라 수정
import Footer from "@/view/components/Footer";
import Header from "@/view/components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <GlobalStyle />
        <Footer />
      </body>
    </html>
  );
}
