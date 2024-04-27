import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [rtype, setRtype] = useState("posts")
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
  const [items,setItem] = useState([])
  const resize =()=>
  {
    setWindowWidth(window.innerWidth)
  }
useEffect(()=>
{
  fetch(`https://jsonplaceholder.typicode.com/${rtype}`)
      .then(response => response.json())
      .then(json => setItem(json))
      window.addEventListener('resize',resize)
},[rtype,WindowWidth])
  return (
    <>
    <div>Window Width : {WindowWidth}</div>
  <div>
    <button onClick={()=>setRtype('posts')}>Posts</button>
    <button onClick={()=>setRtype('users')}>Users</button>
    <button onClick={()=>setRtype('comments')}>Users</button>
  </div>
  <h1>{rtype}</h1>

    {items.map(item=>
  {
    return <pre>{JSON.stringify(item)}</pre>
  })}

    </>
  )
}

export default App
