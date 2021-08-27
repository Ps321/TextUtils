import React,{useState} from "react";

export default function Textform() {
    
    const [Txt, setTxt] = useState("");
   const input1=(event)=>
    {
      setTxt(event.target.value);
      
    }
    const toupper=()=>
    {
let a=Txt;
      setTxt(a.toUpperCase());
    
    }
    const tolower=()=>
    {
let a=Txt;
      setTxt(a.toLowerCase());
    
    }
    const clr1=()=>
    {
      setTxt("");
    
    }
    const cpy1=()=>
    {
      
      navigator.clipboard.writeText(Txt);
      
    }
    const res=()=>
    {
      let a=Txt.split(/[ ]+/);
      setTxt(a.join(" "));
    }
    const capitalize=()=>
    {
      res();
      let w=Txt.split(" ");
      let a=[];
      w.forEach(element => {
      a.push(element[0].toUpperCase() + element.slice(1,element.length));
        setTxt(a.join(" "));
      });
    }
    return (
        
    <div className="container">
        <h1 style={{textAlign:'center',color:'white',fontWeight:'800'}}>Text Utilities</h1>
        
        <h3 style={{color:'white',fontWeight:'300'}}>Enter your text here</h3>
      <div className="mb-3">
       
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5" value={Txt} onChange={input1}
        ></textarea>

      </div>
      <button className="pushable" style={{background:"black",margin:"1%"}} onClick={toupper}>
  <span className="front" style={{background:"#2e2e2e"}}>
    Convert to Uppercase
  </span>
</button>

<button className="pushable" style={{background:"black",margin:"1%"}} onClick={tolower}>
  <span className="front" style={{background:"#2e2e2e"}}>
    Convert to Lowercase
  </span>
</button>
<button className="pushable" style={{background:"black",margin:"1%"}} onClick={cpy1}>
  <span className="front" style={{background:"#2e2e2e"}}>
    Copy
  </span>
</button>
<button className="pushable" style={{background:"black",margin:"1%"}} onClick={res}>
  <span className="front" style={{background:"#2e2e2e"}}>
    Remove Extra Spaces
  </span>
</button>
<button className="pushable" style={{background:"black",margin:"1%"}} onClick={capitalize}>
  <span className="front" style={{background:"#2e2e2e"}}>
    Capitalize
  </span>
</button>
<button className="pushable" style={{background:"black",margin:"1%"}} onClick={clr1}>
  <span className="front" style={{background:"#2e2e2e"}}>
    Clear
  </span>
</button>

      <div className="container my-5" style={{color:'white'}}>
        <h1>Facts:-</h1>
        <h3 ><span style={{color:"Yellow"}}>{Txt.length===0?0:(Txt[Txt.length-1].match(/\s/)?Txt.split(" ").length-1:Txt.split(" ").length)} </span> Words  & <span style={{color:"Yellow"}}>{Txt.slice("").length} </span> Letters </h3>
      <h3>It will take <span style={{color:"Yellow"}}> {(Txt.length===0?0:Txt.slice("").length)*0.04} </span>Seconds to read</h3>
      </div>
      <div className="container my-5" style={{color:'white'}}>
        <h1>Preview:-</h1>
             <h3>{Txt===""?"Enter something above to preview":Txt }</h3>
      </div>
      
    </div>
  );
}