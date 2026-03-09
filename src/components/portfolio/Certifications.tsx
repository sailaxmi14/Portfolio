import SectionHeading from "./SectionHeading";
import { Award, Trophy } from "lucide-react";

const certifications = [
  "Python for Data Science – NPTEL",
  "Data Analytics Job Simulation – Forage",
  "AWS Cloud Architect – Eduskills",
];

const achievements = [
  "SQL (Basic) – HackerRank",
  "Python (Basic) – HackerRank",
];

const Certifications = () => (
  <section className="py-20 bg-secondary/50">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading title="Certifications & Achievements" />
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award size={18} className="text-accent" /> Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c}
                className="font-body text-sm text-muted-foreground bg-card border border-border rounded-md px-4 py-3"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Trophy size={18} className="text-accent" /> Achievements
          </h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li
                key={a}
                className="font-body text-sm text-muted-foreground bg-card border border-border rounded-md px-4 py-3"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
