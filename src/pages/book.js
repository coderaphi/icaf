import React from "react";
import {Component} from "react";
import Layout from "../components/layout";
import styles from "./book1.module.css";
class book extends Component {

    
      
      state= {
        chapters: [
          
          "/images/rainbow.jpg",
          "/images/rainbow2.jpg",
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSth_o52tNSN6nqu2hmfycXfZQ2CDUs2d1uaLDmuWSSPj4ItKKMgZgSVhGeyxK79gswHNL_8cdwa14kMOjQCfDhCWwIFsLFeTdKun7yBFivXmD4wHvjulxJ&usqp=CAc",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCqpQgQCYtE0fg4-ghEBW-vsO2S8PUawxq2i-RVG5JpXmdpDLTfTOWJtQThp5cLIGnmlOqSbX1ZoOXrDMaF21BQtk1w6_eBmQUrNWeb-_AAcJt8JPsdpBVHw&usqp=CAc"

        ],
        index:0

    
    }
    chapter1=()=>{
      this.setState({
        index: this.state.index =0
      })
    }
    chapter2=()=>{
      this.setState({
        index: this.state.index =1
      })
    }
    chapter3=()=>{
      this.setState({
        index: this.state.index =2
      })
    }
    chapter4=()=>{
      this.setState({
        index: this.state.index =3
      })
    }
    chapter5=()=>{
      this.setState({
        index: this.state.index =5
      })
    }
  
  render(){
  return (
    <Layout>
      <div className={styles.container}>

      <div className={styles.chapters}>
          <h1>Anti-Children</h1>
          <p>
            Learn how our leaders subvert our children’s future and what you can
            do to brighten it
          </p>
            <ul>
                <li onClick={this.chapter1} > Rainbows and Obama</li>
                <li onClick={this.chapter2}> Clinton and Charity</li>
                <li onClick={this.chapter3}> Fullbright and Mozah</li>
                <li onClick={this.chapter4}> Bush and Peacemaking</li>
                <li onClick={this.chapter5}> Birth and imprisonment</li>
                <li onClick={this.chapter6}> Hell and Heaven</li>
            </ul>
        </div>
        <div className={styles.bookimage}>
         
            <img href="#" className={styles.chapterImage} src={this.state.chapters[this.state.index]}/>
          
        </div>
        
      </div>
    </Layout>
  )
}
}

export default book
