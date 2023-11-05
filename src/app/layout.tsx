"use client";

import GlobalStyle from "./styles/GlobalStyle"; // GlobalStyles 파일 경로에 따라 수정

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GlobalStyle />
      </body>
    </html>
  );
}
