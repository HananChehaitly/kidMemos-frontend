const MemoList = (props) => {
    const memories = props.memos;
    return ( 
        <div className="home">
            {memories.map( (memory) => (
              <div className='memo' key={memory.id} style={{display: "flex"}}>
                <div class="list">
                <h2>{memory.title}</h2>
                <p>{memory.content}</p>
                </div>
                <div >
                <img src='http://localhost:3000/uploads/1639605902627.jpg' height= '250'  width='300'/>
                </div>
              </div>
            ))}
        </div>
     );
}
 
export default MemoList;