import style from "./Skill.module.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", img: "/skills/html.png" },
    { name: "CSS3", img: "/skills/css.png" },
    { name: "JavaScript", img: "/skills/js.png" },
    { name: "TypeScript", img: "/skills/typescript.png" },
    { name: "Bootstrap", img: "/skills/bootstrap.png" },
    { name: "React JS", img: "/skills/react.png" },
    { name: "Redux", img: "/skills/redux.png" },
    { name: "npm", img: "/skills/npm.png" },
    { name: "Vite", img: "/skills/vite.png" },
    { name: "Next JS", img: "/skills/next.png" },
    { name: "Figma", img: "/skills/figma.png" },
    { name: "C++", img: "/skills/C++.png" },
    { name: "C#", img: "/skills/SharpC.png" },
    { name: "SQL", img: "/skills/sql.png" },
    { name: "Web Design", img: "/skills/design.png" },
  ];

  return (
    <section className={style.skillSection}>
      <h1>My Skills</h1>
      <div className={style.skillContent}>
        {skills.map((skill, index) => (
          <div key={index} className={style.oneskill}>
            <span className={style.nameofSkill}>{skill.name}</span>
            <span className={style.imgSpan}>
              <img src={skill.img} alt={skill.name} loading="lazy" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
