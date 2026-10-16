import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Partner Program | Viral Flux Media - Digital Marketing Agency",
  description: "Official Growth Partner & Client Referral Program for Viral Flux Media - Digital Marketing Agency.",
  alternates: {
    canonical: "/program",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
