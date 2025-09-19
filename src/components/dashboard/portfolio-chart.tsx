

'use client';
import { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Sector } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { tokens, totalBalance } from '@/lib/mock-data';

const chartData = tokens.map(token => ({
  name: token.symbol,
  value: token.value,
  fill: getChainColorVar(token.symbol),
}));

const chartConfig = tokens.reduce((acc, token) => {
  acc[token.symbol] = {
    label: token.name,
    color: getChainColorVar(token.symbol),
  };
  return acc;
}, {} as any);


function getChainColorVar(symbol: string) {
    switch(symbol) {
        case 'ETH': return 'hsl(var(--chart-1))';
        case 'SOL': return 'hsl(var(--chart-2))';
        case 'WBTC': return 'hsl(var(--chart-3))';
        case 'MATIC': return 'hsl(var(--chart-4))';
        default: return 'hsl(var(--chart-5))';
    }
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 6) * cos;
  const sy = cy + (outerRadius + 6) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';


  return (
    <g>
       <text x={cx} y={cy - 10} textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-sm">
        Total Balance
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="hsl(var(--foreground))" className="text-2xl font-bold">
        ${totalBalance.toLocaleString()}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
       <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
       <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
       <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} textAnchor={textAnchor} fill="hsl(var(--foreground))" dy={-10} className="font-semibold">
        {payload.name}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 8} y={ey} textAnchor={textAnchor} fill="hsl(var(--muted-foreground))" dy={8}>
        ${value.toLocaleString()} ({(percent * 100).toFixed(2)}%)
      </text>
    </g>
  );
};


export default function PortfolioChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-80">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square h-full"
      >
        <PieChart>
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={80}
            outerRadius={100}
            strokeWidth={2}
            onMouseEnter={onPieEnter}
          >
            {chartData.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={entry.fill} className="stroke-background hover:opacity-80" />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
}
