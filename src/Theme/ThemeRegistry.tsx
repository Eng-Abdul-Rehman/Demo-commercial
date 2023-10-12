'use client';
import { ThemeProvider } from '@mui/material/styles';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
// import { Roboto } from "next/font/google";
import { customTheme } from './CustomTheme';

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });
export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
