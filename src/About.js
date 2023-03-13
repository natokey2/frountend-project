import {useState}from "react"

const About= ()=>{
  

  const [firstname,setFirstname]= useState('natiq');
  const [Secondname,setSecondname]= useState('hawramy');
  const [age,setAge]= useState(40);

const changeName=()=>{

    setFirstname('tariq');
   setSecondname('ayad');
   setAge(37);
}

    return(

<div className="container">
<h1>About page</h1> 
<h1>{firstname}</h1> <br/>
<h1>{Secondname}</h1> <br/>
<h1>{age}</h1> <br/>

<button onClick={changeName}type="button" className ="btn btn-primary">Primary</button><br/>

</div>


    );
}
export default About;