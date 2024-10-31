import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ProgressBarProps {
  claimedSupply?: string;
  totalSupply?: string;
}

export function ProgressBar({ claimedSupply, totalSupply }: ProgressBarProps) {
  const claimed = Number(claimedSupply || 0);
  const total = Number(totalSupply || 0);
  const progress = total > 0 ? (claimed / total) * 100 : 0;

  return (
    <div className="p-6 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 backdrop-blur-lg border border-primary/10">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-muted-foreground">Total Claimed</span>
          <motion.span
            key={claimed}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-sm font-bold text-primary"
          >
            {claimed} / {total}
          </motion.span>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-lg opacity-30" />
          <Progress 
            value={progress} 
            className="h-3 bg-muted/50"
          />
        </div>
        
        <div className="flex justify-between text-xs">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            {progress.toFixed(1)}% Claimed
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            {(100 - progress).toFixed(1)}% Remaining
          </motion.span>
        </div>
      </div>
    </div>
  );
}