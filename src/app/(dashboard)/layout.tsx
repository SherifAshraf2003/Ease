import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "../../components/dashboard/home/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ease - Social Media Engagement Automation",
  description: "Dashboard for Ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-PrimaryBackground">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
