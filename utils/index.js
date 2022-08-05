// Format any value to have exact integer digits before the point and exact decimal digits after the point. Will add zero's at the beggining and at the end if needed.
export const formatNumber = (value, integer = 1, decimal = 0) =>
  Number(value)
    .toFixed(decimal)
    .padStart(integer + decimal + (decimal ? 1 : 0), '0');
export const formatResource = (value) => formatNumber(value, 1, 1);
