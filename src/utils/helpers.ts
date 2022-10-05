export const getMapZoom = (): number => {
  const width = window.innerWidth;

  if (width <= 350) return 0;
  if (width <= 400) return 0.3;
  if (width <= 475) return 0.5;
  if (width <= 560) return 0.7;
  if (width <= 680) return 1;
  if (width <= 800) return 1.2;

  return 1.5;
};

export const getMapRadius = (
  cases: number,
  casesPerOneMillion: number,
  globalCases: number,
): number => {
  return Math.max(Math.log((cases * casesPerOneMillion) / globalCases), 2);
};
