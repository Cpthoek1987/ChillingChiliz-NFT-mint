"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { ClaimForm } from "./ClaimForm";
import { ClaimFooter } from "./ClaimFooter";
import { useNFTContract } from "@/hooks/useNFTContract";
import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function NFTCard() {
  const [quantity, setQuantity] = useState(1);
  const { 
    contractMetadata,
    totalSupply,
    claimedSupply,
    pricePerToken,
    handleClaim,
    claiming,
    isDisabled
  } = useNFTContract(quantity);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10">
        <div className="absolute inset-0 backdrop-blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <Card className="relative overflow-hidden border-0 bg-gradient-to-b from-muted/80 to-background/80 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        {/* Floating logo circle with enhanced effects */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-float">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-40 h-40"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 blur-xl" />
            
            {/* Main circle container */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-background p-[2px]">
              {/* Inner gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/50 opacity-30 animate-pulse" />
              
              {/* Content container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-background/95 to-muted/95 p-6 flex items-center justify-center overflow-hidden">
                {/* Sparkle effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_45%,_var(--primary)_46%,_transparent_47%)] opacity-[0.03] animate-[spin_8s_linear_infinite]" />
                
                {/* Logo/Image */}
                {contractMetadata?.image ? (
                  <motion.img 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    src={contractMetadata.image} 
                    alt={contractMetadata.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main content */}
        <div className="pt-24 relative">
          <Header 
            title={contractMetadata?.name || "Premium NFT Collection"}
            description="Claim your exclusive NFTs from our curated collection"
          />
          
          <CardContent className="space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ProgressBar 
                claimedSupply={claimedSupply?.toString()} 
                totalSupply={totalSupply?.toString()} 
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ClaimForm
                quantity={quantity}
                setQuantity={setQuantity}
                pricePerToken={pricePerToken?.toString()}
              />
            </motion.div>
          </CardContent>
          
          <ClaimFooter 
            onClaim={handleClaim}
            isDisabled={isDisabled}
            isClaiming={claiming}
          />
        </div>
      </Card>
    </motion.div>
  );
}