const SATS_IN_BTC = 100000000;

export const convertToUSD = (value: number): string => {
  return (Math.round(value * 100) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const satsToBTC = (value: number): number => {
  return value / SATS_IN_BTC;
};
