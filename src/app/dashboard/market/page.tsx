
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Image from 'next/image';

const marketData = [
  { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: 65000.00, change24h: 1.8, marketCap: '1.2T', logo: 'https://img.icons8.com/color/48/bitcoin--v1.png' },
  { rank: 2, name: 'Ethereum', symbol: 'ETH', price: 3500.00, change24h: 2.5, marketCap: '420B', logo: 'https://img.icons8.com/fluency/48/ethereum.png' },
  { rank: 3, name: 'Solana', symbol: 'SOL', price: 150.00, change24h: -1.2, marketCap: '69B', logo: 'https://img.icons8.com/nolan/64/solana.png' },
  { rank: 4, name: 'Cardano', symbol: 'ADA', price: 0.45, change24h: 3.1, marketCap: '16B', logo: 'https://img.icons8.com/fluency/48/cardano.png' },
  { rank: 5, name: 'Polygon', symbol: 'MATIC', price: 0.75, change24h: 5.3, marketCap: '7.5B', logo: 'https://img.icons8.com/?size=100&id=LhueiMPUoxw4&format=png&color=000000' },
  { rank: 6, name: 'Tether', symbol: 'USDT', price: 1.00, change24h: 0.0, marketCap: '112B', logo: 'https://img.icons8.com/ios-filled/50/tether.png' },
];

export default function MarketPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
          <CardDescription>
            Stay up-to-date with the latest market trends.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>24h Change</TableHead>
                <TableHead>Market Cap</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketData.map((asset) => (
                <TableRow key={asset.symbol}>
                  <TableCell>{asset.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image src={asset.logo} alt={asset.name} width={24} height={24} />
                      <span className="font-medium">{asset.name}</span>
                      <span className="text-muted-foreground">{asset.symbol}</span>
                    </div>
                  </TableCell>
                  <TableCell>${asset.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={asset.change24h >= 0 ? 'success' : 'destructive'} className="flex items-center gap-1">
                      {asset.change24h >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                      {asset.change24h.toFixed(2)}%
                    </Badge>
                  </TableCell>
                  <TableCell>${asset.marketCap}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
