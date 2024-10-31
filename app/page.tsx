"use client";

import { ConnectWallet } from "@thirdweb-dev/react";
import { NFTCard } from "@/components/NFTCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-primary/2 to-transparent blur-2xl" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="relative max-w-4xl mx-auto px-4 py-20 md:px-8">
        <div className="absolute top-8 right-4 md:right-8 z-50">
          <ConnectWallet 
            theme="dark"
            btnTitle="Connect Wallet"
          />
        </div>
        <NFTCard />
      </div>
    </main>
  );
}