
import ThreeDots from './Component/Loading/ThreeDots'

function App() {


  return ( 
    <div style={{padding: 40}}>
      {
        loading ? <Post posts={post || []}/> : <ThreeDots typeLoading="ThreeDots"/>
     }
     
    </div>
  );
}

export default App;



