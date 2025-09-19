
'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { wallets as mockWallets } from "@/lib/mock-data";
import { WalletRegistrationModal } from './wallet-registration-modal';
import type { Wallet } from '@/lib/types';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import Image from 'next/image';
import { WalletConnectModal, type NewWalletInfo } from './wallet-connect-modal';
import { useToast } from '@/hooks/use-toast';

const WALLETS_STORAGE_KEY = 'budgetchain-ai-wallets';

export function WalletManager() {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    try {
        const storedWallets = localStorage.getItem(WALLETS_STORAGE_KEY);
        if (storedWallets) {
            setWallets(JSON.parse(storedWallets));
        } else {
            setWallets(mockWallets);
        }
    } catch (error) {
        console.error("Failed to load wallets from local storage", error);
        setWallets(mockWallets);
    }
  }, []);

  const handleRegisterClick = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setIsRegisterModalOpen(true);
  };
  
  const handleAddNewClick = () => {
    setIsConnectModalOpen(true);
  };

  const handleWalletConnected = (newWalletInfo: NewWalletInfo) => {
    setIsConnectModalOpen(false);
    
    const newWallet: Wallet = {
      id: (wallets.length + 1).toString(),
      ...newWalletInfo,
    };

    const updatedWallets = [...wallets, newWallet];
    setWallets(updatedWallets);
    
    try {
        localStorage.setItem(WALLETS_STORAGE_KEY, JSON.stringify(updatedWallets));
    } catch (error) {
        console.error("Failed to save wallets to local storage", error);
    }

    toast({
      title: "Wallet Connected",
      description: `Successfully connected to wallet: ${newWallet.shortAddress}`,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wallets.map((wallet) => (
          <Card key={wallet.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{wallet.name}</CardTitle>
                 <Image src={wallet.chain.logo} alt={wallet.chain.name} width={16} height={16} />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">${wallet.balance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground font-mono">{wallet.shortAddress}</p>
            </CardContent>
            <div className="flex items-center p-4 pt-0">
                <Button size="sm" variant="outline" className="w-full" onClick={() => handleRegisterClick(wallet)}>
                    Register Wallet
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8 ml-2">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Refresh Balance</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Disconnect</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </Card>
        ))}
        <Button variant="outline" className="h-full min-h-[160px] flex-col gap-2" onClick={handleAddNewClick}>
          <PlusCircle className="h-6 w-6" />
          <span className="text-sm">Add New Wallet</span>
        </Button>
      </div>
      
      {selectedWallet && (
          <WalletRegistrationModal
            isOpen={isRegisterModalOpen}
            setIsOpen={setIsRegisterModalOpen}
            wallet={selectedWallet}
          />
      )}

      <WalletConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        onConnect={handleWalletConnected}
      />
    </>
  );
}
