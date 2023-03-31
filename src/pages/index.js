
import {data} from '../data/data.js'
import Card from '@/Components/Card'
import { useState } from 'react'

export default function Home() {
const [search, setsearch] = useState("")
  return (
    <>
     <p className='font-bold'>Here are the Data</p>
     <input placeholder='Enter your text here'  value={search} onChange={(e)=>{setsearch(e.target.value)}}></input>
     <div className=' place-content-center flex flex-wrap flex-row  gap-4'>
     {data.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((d) => (
               <Card name={d.name} language={d.language} bio={d.bio}/>
              ))}
     </div>
    </>
  )
}



