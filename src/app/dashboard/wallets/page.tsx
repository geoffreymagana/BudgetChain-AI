
import { WalletManager } from '@/components/dashboard/wallet-manager';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function WalletsPage() {
  return (
    <div className="grid gap-6">
       <Card>
        <CardHeader>
          <CardTitle>Wallets</CardTitle>
          <CardDescription>
            Connect and manage all your wallets in one place.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WalletManager />
        </CardContent>
      </Card>
    </div>
  );
}
