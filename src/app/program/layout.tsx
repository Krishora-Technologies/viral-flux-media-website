import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Partner Program | Viral Flux Media",
  description: "Official Growth Partner & Client Referral Program for Viral Flux Media marketing agency.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProgramLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
