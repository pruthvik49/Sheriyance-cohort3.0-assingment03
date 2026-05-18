import React from 'react'

import discord from './assets/discord.svg'
import insta from './assets/insta.svg'
import tele from './assets/tele.svg'
import yoo  from './assets/yoo.svg'
const App = () => {
  return (
   <>

  <section className="bg-[url('/src/assets/yo.png')] bg-cover bg-center w-full min-h-screen flex flex-col justify-between relative">
    <nav className=" flex justify-center items-center w-full gap-1 h-20 relative  ">
      <div id="log" className="flex items-center w-[20%] ">
        <img alt="React" className="w-10 h-10" />
      </div>
    <div id="mid" className="   h-full flex justify-between items-end  w-[60%]  gap-2 transition-colors duration-300 ">
    <h1 className='text-white bg-transparent hover:bg-[#241F31] h-full transition-colors duration-300 pt-12 w-[20%] px-10 rounded-b-2xl  '>Vision</h1>
    <h1 className='text-white bg-transparent hover:bg-[#241F31] h-full transition-colors duration-300 pt-12 w-[20%] px-10 rounded-b-2xl  '>Collabration</h1>
    <h1 className='text-white bg-transparent hover:bg-[#241F31] h-full transition-colors duration-300 pt-12 w-[20%] px-10 rounded-b-2xl  '>RoadMap</h1>
    <h1 className='text-white bg-transparent hover:bg-[#241F31] h-full transition-colors duration-300 pt-12 w-[20%] px-10 rounded-b-2xl  '>RoadMap</h1>
    <h1 className='text-white bg-transparent hover:bg-[#241F31] h-full transition-colors duration-300 pt-12 w-[20%] px-10 rounded-b-2xl  '>RoadMap</h1> 
    </div>
  <div id="eend" className="flex gap-10  justify-center  items-center w-[20%]">
    <img src={discord} alt="Discord" className="w-6 h-6" />
    <img src={insta} alt="Instagram" className="w-6 h-6" />
    <img src={tele} alt="Telegram" className="w-6 h-6" />
  </div>

    </nav>
    <div className="midbtn flex items-center justify-center pb-32 flex-col gap-4">
      <img alt="Vite" className="w-16 h-16" />
      
    </div>
    <section>
    <div className="titel flex flex-col items-center justify-center">
      <h1 className='text-[#E3C975] text-4xl font-o '>vission </h1>
      <img src={yoo} alt="Discord Stroke" className="w-[60%] " />
    </div>
    <div className='flex '>
    <p className="text-gray-700 p-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odit iure ipsum officia cupiditate recusandae laborum fugiat velit similique repudiandae. Natus, fugiat aliquid alias iste a aperiam dolore. Perspiciatis dolorum sunt vel, dignissimos commodi consequuntur. Odit nobis beatae soluta earum minus non autem laboriosam veritatis sequi, commodi voluptate quas dolorum excepturi repellat, est veniam exercitationem. Iure, animi? Minus, aut officiis.</p>
    <p className="text-gray-700 p-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestiae molestias quasi nemo minima facilis neque eos error fugit sint, alias hic dicta impedit doloribus odit nesciunt praesentium sapiente. Pariatur rerum cum incidunt dolorem, aliquam iure facere? Laborum assumenda, adipisci corrupti quos itaque earum quibusdam temporibus asperiores, illo minus nemo nesciunt quo aut, quaerat exercitationem?</p>
    </div>
  </section>
  </section>
  
   
   </>
  )
}

export default App
