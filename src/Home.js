const Home=()=>{

const clickMe=(e)=>{
    console.log(e.target);
}
const clickWithParams=(firsname)=>{
    console.log('first name is'+ firsname);

}
const clickWithTwoParams=(firsname,secondName)=>{
    console.log('first name is'+ firsname+ 'and second name is '+secondName);

}




    return(
<div className="container">
    <h1>home page </h1><br/>
    <button type="button" onClick={clickMe} className ="btn btn-primary">Primary</button><br/>

    <button type="button" onClick={()=>clickWithParams('natiq')} className ="btn btn-danger">danger</button>

    <button type="button" onClick={()=>clickWithTwoParams('natiq','hawramy')} className ="btn btn-info">info</button>

</div>
    );
}
export default Home;