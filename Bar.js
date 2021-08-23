import react from 'react'
import './Bar.css'
const Bar=(props)=>
{
    return(
        <div className="container mainContainer">{props.children}
        <h4 id="ones">Ones</h4>
          <h4 id="tens">Tens</h4>
        <hr className="slant-line-Vertical " />
        <hr className="slant-line-horizontal" />
        <h1 className="plusSymbol">+</h1>
        </div>
    )
}
export default Bar