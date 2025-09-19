
'use client';
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Wallet, Shield, Zap } from "lucide-react";
import { chains } from "@/lib/mock-data";
import type { Chain } from "@/lib/types";

export interface NewWalletInfo {
    name: string;
    address: string;
    shortAddress: string;
    chain: Chain;
    balance: number;
}

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (wallet: NewWalletInfo) => void;
}

const walletOptions = [
  {
    name: "MetaMask",
    icon: "🦊",
    description: "Connect to Ethereum and EVM chains",
    chain: chains.ethereum,
    popular: true
  },
  {
    name: "Phantom",
    icon: "👻", 
    description: "Connect to Solana ecosystem",
    chain: chains.solana,
    popular: true
  },
  {
    name: "WalletConnect",
    icon: "🔗",
    description: "Connect via WalletConnect protocol",
    chain: chains.polygon,
    popular: false
  },
  {
    name: "Coinbase Wallet",
    icon: "🔵",
    description: "Connect with Coinbase Wallet",
    chain: chains.ethereum,
    popular: false
  }
];

export const WalletConnectModal = ({ isOpen, onClose, onConnect }: WalletConnectModalProps) => {
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = async (walletOption: typeof walletOptions[0]) => {
    setConnecting(walletOption.name);
    
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock wallet address and data
    const mockAddress = `0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    const newWallet: NewWalletInfo = {
        name: walletOption.name,
        address: mockAddress,
        shortAddress: `${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)}`,
        chain: walletOption.chain,
        balance: parseFloat((Math.random() * 10000).toFixed(2)),
    }
    
    onConnect(newWallet);
    
    setConnecting(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Wallet className="w-6 h-6 mr-2 text-accent" />
            Connect Wallet
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              Choose a wallet to connect and start tracking your portfolio
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-green-500" />
                Secure
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                Fast
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {walletOptions.map((wallet) => (
              <Card 
                key={wallet.name} 
                className="hover:bg-secondary/50 transition-colors cursor-pointer"
                onClick={() => !connecting && handleConnect(wallet)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{wallet.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{wallet.name}</h3>
                          {wallet.popular && (
                            <Badge variant="secondary" className="text-xs">Popular</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{wallet.description}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge key={wallet.chain.name} variant="outline" className="text-xs">
                              {wallet.chain.name}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {connecting === wallet.name ? (
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                    ) : (
                      <Button variant="ghost" size="sm">
                        Connect
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-xs text-muted-foreground text-center pt-4 border-t">
            By connecting a wallet, you agree to our Terms of Service and Privacy Policy.
            We never store your private keys.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
