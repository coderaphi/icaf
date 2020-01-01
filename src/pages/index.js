import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.css"
import profileImage from "../images/profile.jpg"
import covernew from "../images/covernew.jpg"
import coverold from "../images/coverold.jpg"
import ln from "../images/ln.png"
import twitter from "../images/twitter.png"

console.log(styles)

const index = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftseg}>
          <div className={styles.profile}>
            <img className={styles.profimage} src={profileImage} />
          </div>
          <div className={styles.text}>
            I did not set out to be the person who has examined and judged more
            artworks by children than anyone else around, but this was a
            consequence of my founding the International Child Art Foundation in
            1997 in Washington, D.C. Children’s creative expressions immersed me
            in their imagination. I came to believe that art produced by
            children is the most honest and purest form of human creative
            expression. The collective imagination of the world’s children is a
            precious resource in the universe, a guide for the future. In 1998,
            I produced the first-ever national American children’s art festival,
            and since 1999 I have produced the World Children’s Festival at The
            National Mall every four years as the Olympics of children
            imagination. An economist by training, I started my career as a
            researcher at the World Bank before joining the faculty at the
            George Washington University. I went out on my own, started a
            consulting company that took me around the world before founding
            ICAF to make this world better for its children. My objective is to
            awaken your inner-child, the creative-empath in you, so you join us
            to help the children employ their inborn wisdoms and machines
            artificial intelligence to repair the world by bringing humankind on
            the side of humanity.
          </div>
        </div>

        <div className={styles.bookHolder}>
          <div className={styles.bookimage}>
            <a href="/book">
              {/* {" "} */}
              <img href="#" className={styles.covernew} src={covernew} />
            </a>
          </div>
          <div className={styles.bookimage2}>
            
            
            
          <a href="https://www.amazon.com/dp/B00D7MQ2PU"><img className={styles.coverold} src={coverold} /></a>  
          </div>
        </div>
        <div className={styles.links}></div>

        <ul className={styles.bottomlinks}>
          <li className={styles.bottom}>CV</li>
          <li className={styles.bottom}> Contact</li>
          <li className={styles.bottom}> News</li>
         
          <li>
          <div className={styles.socBorder}>
            <img href="#" className={styles.ln} src={ln}></img>
            <img href="#" className={styles.twitter} src={twitter}></img>
          </div>
          
          </li>

        </ul>
      </div>
    </Layout>
  )
}
export default index
