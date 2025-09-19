import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export const BitcoinLogo = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
  >
    <path d="M11.767 19.089c4.91 1.533 9.47-1.554 9.47-1.554s-1.504-4.285-6.315-6.207c-4.81-1.922-9.469 1.554-9.469 1.554s1.504 4.285 6.315 6.207z" />
    <path d="M6.804 14.856c-4.91-1.533-7.015-5.917-7.015-5.917s4.234-1.63 9.145-.097c4.91 1.533 7.015 5.917 7.015 5.917s-4.234 1.63-9.145.097z" />
    <path d="M12.015 5.25a2.52 2.52 0 0 0-2.52 2.52c0 1.393 1.127 2.52 2.52 2.52a2.52 2.52 0 0 0 2.52-2.52c0-1.393-1.127-2.52-2.52-2.52z" />
  </svg>
);


export const EthereumLogo = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
  >
    <path d="M12 2 4.5 11.5l7.5 4.5 7.5-4.5L12 2z" />
    <path d="M4.5 11.5 12 22l7.5-10.5" />
    <path d="M12 16V2" />
  </svg>
);

export const SolanaLogo = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4", className)}
  >
    <path d="M7 4h10" />
    <path d="M7 20h10" />
    <path d="M4 7v10" />
    <path d="M20 7v10" />
    <path d="m16 8-4 4-4-4" />
    <path d="m8 16 4-4 4 4" />
  </svg>
);

export const EvmChainLogo = ({ className }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M10.4 2.8l-7.2 4.5a2 2 0 0 0-1.2 1.8v9a2 2 0 0 0 1.2 1.8l7.2 4.5a2 2 0 0 0 2 0l7.2-4.5a2 2 0 0 0 1.2-1.8v-9a2 2 0 0 0-1.2-1.8L12.4 2.8a2 2 0 0 0-2 0Z" />
      <path d="m17 9-5 3-5-3" />
      <path d="m12 18-5-3" />
      <path d="M12 12v6" />
      <path d="M17 15-5 9" />
    </svg>
);