
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { tokens } from '@/lib/mock-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const chartData = tokens.map(token => ({
  name: token.symbol,
  value: token.value,
  fill: getChainColorVar(token.symbol),
}));

function getChainColorVar(symbol: string) {
  switch (symbol) {
    case 'ETH':
      return 'hsl(var(--chart-1))';
    case 'SOL':
      return 'hsl(var(--chart-2))';
    case 'WBTC':
      return 'hsl(var(--chart-3))';
    case 'MATIC':
      return 'hsl(var(--chart-4))';
    default:
      return 'hsl(var(--chart-5))';
  }
}

export default function ReportsPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reports Center</CardTitle>
          <CardDescription>
            Detailed analysis and downloadable reports for your portfolio.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
            <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download Transaction History (CSV)</Button>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download Tax Report (PDF)</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Asset Distribution</CardTitle>
          <CardDescription>
            A visual breakdown of your portfolio's asset allocation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={value =>
                  `$${(value as number).toLocaleString()}`
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                }}
                formatter={(value: number) => [
                  `$${value.toLocaleString()}`,
                  'Value',
                ]}
              />
              <Legend />
              <Bar dataKey="value" name="Portfolio Value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Detailed Asset View</CardTitle>
           <CardDescription>A granular look at each asset in your portfolio.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>24h Change</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tokens.map((token) => (
                <TableRow key={token.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Image src={token.logo} alt={token.name} width={24} height={24} />
                      <div>
                        <div className="font-medium">{token.name}</div>
                        <div className="text-muted-foreground text-sm">{token.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>${token.price.toLocaleString()}</TableCell>
                  <TableCell>
                     <Badge variant={token.change24h > 0 ? 'success' : 'destructive'}>
                      {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                    </Badge>
                  </TableCell>
                  <TableCell>{token.balance.toLocaleString()} {token.symbol}</TableCell>
                  <TableCell className="text-right">${token.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
