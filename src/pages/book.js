import React from "react"
import { Component } from "react"
import Layout from "../components/layout"
import styles from "./book1.module.css"
import image1 from "../images/rainbow.jpg"
import image2 from "../images/rainbow2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image5.jpg"
import image5 from "../images/image6.jpg"
import image6 from "../images/image4.jpg"

let data = [
  { id: 1, image: image1, chapter: "1.  Rainbows and Obama ", text: "The music resumed with the haka and poi by the Maori dancers. They stuck their tongues all out as if to lick the rainbows. The twenty-odd Ugandan boys embraced the entire Tennessee Children’s Dance Ensemble before moving to their next target. The Japanese kids instantly raised peace signs, but to no avail. Utterly bewildered were the four blind musicians from Harare, who stood in silence with arms folded over their djembe and bongos. Instead of the rain’s drumbeat, they could now hear a cacophony of screams and shouts. They wondered if this was an American ritual when the rain ends which they did not know about. Their chaperon, Trust Mutekwa, came over and described the double-rainbows to them, first in Shona and then in Ndebele. Smiles parted the musicians’ lips beneath their hallowed eyes." },
  { id: 2, image: image2, chapter: "2.  Clinton and Charity" ,text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { id: 3, image: image3, chapter: "3.  Fulbright and Mozah" ,text: "Consider this: You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs. Then the question arises: where's the content? Not there yet? That's not so bad, there's dummy copy to the rescue. But worse, what if the fish doesn't fit in the can, the foot's to big for the boot? Or to small? To short sentences, to many headings, images too large for the proposed design, or too small, or they fit in but it looks iffy for reasons the folks in the meeting can't quite tell right now, but they're unhappy, somehow. A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't quite put a finger on it is worse. " },
  { id: 4, image: image4, chapter: "4.  Bush and Peacemaking" ,text: "The music resumed with the haka and poi by the Maori dancers. They stuck their tongues all out as if to lick the rainbows. The twenty-odd Ugandan boys embraced the entire Tennessee Children’s Dance Ensemble before moving to their next target. The Japanese kids instantly raised peace signs, but to no avail. Utterly bewildered were the four blind musicians from Harare, who stood in silence with arms folded over their djembe and bongos. Instead of the rain’s drumbeat, they could now hear a cacophony of screams and shouts. They wondered if this was an American ritual when the rain ends which they did not know about. Their chaperon, Trust Mutekwa, came over and described the double-rainbows to them, first in Shona and then in Ndebele. Smiles parted the musicians’ lips beneath their hallowed eyes." },
  { id: 5, image: image5, chapter: "5.  Birth and Imprisonment" ,text: "But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required. It's content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum wouldn't have helped, won't help now. It's like saying you're a bad designer, use less bold text, don't use italics in every other paragraph. True enough, but that's not all that it takes to get things back on track." },
  { id: 6, image: image6, chapter: "6.  Hell and Heaven" ,text: "Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages for web shops, or user profiles in social networks, all of them potentially with different sizes, formats, rules for differing elements things can break, designs agreed upon can have unintended consequences and look much different than expected." }
]

class book extends Component {
  state = { selected: "" }

  handleClick = list => {
    this.setState({ selected: list })
  }

  render() {
    const { selected } = this.state
    return (
      <Layout>
        <div className={styles.container}>
          {/* <h2>Please select chapter from the list</h2> */}
          <ul className={styles.chapters}>
          {data.map(r => (
            
              <li className={styles.chaptItems} key={r.id} onClick={() => this.handleClick(r)}>
                {r.chapter}
              </li>
            
          ))}
          </ul>

          <div className={styles.imageHolder}>
            <img className={styles.chapImage}  src={selected.image}></img>
            <div className={styles.textArea}>{selected.text}</div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default book
