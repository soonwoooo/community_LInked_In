"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle"; // GlobalStyles 파일 경로에 따라 수정

const theme = {
  // 여기에 필요한 테마 변수를 정의할 수 있습니다.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>{children}</body>
        <GlobalStyle />
      </html>
    </ThemeProvider>
  );
}
