"use client";

import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string;

export function useNFTContract(quantity: number) {
  const address = useAddress();
  const { toast } = useToast();
  const [claiming, setClaiming] = useState(false);

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: contractMetadata } = useContractRead(contract, "contractURI");
  const { data: totalSupply } = useContractRead(contract, "totalSupply");
  const { data: claimedSupply } = useContractRead(contract, "totalMinted");
  const { data: pricePerToken } = useContractRead(contract, "cost");

  const handleClaim = async () => {
    if (!contract || !address) return;

    try {
      setClaiming(true);
      const tx = await contract.erc721.claim(quantity);
      toast({
        title: "NFTs Claimed!",
        description: `Successfully claimed ${quantity} NFTs.`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setClaiming(false);
    }
  };

  return {
    contractMetadata,
    totalSupply,
    claimedSupply,
    pricePerToken,
    handleClaim,
    claiming,
    isDisabled: !address
  };
}