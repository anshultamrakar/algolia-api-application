import InfiniteScroll from "react-infinite-scroll-component";
import TableData from "./TableData ";
import {useState , useEffect , useRef  } from "react"
import RandomData from "./RandomData";
import { Routes,Route} from "react-router-dom"


function App() {
  const renders = useRef(0);
  const timerId = useRef();
  const API_URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&page='
  const [oldPost, setoldPost] = useState([])
  let [posts, setPosts] = useState([])
  let [count , setCount] = useState(0)



  const fetchData = async () => {
    try{
     const response = await fetch(`${API_URL}${count}`)
     const data = await response.json()
     oldPost.push(data.hits)
     setPosts(oldPost.flat())
     setCount(count + 1);
    }catch(err){
      console.log(err)
    }
  }


// timerId.current = setInterval(() => {fetchData()},5000)


  useEffect(()=> {
    setInterval(() => {fetchData()},5000)
  
  },[])


  return (
    <div className="App">
       <InfiniteScroll
      dataLength={posts.length} 
      next={fetchData}
      hasMore={true}
      loader={<center>...</center>}> 
      <Routes>
      <Route path = "/" element = {<TableData posts = {posts}/>}/>
      <Route path = "row" element = {<RandomData />}/>
      </Routes> 
     </InfiniteScroll>  
    </div>
  );
}


export default App;
