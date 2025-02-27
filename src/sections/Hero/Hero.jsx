import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Kevin.jpg';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';
import ttLight from '../../assets/ttWhite.png';
import ttDark from '../../assets/ttBlack.png';
import instaLight from '../../assets/instaWhite.png';
import instaDark from '../../assets/instaBlack.png';
import githubLight from '../../assets/githubWhite.png';
import githubDark from '../../assets/githubBlack.png';
import { useTheme } from '../common/ThemeContect';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const github = theme === 'light' ? githubDark : githubLight;
  const tt = theme === 'light' ? ttDark : ttLight;
  const insta = theme === 'light' ? instaDark : instaLight;

  return (
      <section id='hero'>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of me" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon"  onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
              <br /> Koller <br /> Kevin
            </h1>
            <br />
            <div className={styles.wrapper}>
            <div className={styles.staticText}>I'm </div>
            <ul className={styles.dynamicText}>
                <li><span>a Developer</span></li>
                <li><span>a Influencer</span></li>
                <li><span>a Guitarist</span></li>
                <li><span>Batman</span></li>
              </ul>
            </div>
            <span>
              <a href="https://github.com/Kevx17" target='_blank'>
                <img src={github} alt="github" />
              </a>
              <a href="https://www.instagram.com/kevvin_koller/" target='_blank'>
                <img src={insta} alt="insta" />
              </a>
              <a href="https://www.tiktok.com/@kk_guixtar" target='_blank'>
                <img src={tt} alt="tik tok" />
              </a>
            </span>
            <p className={styles.description}>With a passion for creating, I’m crafting riffs, writing code, and shaping digital spaces.</p>
            <br />
            <button>View More</button>
        </div>
      </section>
  )
}

export default Hero
