import React from "react";
import useRows from "../../util/useRows";
import items from "../../util/tools";
import ToolsItem from "./ToolsItem";

const Tools = () => {
  const rows = useRows(1150, 900, 4, 3, 2, items);

  return (
    <section className="tools">
      <h2 className="section-heading tools__heading">Tools & Languages</h2>
      <div
        className="tools__grid"
        style={{ gridTemplateRows: `repeat(${rows}, min-content)` }}
      >
        {items.map((item, index) => (
          <ToolsItem
            key={item.text}
            text={item.text}
            icon={item.icon}
            mirror={index + 1 > Math.round(items.length / 2)}
          />
        ))}
      </div>
    </section>
  );
};

export default Tools;
