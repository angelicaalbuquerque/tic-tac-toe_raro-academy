import "./Square.css";

type squareProps = {
  children?: React.ReactNode;
  dataCol: number;
  dataRow: number;
};

export const Square = ({ children, dataCol, dataRow }: squareProps) => {
  return (
    <span className="square" data-col={dataCol} data-row={dataRow}>
      {children}
    </span>
  );
};
