
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const SETTINGS_STORAGE_KEY = 'budgetchain-ai-settings';

type Settings = {
  theme: string;
  currency: string;
  emailNotifications: boolean;
  priceAlerts: boolean;
};

export default function SettingsPage() {
  const { toast } = useToast();
  const [settings, setSettings] = useState<Settings>({
    theme: 'dark',
    currency: 'usd',
    emailNotifications: true,
    priceAlerts: false,
  });

  useEffect(() => {
    try {
      const storedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    } catch (error) {
      console.error("Failed to load settings from local storage", error);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (settings.theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(settings.theme);
    }
  }, [settings.theme]);

  const handleSettingChange = (key: keyof Settings, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };
  
  const savePreferences = () => {
    try {
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
        toast({
            title: "Preferences Saved",
            description: "Your settings have been successfully saved.",
        });
    } catch (error) {
        console.error("Failed to save settings to local storage", error);
        toast({
            title: "Error",
            description: "Failed to save your preferences.",
            variant: "destructive"
        });
    }
  };


  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage how you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
              <span>Email Notifications</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Receive important updates about your account and new features.
              </span>
            </Label>
            <Switch 
              id="email-notifications" 
              checked={settings.emailNotifications}
              onCheckedChange={(value) => handleSettingChange('emailNotifications', value)}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="price-alerts" className="flex flex-col space-y-1">
              <span>Price Alerts</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Get notified when your favorite assets move significantly.
              </span>
            </Label>
            <Switch
              id="price-alerts"
              checked={settings.priceAlerts}
              onCheckedChange={(value) => handleSettingChange('priceAlerts', value)}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel of your dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid gap-2">
                <Label>Theme</Label>
                <Select value={settings.theme} onValueChange={(value) => handleSettingChange('theme', value)}>
                    <SelectTrigger className='w-full md:w-1/3'>
                        <SelectValue placeholder="Select a theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
             <div className="grid gap-2">
                <Label>Currency</Label>
                <Select value={settings.currency} onValueChange={(value) => handleSettingChange('currency', value)}>
                    <SelectTrigger className='w-full md:w-1/3'>
                        <SelectValue placeholder="Select a currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="usd">USD - United States Dollar</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                        <SelectItem value="ngn">NGN - Nigerian Naira</SelectItem>
                        <SelectItem value="kes">KES - Kenyan Shilling</SelectItem>
                        <SelectItem value="zar">ZAR - South African Rand</SelectItem>
                        <SelectItem value="ghs">GHS - Ghanaian Cedi</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </CardContent>
         <div className="flex items-center p-6">
            <Button onClick={savePreferences}>Save Preferences</Button>
          </div>
      </Card>
    </div>
  );
}
