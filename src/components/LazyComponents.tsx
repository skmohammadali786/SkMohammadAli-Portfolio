"use client";

import dynamic from "next/dynamic";

export const DynamicScene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });
export const DynamicVisualEditsMessenger = dynamic(() => import("@/visual-edits/VisualEditsMessenger"), { ssr: false });
