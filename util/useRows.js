import { useState, useEffect, useCallback } from "react";

const useRows = (
  tabletBreakpoint,
  mobileBreakpoint,
  desktopCols,
  tabletCols,
  mobileCols,
  items
) => {
  const numOfColumns = useCallback(
    () =>
      window.innerWidth > tabletBreakpoint
        ? desktopCols
        : window.innerWidth > mobileBreakpoint
        ? tabletCols
        : mobileCols,
    [tabletBreakpoint, mobileBreakpoint, desktopCols, tabletCols, mobileCols]
  );
  const [columns, setColumns] = useState(4);
  const rows = Math.ceil(items.length / columns);
  useEffect(() => {
    setColumns(numOfColumns);
    window.addEventListener("resize", () => setColumns(numOfColumns));
  }, [
    tabletBreakpoint,
    mobileBreakpoint,
    desktopCols,
    tabletCols,
    mobileCols,
    numOfColumns
  ]);
  return rows;
};

export default useRows;
