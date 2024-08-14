import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/nav/footer";
import Header from "@/components/nav/header";
import { Toaster } from "@/components/ui/sonner";
import Sidebar from "@/components/nav/sidebar";

const APP_NAME = "PMCP App";
const APP_DEFAULT_TITLE = "Team Photo PWA App";
const APP_TITLE_TEMPLATE = "%s - PMCP App";
const APP_DESCRIPTION = "BXL MCP Team Photo";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        /*         className="bg-gray-100 min-h-[100dvh] grid grid-rows-[1fr_auto]"
         */ className=" min-h-[100dvh] flex flex-col md:max-w-4xl mx-auto"
      >
        <Header />

        <div className="flex-1 max-md:grid md:flex  md:justify-between md:gap-2">
          {" "}
          <div className="max-md:hidden">
            <Sidebar />
          </div>
          <div className="md:flex-1 grid">{children}</div>
        </div>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
