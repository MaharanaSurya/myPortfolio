import React from 'react'
import { getImageUrl } from "../../utils";
import styles from "./Exeperence.module.css"

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div >
        <ul className={styles.content}>
            <li>
                <img src={getImageUrl("skills/html.png")} alt="html icon" />
                <p>HTML</p>
            </li>
            <li>
                <img src={getImageUrl("skills/css.png")} alt="css icon" />
                <p>CSS</p>
            </li>
            <li>
                <img src={getImageUrl("skills/react.png")} alt="react icon" />
                <p>React</p>
            </li>
            <li>
                <img src={getImageUrl("skills/javascript.png")} alt="figma icon" />
                <p>JS</p>
            </li>
            
        </ul>
        <ul className={styles.content}>
            <li>
                <img src={getImageUrl("skills/redux.png")} alt="html icon" />
                <p>Redux</p>
            </li>
            <li>
                <img src={getImageUrl("skills/MUI.png")} alt="css icon" />
                <p>MUI</p>
            </li>
            <li>
                <img src={getImageUrl("skills/Nextjs.png")} alt="react icon" />
                <p>Next.js</p>
            </li>
            <li>
                <img src={getImageUrl("skills/tailwind.png")} alt="figma icon" />
                <p>Tailwind</p>
            </li>
            
        </ul>
        <div className={styles.experience}>
        <img className={styles.expimg} src={getImageUrl("history/Wipro.png")} alt="experience 1" />
        <div className={styles.bar}></div>
        <div className={styles.expdetails}>
            <h3 className={styles.exptitle}>Software Developer</h3>
            <p>November 2020 - Present</p>
            <ul>
                <li>Worked on React Application</li>
                <li>Used Redox Toolkit for state management</li>
            </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
