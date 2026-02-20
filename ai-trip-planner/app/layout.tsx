import { ClerkProvider } from "@clerk/nextjs";
import { Tapestry } from "next/font/google";
import Provider from "./provider";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadata = {
  title: "AI Trip Planner",
  description: "Your AI-powered travel companion",
};

const tapestry = Tapestry({ 
  weight: "400",
  subsets: ["latin"] 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={tapestry.className}>
        <ClerkProvider>      {/* ← INSIDE body */}
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}


