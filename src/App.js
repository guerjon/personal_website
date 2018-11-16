import React, { Component } from 'react';
import './App.css';
import { Grid,Row,Col,Image,Glyphicon} from 'react-bootstrap';
import resume from './files//Resume.pdf'
import Particles from 'react-particles-js'
import {OXFORD_DICTIONARIES} from "./urls"
import axios from 'axios';

/*const PROGRAMMING_LANGUAGES = 
[
  "Javascript (Expert)",
  "Java (Proficient)",
  "PHP (Expert)",
  "Swift (Proficient)",
  "Kotlin (Prior Experience)",
  "Haskell (Basic)",
  "C (Prior experience)"
]
*/
const open_bracket = "{"
const close_bracket = "}"

/*let software_developer = {
  name: "Jonathan",
  last_name: "Guerrero",
  title: "Software Enginner",
  experience_years : 4,
  programming_languages : PROGRAMMING_LANGUAGES,
  worked_companies : [
    {
      name: "SORIANO ARIZA",
      title: "WEB DEVELOPER",
      website: "soriano-ariza.com",
      experience_time: 2,
      start_year: 2015,
      end_year: 2017
    },
    {
      name : "SURE-FI",
      title: "SOFTWARE ENGINEER",
      website: "sure-fi.com",
      experience_time: 1.5,
      start_year: 2017,
      end_year: "Current Job"
    }
  ]
}*/

let portfolio_items = [

  {
    title: "Sure-Fi App",
    url: "https://play.google.com/store/apps/details?id=com.surefi&hl=en",
    type: "android-app",
    "languages": ["java","javascript"],
    image: "android-square.png",
    technologies : ["React Native","Java","Android","Javascript"],
    description: "The Sure-Fi app gives you the ability to connect, configure and pair your Sure-Fi Devices using BLE connection to write commands and read information."
  },
  {
    title: "Sure-Fi Website",
    url: "http://sure-fi.com/",
    type: "android-app",
    "languages": ["java","javascript"],
    image: "sure-fi-website-square.png",
    technologies : ["React","Bootstrap","CSS","Javascript"],
    description: "Company Responsive Website, you can see all the information about this technology.",
  },  
  {
    title: "Sure-Fi Manufacturing App",
    url: "github code",
    type: "ios-app",
    languages: ["swift"],
    image: "ios-square.png",
    show_alert : true,
    technologies : ["Swift","IOS"],
    description: "It allows you configurate connect to the Sure-fi Device to send out selled units",
  },
  {
    title: "Profuturo Purchases Website",
    url: "https://profuturo.guerjon.com/login",
    type: "website",
    image: "profuturo-square.png",
    technologies : ["PHP","Javascript","Laravel"],
    description: "It allows to multiple users place orders of supplies for the company for internal use.",
  },  
]

/*function showAlert(){
  alert("This code is private i can't show you, call me and i'll tell you what is about ;).")
}*/

const Portfolio = () => {
  return(  
    <Grid fluid={true}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} style={{padding:0}}>
          <PortfolioItem item={portfolio_items[0]} key={portfolio_items[0].url}/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} style={{padding:0}}>
          <PortfolioItem item={portfolio_items[1]} key={portfolio_items[1].url}/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} style={{padding:0}}>
          <PortfolioItem item={portfolio_items[3]} key={portfolio_items[3].url}/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} style={{padding:0}}>
          <PortfolioItem item={portfolio_items[2]} key={portfolio_items[2].url}/>
        </Col>
      </Row>
    </Grid>
  )
}

const PortfolioItem = params => {
  const {title,url,image} = params.item  
  const img_ulr = "images/" + image
  
  return(
      <a href={url} tarjet="_blank">
        <div className="portfolio-item vertical-normal-margin horizontal-normal-margin">
          <Row>
            <Col xs={12} sm={12} md={6} lg={12}>
              <div className="vertical-align-and-space-around">
                <div className="title-description-container">
                  <h4>
                    {title}
                  </h4>
                </div>
                <div className="description-container">
                  <div className="description">
                    
                  </div>
                </div>     
              </div>      
            </Col>
            <Col xs={12} sm={12} md={6} lg={12}>
                <div className="flex-align">
                  <div className="image-container">
                    <Image src={img_ulr} alt="images/photo_no_available" responsive rounded/>
                  </div>
                </div>
            </Col>
          </Row>
        </div>
      </a>
    
  )
}
/*
const Technology = props => {
  const name = props.name

  return(
    <div className="technology-item">
      <h6>
        {name}
      </h6>
    </div>
  )
}
*/

const renderBoolean = boolean => {
  return (
    <div>
      {boolean}
    </div>
  )
}

const renderNumber = number => {
  return (
    <div className="number-container">
      {number.toString()},
    </div>
  )
}

const renderString = string =>{
  return (
    <div className="string-container">
        "{string}",
    </div>
  )
}

const renderJsonItem = (element,key,identation) => {
  
  const flexDirection = (typeof element[key] === "string" || typeof element[key] === "number") ?  "row" : "column" // if my child is just a string i don't need any identation
  
  return (
    <div style={{display:"flex",flexDirection:flexDirection,marginLeft:5,color:"white"}}>  
      <div style={{marginRight:3}}> 
        {key} : 
      </div> 
      <div> 
        {processElement(element[key])}
      </div>

    </div>
  )
}

