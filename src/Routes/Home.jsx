import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

   const {data}=useGlobalStates()
   console.log(data)
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {data.map((e)=><Card name={e.name} id={e.id} username={e.username}/>)}
        <Card/>
      </div>
      
    </main>
  )
}

export default Home