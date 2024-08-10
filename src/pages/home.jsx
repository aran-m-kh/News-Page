import React from 'react'

function Home() {
  return (
    
    <section>
      
      <div className='gap-10 flex flex-row'>
        
        
        <div className='flex flex-col w-2/3'>
          
          <div>
            <img src="src\assets\images\image-web-3-desktop.jpg" alt="image" />
          </div>
          
          <div className='max-w-2/3 mt-5  flex flex-row justify-between'>

            <div className=' w-1/2 mr-10'>
              <h1 className='font-InterExtraBold text-5xl box-content text-wrap'>The Bright Future of Web 3.0?</h1>
            </div>
      
            <div className=' w-1/2 flex flex-col justify-between'>
              <p className='font-InterRegular text-slate-600'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
              <button className=' bg-orange-700 w-48 font-InterBold py-3 px-3 mt-6'>READ MORE</button>
            </div>

          </div>
        
        </div>
      
        <div className='w-1/3 justify-between pb-5  flex flex-col bg-slate-900'>
          <h1 className='font-InterExtraBold text-yellow-600 p-4 text-5xl'>New</h1>
        
          <div>
            <h2 className='text-white font-InterBold pl-4 pr-12'>Hydrogen VS Electric Cars</h2>
            <p className='text-slate-300 pl-4 pr-5 mt-2 font-interThin'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div className='border-slate-400 border h-[1px] w-3/4 ml-8 my-6'></div>
          </div>

          <div>
            <h2 className='text-white font-InterBold pl-4 pr-12'>The Downsides of AI Artistry</h2>
            <p className='text-slate-300 pl-4 pr-5 mt-2 font-interThin'>What are the possible adverse effects of on-demand AI image generation?</p>
            <div className='border-slate-400 border h-[1px] w-3/4 ml-8 my-6'></div>
          </div>

          <div className='pb-4'>
            <h2 className='text-white font-InterBold pl-4 pr-12'>Is VC Funding Drying Up?</h2>
            <p className='text-slate-300 pl-4 pr-5 mt-2 font-interThin'>Private funding by VC firms is down 50% YOY. We take a look at what that means.?</p>
            
          </div>
         
      </div>
      
      </div>
      
      
      
      
      
      
      

      <div className='bg-blue-200 des:col-span-3 des:row-span-1 mob:order-5'>footer</div>
    
    </section>
  )
}

export default Home
