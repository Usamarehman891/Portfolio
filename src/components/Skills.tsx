
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      accent: "primary-purple",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      accent: "primary-teal",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      title: "Databases & Other",
      icon: "🛠️",
      accent: "primary-pink",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "AWS/Azure", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-2xl font-medium">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-6 gradient-text">Technical Expertise</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-muted-foreground text-lg">
            Here are my technical skills and proficiency levels that I've developed over years of practice and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="glass border border-primary/10 card-hover shadow-lg shadow-primary/5">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-2xl mb-6 gradient-text">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-2.5 rounded-full bg-gradient-primary"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
