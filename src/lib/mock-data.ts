import type { Wallet, Token, Transaction, Alert } from '@/lib/types';
import { ArrowRightLeft, Bell, ShieldCheck, Info } from 'lucide-react';

export const chains = {
  ethereum: { id: 'eth', name: 'Ethereum', logo: 'https://img.icons8.com/fluency/48/ethereum.png' },
  solana: { id: 'sol', name: 'Solana', logo: 'https://img.icons8.com/nolan/64/solana.png' },
  polygon: { id: 'matic', name: 'Polygon', logo: 'https://img.icons8.com/?size=100&id=LhueiMPUoxw4&format=png&color=000000' },
  bitcoin: { id: 'btc', name: 'Bitcoin', logo: 'https://img.icons8.com/color/48/bitcoin--v1.png' },
  cardano: { id: 'ada', name: 'Cardano', logo: 'https://img.icons8.com/fluency/48/cardano.png' },
  tether: { id: 'usdt', name: 'Tether', logo: 'https://img.icons8.com/ios-filled/50/tether.png' },
};

export const wallets: Wallet[] = [
  { id: '1', address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', shortAddress: '0x71C...976F', name: 'Main ETH Wallet', balance: 12530.50, chain: chains.ethereum },
  { id: '2', address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', shortAddress: '0xAb5...eC9B', name: 'Polygon Hot Wallet', balance: 3205.10, chain: chains.polygon },
  { id: '3', address: '8gEfeDpsg7aEfb61qu3gAC2YxG1i2kX8iJ1Z3tJ5a5q7', shortAddress: '8gEfe...a5q7', name: 'Solana Staking', balance: 8750.00, chain: chains.solana },
];

export const tokens: Token[] = [
  { id: '1', name: 'Ethereum', symbol: 'ETH', price: 3500.00, change24h: 2.5, balance: 2.5, value: 8750.00, logo: chains.ethereum.logo },
  { id: '2', name: 'Solana', symbol: 'SOL', price: 150.00, change24h: -1.2, balance: 50, value: 7500.00, logo: chains.solana.logo },
  { id: '3', name: 'Wrapped BTC', symbol: 'WBTC', price: 65000.00, change24h: 1.8, balance: 0.1, value: 6500.00, logo: chains.bitcoin.logo },
  { id: '4', name: 'Polygon', symbol: 'MATIC', price: 0.75, change24h: 5.3, balance: 4273.47, value: 3205.10, logo: chains.polygon.logo },
];

export const transactions: Transaction[] = [
  { id: '1', type: 'Receive', status: 'Completed', date: '2024-07-20', amount: '+1.5 ETH', tokenSymbol: 'ETH', from: '0x...aBcD', to: '0x71C...976F', chain: chains.ethereum },
  { id: '2', type: 'Send', status: 'Completed', date: '2024-07-19', amount: '-10 SOL', tokenSymbol: 'SOL', from: '8gEfe...a5q7', to: '0x...eFgH', chain: chains.solana },
  { id: '3', type: 'Swap', status: 'Completed', date: '2024-07-18', amount: '500 USDC -> 0.14 ETH', tokenSymbol: 'USDC/ETH', from: '0xAb5...eC9B', to: '0xAb5...eC9B', chain: chains.polygon },
  { id: '4', type: 'Send', status: 'Pending', date: '2024-07-20', amount: '-1000 MATIC', tokenSymbol: 'MATIC', from: '0xAb5...eC9B', to: '0x...iJkL', chain: chains.polygon },
];

export const alerts: Alert[] = [
    { id: '1', title: 'Large Outgoing Transfer', description: 'A transfer of 5 ETH ($17,500.00) was sent from your Main ETH Wallet.', date: '3 hours ago', icon: ArrowRightLeft },
    { id: '2', title: 'Price Alert: SOL', description: 'Solana (SOL) has dropped by 5% in the last 24 hours.', date: '1 day ago', icon: Bell },
    { id: '3', title: 'Security Alert: New Login', description: 'A new device (Chrome on MacOS) has logged into your account.', date: '2 days ago', icon: ShieldCheck },
    { id: '4', title: 'Feature Update', description: 'You can now generate detailed portfolio reports from the AI Insights panel.', date: '4 days ago', icon: Info },
];

export const totalBalance = wallets.reduce((acc, wallet) => acc + wallet.balance, 0);

export const portfolioForAI = {
  portfolioData: JSON.stringify({
    wallets: wallets.map(w => ({ address: w.address, balance: w.balance, chain: w.chain.name })),
    tokens: tokens.map(t => ({ symbol: t.symbol, balance: t.balance, value: t.value })),
    transactions: transactions.map(tx => ({ type: tx.type, amount: tx.amount, date: tx.date })),
  }, null, 2),
  investmentGoals: "Seeking long-term growth with a moderate risk tolerance. Interested in diversification across Layer 1s and DeFi protocols."
};
