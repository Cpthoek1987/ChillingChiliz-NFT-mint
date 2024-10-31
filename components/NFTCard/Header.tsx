import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  description: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <CardHeader className="text-center pb-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CardTitle className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {title}
        </CardTitle>
        <CardDescription className="text-lg mt-4 text-muted-foreground">
          {description}
        </CardDescription>
      </motion.div>
    </CardHeader>
  );
}