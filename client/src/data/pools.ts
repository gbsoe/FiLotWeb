export interface Pool {
  id: string;
  pair: string;
  token1: string;
  token2: string;
  token1Color: string;
  token2Color: string;
  apy: number;
  tvl: number;
  fee: number;
  risk: 'Low' | 'Medium' | 'High';
  volume24h?: number;
}

export const pools: Pool[] = [
  {
    id: "sol-usdc",
    pair: "SOL/USDC",
    token1: "SOL",
    token2: "USDC",
    token1Color: "bg-blue-100",
    token2Color: "bg-green-100",
    apy: 22.5,
    tvl: 4500000,
    fee: 0.25,
    risk: "Low",
    volume24h: 2100000
  },
  {
    id: "sol-ray",
    pair: "SOL/RAY",
    token1: "SOL",
    token2: "RAY",
    token1Color: "bg-blue-100",
    token2Color: "bg-purple-100",
    apy: 45.8,
    tvl: 1250000,
    fee: 0.3,
    risk: "Medium",
    volume24h: 890000
  },
  {
    id: "ray-usdc",
    pair: "RAY/USDC",
    token1: "RAY",
    token2: "USDC",
    token1Color: "bg-purple-100",
    token2Color: "bg-green-100",
    apy: 38.7,
    tvl: 950000,
    fee: 0.25,
    risk: "Medium",
    volume24h: 650000
  },
  {
    id: "sol-msol",
    pair: "SOL/mSOL",
    token1: "SOL",
    token2: "mSOL",
    token1Color: "bg-blue-100",
    token2Color: "bg-indigo-100",
    apy: 19.8,
    tvl: 3200000,
    fee: 0.2,
    risk: "Low",
    volume24h: 1800000
  },
  {
    id: "eth-usdc",
    pair: "ETH/USDC",
    token1: "ETH",
    token2: "USDC",
    token1Color: "bg-gray-100",
    token2Color: "bg-green-100",
    apy: 15.5,
    tvl: 8500000,
    fee: 0.2,
    risk: "Low",
    volume24h: 3200000
  }
];
