import BASE_API_URL from "./BaseUrl";

const MemoList = (props) => {
    const memories = props.memos;
    return ( 
        <div className="home">
            {memories.map( (memory) => (
              console.log(`${BASE_API_URL}`+'/uploads/'+`${memory.picture_url}`),
              <div className='memo' key={memory.id} style={{display: "flex"}}>
                <div class="list">
                <h2>{memory.title}</h2>
                <p>{memory.content}</p>
                </div>
                <div >
                <img src={`${BASE_API_URL}`+'/uploads/'+`${memory.picture_url}`} height= '250'  width='300'/>
                </div>
              </div>
            ))}
        </div>
     );
}
 
export default MemoList;