export const formatMoney = (num: number) => {
  return `€${(Math.round(num * 0.01 * 100) / 100).toFixed(2)}`;
};
