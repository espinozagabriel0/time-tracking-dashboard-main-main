import './index.css'
import Card from './components/Card'
import Report from './components/Report'
import data from '../data.json'
import {useState } from 'react'

function App() {
  const [timeframe, setTimeFrame] = useState("daily")

  return (
    <div className='w-full max-w-[80rem] grid grid-cols-1 lg:grid-cols-4'>
      <Report
        setTimeFrame={setTimeFrame}
      />
    
      <section className='col-span-4 lg:col-span-3 p-4'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3'>
          {
            data.map((activity, index) => 
              <Card
                key={index}
                activity={activity}
                timeframe={timeframe}
              />
            )
          }
        </div>

      </section>
    </div>
  )
}

export default App
