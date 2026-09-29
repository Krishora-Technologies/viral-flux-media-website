import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Experience | Viral Flux Media",
  description: "Experience the interactive launch of Viral Flux Media — performance social media and viral brand growth.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
