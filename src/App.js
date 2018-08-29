import React, { Component } from 'react';
import './App.css';
import { Grid,Row,Col,Image,Glyphicon} from 'react-bootstrap';
import resume from './files//Resume.pdf'

const PROGRAMMING_LANGUAGES = 
[
  "Javascript (Expert)",
  "Java (Proficient)",
  "PHP (Expert)",
  "Swift (Proficient)",
  "Kotlin (Prior Experience)",
  "Haskell (Basic)",
  "C (Prior experience)"
]

const open_bracket = "{"
const close_bracket = "}"

let software_developer = {
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
}

let portafolio = [
  {
    title: "Profuturo Purchases",
    ulr: "http://profuturo.guerjon.com/login",
    type: "website",
    description:"",
    image: "profuturo.png"
  },
  {
    title: "Sure-Fi Manufacturing App",
    url: "github code",
    type: "ios-app",
    description: "other description",
    languages: ["swift"],
    image: "sure-fi-app.png"
  },
  {
    title: "Sure-Fi Android App",
    url: "https://play.google.com/store/apps/details?id=com.surefi&hl=en",
    type: "android-app",
    "languages": ["java","javascript"],
    description: "other description",
    image: "sure-fi-app.png"
  },
  {
    title: "Sure-Fi Website",
    url: "http://sure-fi.com/index.html",
    type: "android-app",
    "languages": ["java","javascript"],
    description: "other description",
    image: "sure-fi-web-site.png"

  }
]

const Portafolio = () => {
  return(
    <div>
      {portafolio.map(x => <PortafolioItem item={x}/>)}
    </div>
  )
}

const PortafolioItem = params => {
  const {title,link,type,icon,image} = params.item
  const img_ulr = "images/" + image

  return(
    <div class="portafolio-item-container">
      <div class="portafolio-item"> 
        <h4>
          {title}
        </h4>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:250}}>
            <Image src={img_ulr} alt="images/photo_no_available" responsive/>
          </div>
        </div>
      </div>
    </div>
  )
}

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
    <div class="string-container">
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

const ArrayType = params => {
  return (
    <div className="flex-container ">
      <div style={{marginLeft:10}}>
        {processElement(params.elements)}
      </div>
    </div>
  )
}

const JsonItem = params => {
  const {value} = params
  return (  
    <div className={"flex-container flex-row"}>
      <ArrayType elements={value}/>
    </div>
  )
}


const Sign = params => {
  return (
    <div style={{color:"red",marginLeft:10}}>
      {params.sign}
    </div>
  )
}

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
}

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App">        
          <div> 
            <Grid fluid={true}>
              <Row >
                <Col xs={12} sm={12} md={12} lg={4}>
                  <div style={{ color:"white",fontFamily:"Courier New"}}>
                    <hr />
                    <h4>
                      The brain works as reactive programming,
                      thoughts are the events and your actions
                      is the result of events execution, so you do what you think.
                    </h4>
                    <h6>
                      Think the better!
                    </h6>
                  </div>
                  <div style={{padding:20}}>
                    <Image src="images/me.jpg" alt="images/photo_no_available" responsive rounded/>
                  </div>
                  <div style={{display:"flex",justifyContent:"center"}}>
                    <a href={resume}>
                      <div className="resume-button">
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
                  </div> 
                </Col>
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
                <Col xs={12} sm={12} md={12} lg={4}>
                  <div className="portafolio-container">
                    <h3>
                      Portafolio
                    </h3>
                  </div>
                  <Portafolio />
                </Col>
              </Row>
            </Grid>
          </div>
       </div>
    );
  }
}

export default App;
