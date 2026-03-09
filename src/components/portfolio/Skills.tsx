import SectionHeading from "./SectionHeading";

const skillGroups = [
  { category: "Languages", items: ["C Language", "Python", "SQL", "Java"] },
  { category: "Cloud", items: ["AWS"] },
  { category: "Web Technologies", items: ["HTML", "CSS"] },
  { category: "Web Framework", items: ["Flask"] },
  { category: "Core Concepts", items: ["Data Structures", "Algorithms", "OOP", "DBMS"] },
  { category: "Tools", items: ["Git"] },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-secondary/50">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeading title="Technical Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-body font-medium text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
