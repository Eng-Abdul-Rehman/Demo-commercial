"use client";
import "./globals.css";
import "../styles/palette.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "@/redux/store";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeRegistry>
            <body>{children}</body>
          </ThemeRegistry>
        </Provider>
      </QueryClientProvider>
    </html>
  );
}
