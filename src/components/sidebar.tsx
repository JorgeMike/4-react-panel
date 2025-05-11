import React from "react";

interface SidebarProps {
  title: string;
  items: string[];
}

export default function Sidebar({ sections }: { sections: SidebarProps[] }) {
  return (
    <nav className="sidebar">
      {sections.map((section, i) => (
        <div className="sidebar-seccion" key={i}>
          <div>
            <strong>{section.title}</strong>
          </div>
          <ul>
            {section.items.map((item, j) => (
              <li key={j}>
                <a href="">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
