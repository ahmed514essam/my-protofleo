  import style from "./Home.module.css" ;
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import PersonalImage from "../../../public/PersonalImage/one.png"

  const Home = () => {
    return (
        <>

<section className={style.contentHomePage}>

<div className={style.detailsHalf}>

</div>


{/* =========================================================================================================================
Between Two Halfs
======================================================================================================================== */}


<div className={style.imageHalf}>


<div className={style.contentImge}>
<FontAwesomeIcon className={style.oneIcon} icon={faSnowflake} />
<FontAwesomeIcon className={style.twoIcon} icon={faSnowflake} />
<div className={style.bgBlackImg}>

<div className={style.selfImge}>

<img alt="the personal image for me / Ahmed Essam El Sayed" src={PersonalImage} />
</div>

</div>

<FontAwesomeIcon className={style.threeIcon} icon={faSnowflake} />

<FontAwesomeIcon className={style.fourIcon} icon={faSnowflake} />
</div>



</div>

</section>
        </>
    );
  };
  export default Home ;