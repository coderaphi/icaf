// import React from "react";
// import {Component} from "react";
// import Layout from "../components/layout";
// import styles from "./book1.module.css";
// class book extends Component {

    
      
//       state= {
//         chapter1: {
//           image:"/images/rainbow.jpg",
//           text: "chapter1 data"
//         },
//         chapter2: {
//           image:"/images/rainbow2.jpg",
//           text: "chapter1 data"
//         },
//         chapter3: {
//           image:"/images/image3.jpg",
//           text: "chapter1 data"
//         },
//         chapter4: {
//           image:"/images/image4.jpg",
//           text: "chapter1 data"
//         },
//         chapter5: {
//           image:"images/image5.jpg",
//           text: "chapter1 data"
//         },
//         chapter6: {
//           image:"images/image6.jpg",
//           text: "chapter1 data"
//         },

//         index:0

    
//     }
//     chapter1=()=>{
//       this.setState({
//         index: this.state.chapter1.image
//       })
//     }
//     chapter2=()=>{
//       this.setState({
//         index: this.state.chapter2.image
//       })
//     }
//     chapter3=()=>{
//       this.setState({
//         index: this.state.chapter3.image
//       })
//     }
//     chapter4=()=>{
//       this.setState({
//         index: this.state.chapter4.image
//       })
//     }
//     chapter5=()=>{
//       this.setState({
//         index: this.state.chapter5.image
//       })
//     }
//     chapter6=()=>{
//       this.setState({
//         index: this.state.chapter6.image
//       })
//     }
  
//   render(){
//   return (
//     <Layout>
//       <div className={styles.container}>

//       <div className={styles.chapters}>
//           <h1>Anti-Children</h1>
//           <p>
//             Learn how our leaders subvert our children’s future and what you can
//             do to brighten it
//           </p>
//             <ul>
//               <br/>
//               <br/>
//                 <li className={styles.description} onClick={this.chapter1} > Rainbows and Obama</li>
//                 <li className={styles.description}onClick={this.chapter2}> Clinton and Charity</li>
//                 <li className={styles.description}onClick={this.chapter3}> Fullbright and Mozah</li>
//                 <li className={styles.description}onClick={this.chapter4}> Bush and Peacemaking</li>
//                 <li className={styles.description}onClick={this.chapter5}> Birth and imprisonment</li>
//                 <li className={styles.description}onClick={this.chapter6}> Hell and Heaven</li>
//             </ul>
//         </div>
//         <div className={styles.bookimage}>
         
//             <img href="#" className={styles.chapterImage} src={this.state.chapters[this.state.index]}/>
//             <div className={styles.textArea} > The music resumed with the haka and poi by the Maori dancers. They stuck their tongues all out as if to lick the rainbows. The twenty-odd Ugandan boys embraced the entire Tennessee Children’s Dance Ensemble before moving to their next target. The Japanese kids instantly raised peace signs, but to no avail. Utterly bewildered were the four blind musicians from Harare, who stood in silence with arms folded over their djembe and bongos. Instead of the rain’s drumbeat, they could now hear a cacophony of screams and shouts. They wondered if this was an American ritual when the rain ends which they did not know about. Their chaperon, Trust Mutekwa, came over and described the double-rainbows to them, first in Shona and then in Ndebele. Smiles parted the musicians’ lips beneath their hallowed eyes.</div>
//         </div>
        
//       </div>
//     </Layout>
//   )
// }
// }

// export default book