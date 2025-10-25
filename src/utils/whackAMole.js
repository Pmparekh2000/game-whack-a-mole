export const resetBoard = (rows, columns) => {
  return Array.from({ length: rows }, (_, index) => {
    return new Array(columns).fill(null);
  });
};

export const generateMolePosition = (rows, columns) => {
  const rowIdx = Math.floor(Math.random() * rows);
  if (rowIdx === rows) rowIdx--;

  const colIdx = Math.floor(Math.random() * columns);
  if (colIdx === columns) colIdx--;

  const randomPosition = [rowIdx, colIdx];
  return randomPosition;
};
