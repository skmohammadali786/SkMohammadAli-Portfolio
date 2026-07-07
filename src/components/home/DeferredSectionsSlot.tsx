"use client";

import type { ComponentType } from "react";
import { useEffect, useState } from "react";

export default function DeferredSectionsSlot() {
  const [DeferredSections, setDeferredSections] = useState<ComponentType | null>(null);

  useEffect(() => {
    import("@/components/home/HomeDeferredSections").then((module) => {
      setDeferredSections(() => module.default);
    });
  }, []);

  if (!DeferredSections) {
    return null;
  }

  return <DeferredSections />;
}
