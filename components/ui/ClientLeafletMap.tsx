"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/ui/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[420px] bg-neutral-100 rounded-2xl flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function ClientLeafletMap() {
  return <LeafletMap />;
}
