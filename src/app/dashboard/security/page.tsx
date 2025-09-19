

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Shield, Smartphone, Monitor, Clock, LogOut } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const authorizedDevices = [
    { id: 1, type: 'Desktop', name: 'Chrome on MacOS', ip: '192.168.1.101', last_active: '2 hours ago', icon: Monitor },
    { id: 2, type: 'Mobile', name: 'App on iPhone 15 Pro', ip: '172.20.10.2', last_active: '1 day ago', icon: Smartphone }
]

export default function SecurityPage() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Center</CardTitle>
          <CardDescription>
            Manage your account's security settings and monitor activity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
            <Label htmlFor="two-factor-auth" className="flex flex-col space-y-1">
              <span className="font-semibold">Two-Factor Authentication (2FA)</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Add an extra layer of security to your account.
              </span>
            </Label>
            <div className="flex items-center gap-4">
                <span className="text-sm text-green-500">Enabled</span>
                <Switch id="two-factor-auth" defaultChecked />
            </div>
          </div>
           <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg">
            <Label htmlFor="phishing-code" className="flex flex-col space-y-1">
              <span className="font-semibold">Anti-Phishing Code</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Set a unique code to appear in all official emails from us.
              </span>
            </Label>
             <Button variant="outline">Set Up</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle>Authorized Devices</CardTitle>
            <CardDescription>This is a list of devices that have logged into your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Device</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {authorizedDevices.map(device => (
                        <TableRow key={device.id}>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <device.icon className="h-5 w-5 text-muted-foreground" />
                                    <span>{device.name}</span>
                                </div>
                            </TableCell>
                             <TableCell>{device.ip}</TableCell>
                             <TableCell>{device.last_active}</TableCell>
                             <TableCell className="text-right">
                                <Button variant="ghost" size="sm">Revoke</Button>
                             </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
       <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="w-full md:w-auto">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out From All Devices
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
