import React, { useEffect, useRef, useState } from "react";
import { GiGooeyMolecule } from "react-icons/gi";
import { generateMolePosition } from "../utils/whackAMole";

const Board = ({
  board = [[]],
  rows = 0,
  columns = 0,
  score = 0,
  setScore = () => {},
  molePosition = [0, 0],
  setMolePosition = () => {},
}) => {
  const [isClicked, setIsClcked] = useState(false);
  const [hammerPosition, setHammerPosition] = useState([]);
  const hammerPositionRef = useRef(null);
  const molePositionRef = useRef(null);
  const moleRow = molePosition[0];
  const moleColumn = molePosition[1];

  useEffect(() => {
    return () => {
      clearTimeout(hammerPositionRef.current);
      clearTimeout(molePositionRef.current);
    };
  }, []);

  useEffect(() => {
    setIsClcked(false);
  }, [moleRow, moleColumn]);

  const handleMoleClick = (rowIdx, colIdx) => {
    setHammerPosition([rowIdx, colIdx]);
    hammerPositionRef.current = setTimeout(() => {
      setHammerPosition();
    }, 1000);
    if (rowIdx === moleRow && colIdx === moleColumn && !isClicked) {
      molePositionRef.current = setTimeout(() => {
        setMolePosition(generateMolePosition(rows, columns));
      }, 200);

      setScore((prevScore) => prevScore + 1);
      setIsClcked((prevValue) => !prevValue);
    }
  };

  return (
    <div className="board-container">
      <div className="board-score">Score - {score}</div>
      <div
        className="board"
        style={{
          gridTemplateColumns: `repeat(${columns}, 50px)`,
          gridTemplateRows: `repeat(${rows}, 50px)`,
        }}
      >
        {board?.map((row, rowIdx) => {
          return row?.map((val, colIdx) => {
            return (
              <div
                className="cell"
                onClick={() => handleMoleClick(rowIdx, colIdx)}
                key={rowIdx + ", " + colIdx}
              >
                {hammerPosition?.length === 2 &&
                rowIdx === hammerPosition[0] &&
                colIdx === hammerPosition[1] ? (
                  <div className="hammer">🔨</div>
                ) : (
                  <></>
                )}
                {rowIdx === moleRow && colIdx === moleColumn ? (
                  <GiGooeyMolecule />
                ) : (
                  <></>
                )}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Board;
