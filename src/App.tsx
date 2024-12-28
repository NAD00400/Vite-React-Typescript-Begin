import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Count } from './component/count'
  // type people={
  //   name:string,
  //   email:string 
  //   age:number
  // }
  // type employee= people &{
  //   jobTitle:string,
  //   degree:string ,
  // }
  interface people{
    name:string,
    email:string 
    age:number
  }
  interface relationShip{
    sonName:string,
    wifeName:string,
  }
  enum Degree {
    daihoc='daihoc',
    caodang="caodang",
    caohoc='caohoc',
    thacsi='thacsi',
  }
  interface employee extends people ,relationShip{
    jobTitle:string,
    degree:Degree ,
  }
  
function App() {
  const [count, setCount] = useState<number>(0)
  const sum = (a: number, b: number): string => String(a + b);
  const [people,setPeople] =useState<people>()
  const Employee :employee ={
    name:"anh 2 ",
    email:"anh2@gmail.com" ,
    age:14,
    jobTitle:"lap trinh vien ",
    degree:Degree.daihoc,
    sonName:"steven",
    wifeName:"Aney",
  }
  // const Employee2: typeof Employee ={
  //   name:"steven 2"
  // }
  useEffect(()=>{
    setPeople(
      {
        name:"test",
        email:'test@gmail.com',
        age:14
      }
    )
    console.log(Employee);
  },[])
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count ={count} setCount={setCount} sum={sum}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
