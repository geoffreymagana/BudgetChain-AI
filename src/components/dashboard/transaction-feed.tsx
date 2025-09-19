
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  ExternalLink, 
  Filter,
  Repeat
} from "lucide-react";
import Image from "next/image";
import { chains, transactions as mockTransactions } from "@/lib/mock-data";
import { useEffect, useState } from "react";
import type { Transaction } from "@/lib/types";

interface TransactionWithDisplayValue extends Transaction {
    displayValue: string;
}

const getTransactionIcon = (type: string) => {
  switch (type) {
    case "Receive":
      return <ArrowDownLeft className="w-4 h-4 text-green-500" />;
    case "Send":
      return <ArrowUpRight className="w-4 h-4 text-red-500" />;
    case "Swap":
      return <Repeat className="w-4 h-4 text-blue-500" />;
    default:
      return <ArrowUpRight className="w-4 h-4" />;
  }
};

const getChainLogo = (chainName: string): string => {
    const chainKey = chainName.toLowerCase() as keyof typeof chains;
    if (chains[chainKey]) {
        return chains[chainKey].logo;
    }
    return ""; // Return a default or empty string if not found
};


const TransactionFeed = () => {
    const [transactions, setTransactions] = useState<TransactionWithDisplayValue[]>([]);

    useEffect(() => {
        // Generate random values only on the client-side to avoid hydration errors
        const clientSideTransactions = mockTransactions.map(tx => ({
            ...tx,
            displayValue: (Math.random() * 1000).toFixed(2),
        }));
        setTransactions(clientSideTransactions);
    }, []);


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            Recent Transactions
          </CardTitle>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div 
              key={tx.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 rounded-lg border hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
                  {getTransactionIcon(tx.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium capitalize">{tx.type}</span>
                    <Image src={getChainLogo(tx.chain.name)} alt={tx.chain.name} width={16} height={16} />
                    <span className="text-sm text-muted-foreground">{tx.chain.name}</span>
                  </div>
                  
                  <p className="text-sm font-mono">{tx.amount}</p>
                  
                  {(tx.from || tx.to) && (
                    <p className="text-xs text-muted-foreground font-mono">
                      {tx.type === "Receive" ? "From: " : "To: "}
                      {tx.from || tx.to}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="text-left sm:text-right w-full sm:w-auto pl-14 sm:pl-0">
                <div className="flex items-center justify-end space-x-2">
                    <p className="font-medium">${tx.displayValue}</p>
                    <Button variant="ghost" size="icon" className="w-8 h-8 shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                    <Badge 
                      variant={tx.status === "Completed" ? "secondary" : "outline"}
                      className="capitalize text-xs"
                    >
                      {tx.status}
                    </Badge>
                </div>
              </div>
            </div>
          ))}
          
          <div className="pt-2">
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionFeed;
