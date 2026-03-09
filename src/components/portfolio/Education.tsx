import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Avanthi Institute of Engineering and Technology, Makavarapalem",
    period: "2022 – 2026",
    cgpa: "8.19",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Sri Satya Sai Junior College, Salur",
    period: "2020 – 2022",
    cgpa: "8.4",
  },
  {
    degree: "SSC",
    institution: "K.A.N. Municipal High School, Salur",
    period: "2019 – 2020",
    cgpa: "9.5",
  },
];

const Education = () => (
  <section id="education" className="py-20 bg-background">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading title="Education" />
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="bg-card border border-border rounded-lg p-6 flex gap-4 items-start"
          >
            <div className="mt-1 rounded-full bg-secondary p-2 shrink-0">
              <GraduationCap size={18} className="text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="font-heading text-base font-semibold text-foreground">{edu.degree}</h3>
                <span className="text-xs font-body text-muted-foreground">{edu.period}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">{edu.institution}</p>
              <p className="font-body text-sm font-medium text-accent mt-1">CGPA: {edu.cgpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
