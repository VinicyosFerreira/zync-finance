export const generateFinancialMix = (data) => {
  const targetKeys = ['earnings', 'expenses', 'investments'];

  const newData = targetKeys.map((key) => {
    return {
      type: key,
      value: Number(data[key]) || 0,
    };
  });

  const total = newData.reduce((acc, item) => acc + item.value, 0);

  const colors = [
    'hsl(var(--chart-2))',
    'hsl(var(--chart-5))',
    'hsl(var(--chart-1))',
  ];

  const percentageData = newData.map((item, i) => {
    if (total > 0) {
      const percentage = ((item.value / total) * 100).toFixed(2);
      return {
        type: item.type,
        percentage: Number(percentage),
        fill: colors[i],
      };
    }
    return {
      type: item.type,
      percentage: 0,
      fill: colors[i],
    };
  });
  return percentageData;
};
