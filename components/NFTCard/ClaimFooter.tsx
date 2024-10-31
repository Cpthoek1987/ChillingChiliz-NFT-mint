"use client";

import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface ClaimFooterProps {
  onClaim: () => Promise<void>;
  isDisabled: boolean;
  isClaiming: boolean;
}

export function ClaimFooter({ onClaim, isDisabled, isClaiming }: ClaimFooterProps) {
  return (
    <CardFooter className="px-6 pb-6">
      <motion.div 
        className="w-full relative"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-primary/20 blur-lg opacity-50" />
        <Button 
          className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all relative overflow-hidden group"
          onClick={onClaim}
          disabled={isDisabled || isClaiming}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          {isClaiming ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Claiming...
            </>
          ) : (
            "Claim NFTs"
          )}
        </Button>
      </motion.div>
    </CardFooter>
  );
}