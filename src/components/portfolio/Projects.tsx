import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Secure OTP Generator API",
    tech: "Python",
    description:
      "Developed a secure OTP generation and verification system using Python, implementing backend logic for OTP creation, validation, and expiration management to enhance authentication security.",
  },
  {
    title: "CodeBattle Streak – Cloud-Based Coding Tracker",
    tech: "AWS, Python, Flask",
    description:
      "Built a cloud-based coding streak tracking system using AWS services to monitor and manage user progress. Implemented authentication, problem tracking, and streak maintenance using scalable cloud architecture.",
  },
  {
    title: "Heart Disease Prediction using ML",
    tech: "Python, Scikit-learn, Pandas, NumPy",
    description:
      "Developing a machine learning model to predict heart disease using the Random Forest algorithm. Performed data preprocessing, feature selection, and model evaluation to improve prediction accuracy.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-background">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeading title="Projects" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-card border border-border rounded-lg p-6 flex flex-col hover:shadow-lg transition-shadow group"
          >
            <span className="text-xs font-body font-medium text-accent mb-2 tracking-wide uppercase">
              {p.tech}
            </span>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
