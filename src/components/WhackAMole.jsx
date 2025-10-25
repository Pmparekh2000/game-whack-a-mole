import React, { useEffect, useState } from "react";
import Board from "./Board";
import { generateMolePosition, resetBoard } from "../utils/whackAMole";

const WhackAMole = ({ rows = 3, columns = 3, delay = 1000 }) => {
  const [board, setBoard] = useState(() => resetBoard(rows, columns));
  const [molePosition, setMolePosition] = useState(
    generateMolePosition(rows, columns)
  );
  const [score, setScore] = useState(0);

  useEffect(() => {
    const gameMoleInterval = setInterval(() => {
      setMolePosition(generateMolePosition(rows, columns));
    }, delay);

    return () => {
      clearInterval(gameMoleInterval);
    };
  }, []);
  return (
    <Board
      board={board}
      rows={rows}
      columns={columns}
      score={score}
      setScore={setScore}
      molePosition={molePosition}
      setMolePosition={setMolePosition}
    />
  );
};

export default WhackAMole;
