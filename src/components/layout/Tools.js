import React, { useState, useLayoutEffect } from "react";
import ToolsItem from "./ToolsItem";

const items = [
    { text: "HTML", icon: "icon-embed2" },
    { text: "CSS", icon: "icon-css3" },
    { text: "Sass", icon: "icon-sass" },
    { text: "JavaScript", icon: "icon-javascript" },
    { text: "ReactJS", icon: "icon-react" },
    { text: "Vue.js", icon: "icon-vue-dot-js" },
    { text: "Redux", icon: "icon-redux" },
    { text: "React Router", icon: "icon-reactrouter" },
    { text: "Next.js", icon: "icon-next-dot-js" },
    { text: "jQuery", icon: "icon-jquery" },
    { text: "Node.js", icon: "icon-node-dot-js" },
    { text: "Express.js", altIcon: "/images/express.svg" },
    { text: "EJS", altIcon: "/images/ejs.svg" },
    { text: "MongoDB", icon: "icon-mongodb" },
    { text: "Firebase", icon: "icon-firebase" },
    { text: "PHP", icon: "icon-php" },
    { text: "Wordpress", icon: "icon-wordpress" }
]

const Tools = () => {
    const [columns, setColumns] = useState(window.innerWidth > 900 ? 3 : 2);
    useLayoutEffect(() => {
        window.addEventListener("resize", () => setColumns(window.innerWidth > 900 ? 3 : 2));
    }, [])
    const rows = Math.ceil(items.length / columns);

    return (
        <section className="tools">
            <h2 className="section-heading tools__heading">{"Tools & Languages"}</h2>
            <div className="tools__grid" style={{
                gridTemplateRows: `repeat(${rows}, min-content)`
            }}>
                {items.map((item, index) =>
                    <ToolsItem
                        key={item.text}
                        text={item.text}
                        icon={item.icon}
                        altIcon={item.altIcon}
                        mirror={index + 1 > Math.round(items.length / 2)}
                    />
                )}
            </div>
        </section>
    )
}

export default Tools;