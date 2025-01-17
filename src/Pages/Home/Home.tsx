  import style from "./Home.module.css" ;
//   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import PersonalImage from "../../../public/PersonalImage/one.png"
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF , faLinkedinIn , faGithub , faWhatsapp  } from "@fortawesome/free-solid-svg-icons";


  const Home = () => {

 const name = "Ahmed Essam El Sayed" ;

    return (
        <>
{/* <FontAwesomeIcon className={style.oneIcon} icon={faSnowflake} /> */}

<section className={style.contentHomePage}>

<div className={style.detailsHalf}>

<div className={style.detaisInfo}>
<h2>Hello Everyone</h2>
<h1>
<Typewriter
        options={{
          strings: [name],
          autoStart: true,
          loop: true,
          delay: 80,
        }}
      />
</h1>

<h2>And I'm a Frontend Developer</h2>

<p>
A software developer specializing in front-end development with React JS and Next JS, utilizing JavaScript and TypeScript. I am dedicated to continually enhancing my skills and experience and am excited to collaborate with you to deliver well-organized and high-quality software solutions.
</p>

<div className={style.SocialIcons}>

<div className={style.oneIcon}><div className={style.defineIcon}>  <FontAwesomeIcon icon={faFacebookF} />  </div></div>
<div className={style.oneIcon}><div className={style.defineIcon}>  <FontAwesomeIcon icon={faLinkedinIn} />  </div></div>
<div className={style.oneIcon}><div className={style.defineIcon}>  <FontAwesomeIcon icon={faGithub} />  </div></div>
<div className={style.oneIcon}><div className={style.defineIcon}>  <FontAwesomeIcon icon={faWhatsapp} />  </div></div>


</div>





</div>

</div>


{/* =========================================================================================================================
Between Two Halfs
======================================================================================================================== */}


<div className={style.imageHalf}>










<div className={style.contentfImg}>
<div className={style.contentader}>

<div className={style.contentImge}>





<img src={PersonalImage} />



</div>

</div>
</div>














</div>

</section>
        </>
    );
  };
  export default Home ;