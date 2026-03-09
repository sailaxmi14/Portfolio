import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Data Science and Machine Learning Intern",
    company: "Excelr",
    description:
      "Applied concepts to real-world projects including employee promotion prediction, while exploring industry practices.",
  },
  {
    role: "Python Programming Training & Internship",
    company: "AICTE",
    description:
      "Completed Python Programming Training & Internship with focused learning on Python fundamentals, core data structures, and algorithmic logic.",
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-secondary/50">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading title="Work Experience" />
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-card border border-border rounded-lg p-6 relative pl-8 before:absolute before:left-3 before:top-7 before:w-2 before:h-2 before:rounded-full before:bg-accent"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="font-body text-sm font-medium text-accent mb-2">{exp.company}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
