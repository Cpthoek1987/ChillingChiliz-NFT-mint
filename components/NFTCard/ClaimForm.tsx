"use client";

import { Input } from "@/components/ui/input";
import { formatEther } from "ethers/lib/utils";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface ClaimFormProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  pricePerToken?: string;
}

export function ClaimForm({ quantity, setQuantity, pricePerToken }: ClaimFormProps) {
  const totalPrice = pricePerToken 
    ? Number(formatEther(pricePerToken)) * quantity
    : 0;

  const handleIncrement = () => setQuantity(Math.min(quantity + 1, 10));
  const handleDecrement = () => setQuantity(Math.max(quantity - 1, 1));

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 backdrop-blur-lg border border-primary/10">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-sm font-medium text-muted-foreground">Quantity</label>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDecrement}
              className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              disabled={quantity <= 1}
            >
              <Minus size={18} />
            </button>
            
            <Input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="h-10 text-center text-lg font-medium bg-muted/30 border-primary/20 focus:border-primary/40 transition-colors"
            />
            
            <button
              onClick={handleIncrement}
              className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              disabled={quantity >= 10}
            >
              <Plus size={18} />
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="text-sm font-medium text-muted-foreground">Total Price</label>
          <motion.div 
            key={totalPrice}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="h-10 flex items-center"
          >
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {totalPrice.toFixed(4)}
              </span>
              <span className="ml-2 text-lg text-muted-foreground">ETH</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-lg opacity-50" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}