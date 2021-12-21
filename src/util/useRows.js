import { useState, useEffect } from "react";

const useRows = (breakpoint, desktopCols, mobileCols, items) => {
  const [columns, setColumns] = useState(
    window.innerWidth > breakpoint ? desktopCols : mobileCols
  );
  const rows = Math.ceil(items.length / columns);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setColumns(window.innerWidth > breakpoint ? desktopCols : mobileCols)
    );
  }, [breakpoint, desktopCols, mobileCols]);
  return rows;
};

export default useRows;