const renderArray = (element) => {
  return(
    <div>
      <p>
        [
      </p>
        <div className="array-container">
          {element.map(x => processElement(x))}
        </div>
      <p>
        ],
      </p>
    </div>
  )
}

const processElement = element => {
  const type = typeof element
  
  switch(type){
    case "undefined":
      return null;
    case "object": //json
      if(Array.isArray(element)){
        return renderArray(element)  
      }else{
        let result = []
        for(let key in element){
          if(element.hasOwnProperty(key)){
            if(typeof key === "string"){
              result.push(renderJsonItem(element,key,false))
            }
          }
        }        
        return (
          <div style={{color:"white",flex:1}}>
            <div>
              {open_bracket}
            </div>
            <div className="json-container">
              {result}
            </div>
            <div>
              {close_bracket},
            </div>
          </div>
        );
      }
    case "boolean":
      if(element)
        return renderBoolean("true")
      else 
        return renderBoolean("false")

    case "number":
      return renderNumber(element)

    case "string":
    return renderString(element)  
    
    default:
    return ""
  }
}
/*
const ArrayType = params => {
  return (
    <div className="flex-container ">
      <div style={{marginLeft:10}}>
        {processElement(params.elements)}
      </div>
    </div>
  )
}
*/
/*
const JsonItem = params => {
  const {value} = params
  return (  
    <div className={"flex-container flex-row"}>
      <ArrayType elements={value} key={value.name}/>
    </div>
  )
}
*/
/*
const Sign = params => {
  return (
    <div style={{color:"red",marginLeft:10}}>
      {params.sign}
    </div>
  )
}*/ 
/*
const VarDeclaration = params => {
  const {type,name,sign} = params
  return (
    <div className="flex-container flex-row">
      <div className="let">
        {type}
      </div>
      <div style={{color:"white"}}>
        {name}
      </div>
      <div>
        <Sign sign={sign}/>
      </div>
    </div>
  )
}*/

class App extends Component {


  componentDidMount(){
    console.log("mames")
    this.fetchDictionaryApy()
  }


  async fetchDictionaryApy(){
    let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.table(response.data)
      
  }

  render() {
    return (
      <div>
        <Particles 
                params={{
                  particles: {
                    line_linked: {
                      shadow: {
                        enable: true,
                        color: "#3CA9D1",
                        blur: 5
                      }
                    }
                  }
                }}
                style={{
                  width: 100,
                  height:100,
                  zIndex:1
                }}
        >
        </Particles>
        <div className="App" style={{zIndex:2}}>       
          <div className="app-container" style={{zIndex:3}}>  
            <Grid fluid={true}>
              <Row >
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="picture-container">
                    <div >
                      <hr />
                      <h3>
                        Hi! I'm Jonathan Guerrero. 
                      </h3>
                      <a href="mailto:guerjon@gmail.com">
                        <h6>
                          Lets Talk. 
                        </h6>
                      </a> 
                    </div>
                    <div className=" vertical-normal-margin align-items">
                      <div className="me-image-container">
                        <Image className="my-image" src="images/me.jpg" alt="images/photo_no_available" rounded responsive/>
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center","flexDirection":"column"}}>
                      <a href={resume}>
                        <div className="resume-button box-shadow">
                          <div>
                            <h5>   
                              Download resume
                            </h5>
                          </div>
                          <div>
                            <Glyphicon glyph="glyphicon glyphicon-download"/>
                          </div>
                        </div>
                        
                      </a>
                      <div className="flex-row-align">
                        <div style={{width:40,marginTop:20,marginRight:20}}>
                          <a href="https://www.linkedin.com/in/jonathan-guerrero-4b60a4b4/" tarjet="_blank">
                            <Image src="images/linkedin.png" responsive/>
                          </a>
                        </div>
                        <div style={{width:50,marginTop:20}}>
                          <a href="https://github.com/guerjon" tarjet="_blank">
                            <Image src="images/github.png" responsive/>
                          </a>
                        </div>
                      </div>
                    </div> 
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <div style={{flex:1,padding:20}}>
                    <div className="portfolio-container">
                      <div className="flex-row-align">
                        <h3 style={{marginRight:5}}>
                          Portfolio
                        </h3>
                        <Image src="images/porfolio.png" width="30"/>
                      </div>
                      <Portfolio />
                      <hr />
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
       </div>
      </div>
    );
  }
}

export default App;


/*
                <Col xs={12} sm={12} md={12} lg={4}>
                  <div style={{flex:1,padding:20}}>
                    <div className="panel">
                      <div className="flex-container flex-row">
                        <VarDeclaration type="let" name="software_developer" sign="="/>
                      </div>
                      <JsonItem value={software_developer} /> 
                    </div>
                  </div>
                </Col> 

*/


/*
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
                <div className="technologies-container vertical-normal-margin">
                  {
                    technologies.map(x => <Technology name={x} key={x.name}/>)
                  }
                </div>   
            </Col>
          </Row>


*/