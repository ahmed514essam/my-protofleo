import { useState } from "react";
import style from "./Skill.module.css";
import AllSkills from "./AllSkills/AllSkills";
import FrontendSkills from "./FrontendSkills/FrontendSkills";
import ProgrammingSkills from "./ProgrammingSkills/ProgrammingSkills";
import "./Skily.css" ;

const Skills = () => {
const [ category , setCategory ] = useState<number>(1);

const choOne = () => {
setCategory(1)
document.querySelector(".choOneClassOne")?.classList.add("tmtm");
document.querySelector(".choTwoClassTwo")?.classList.remove("tmtm");
document.querySelector(".choThreeClassThree")?.classList.remove("tmtm");
}
const choTwo = () => {
setCategory(2)
document.querySelector(".choOneClassOne")?.classList.remove("tmtm");
document.querySelector(".choTwoClassTwo")?.classList.add("tmtm");
document.querySelector(".choThreeClassThree")?.classList.remove("tmtm");
}
const choThree = () => {
setCategory(3)
document.querySelector(".choOneClassOne")?.classList.remove("tmtm");
document.querySelector(".choTwoClassTwo")?.classList.remove("tmtm");
document.querySelector(".choThreeClassThree")?.classList.add("tmtm");
}
  return (
    <section className={style.skillSection}>
      <h1>My Skills</h1>
  
<div className={style.btnCategories}>
  <button className="choOneClassOne tmtm" onClick={choOne}>ALL</button>
  <button className="choTwoClassTwo" onClick={choTwo}>Frontend technique</button>
  <button className="choThreeClassThree" onClick={choThree}>Programming technique</button>
</div>

{category === 1 ? <AllSkills/> : category === 2 ? <FrontendSkills/> : category ===3 ? <ProgrammingSkills/> : null }

    </section>
  );
};

export default Skills;
