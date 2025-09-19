export type Chain = {
  id: string;
  name: string;
  logo: string;
};

export type Wallet = {
  id: string;
  address: string;
  shortAddress: string;
  name: string;
  balance: number;
  chain: Chain;
};

export type Token = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  balance: number;
  value: number;
  logo: string;
};

export type Transaction = {
  id: string;
  type: 'Send' | 'Receive' | 'Swap';
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
  amount: string;
  tokenSymbol: string;
  from: string;
  to: string;
  chain: Chain;
};

export type Alert = {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type PortfolioData = {
  wallets: Wallet[];
  tokens: Token[];
  transactions: Transaction[];
};
