import React from "react"
import Layout from "../components/layout"
import Menu from "../components/Menu"
import styles from "./index.module.css"
console.log(styles)

const index = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftseg}>
          <div className={styles.profile}>
            <img className={styles.profimage} src="/images/profile.jpg" />
          </div>
          <div className={styles.text}>
            As founder and chimney sweep of the International Child Art
            Foundation, I organize the Arts Olympiad—which has grown since 1997
            into the world’s largest school art program, in part because it is
            free of charge. Would you believe that my biggest qualification is
            that I have examined more children’s artworks than anyone else,
            ever? I have come to believe that art produced by a child is the
            most honest and purest form of human creative expression.In
            September 1998, I produced the first-ever national American
            children’s art festival. I have produced the World Children’s
            Festival at The National Mall every four years since 1999. I have
            come to believe that the collective imagination of the world’s
            children is a heavenly force on Earth.An economist by training, I
            have written for The Lancet and have served on the board of the
            World Psychiatry Foundation. I am recipient of the Ziegfeld Award
            for Outstanding International Leadership in Art Education and the
            United States Sport Academy’s Distinguished Service Award. The
            United Nations appointed me as one of the five international judges
            who selected the final design of the Slavery Memorial that now
            adorns the UN headquarters in New York City.My objective is to
            awaken your inner child—the creative and empathic you. Our world is
            broken and lies in heaps because it needs more “creative-empaths” to
            brighten the future for all.
          </div>
        </div>

        <div className={styles.bookHolder}>
          <div className={styles.bookimage}>
            <a href="/book">
              {/* {" "} */}
              <img
                href="#"
                className={styles.covernew}
                src="/images/covernew.jpg"
              />
            </a>
          </div>
          <div className={styles.bookimage2}>
            <img className={styles.coverold} src="/images/coverold.jpg" />
          </div>
        </div>
        <div className={styles.links}>
     
        </div>
        
        <ul className={styles.bottomlinks}>
            <li>CV</li>
            <li> Contact</li>
            <li>
                <img href="#"
                className={styles.ln}
                src="/images/ln.png"></img>
            </li>
          </ul>
           
        </div>
        <div className={styles.footer}> Copyrights Reserved Dr Ishaq Ashfaq 
      </div>
    </Layout>
  )
}
export default index
