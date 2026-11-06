"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

interface MicrosoftClarityProps {
  projectId?: string;
}

export function MicrosoftClarity({
  projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "z9aqk194cp",
}: MicrosoftClarityProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && projectId) {
      Clarity.init(projectId);
    }
  }, [projectId]);

  return null;
}

export { Clarity };
