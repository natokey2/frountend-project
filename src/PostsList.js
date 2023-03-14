const PostsList=({Posts})=>{
    return(
        <div className="container">
        {Posts.map((Post)=>(
        <div key={Post.id}>
            <h1>{Post.title}</h1>
            <p>{Post.body}</p>
            
        </div>
        ))}

        <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col">Delete</th>
            
          </tr>
        </thead>
        <tbody>
          
          {Posts.map((Post)=>(
            <tr  key={Post.id}>
        
             <th scope="row">{Post.id}</th>
             <td>{Post.title}</td>
             <td>{Post.body}</td>
             <td> <button type="button" className="btn btn-danger">Delete</button></td>

              
       
        </tr>

        ))}
           
        </tbody>
      </table>
       </div>
    );
}
export default PostsList;