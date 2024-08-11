import React from 'react'

function Home() {
  return (
    
    <section>
      
      <div className='gap-10 flex mob:w-screen flex-row mob:flex-col mob:scale-90'>
        
        
        <div className='flex flex-col w-2/3 mob:w-screen items-center mob:mt-4'>
          
          <div className='mob:hidden'>
            <img src="src\assets\images\image-web-3-desktop.jpg" alt="image" />
          </div>

          <div className='des:hidden'>
            <img src="src\assets\images\image-web-3-mobile.jpg" alt="image" />
          </div>
          
          <div className='max-w-2/3 mt-5 flex flex-row mob:flex-col mob:w-screen justify-between'>

            <div className=' w-1/2 mr-10 mob:mr-0 mob:w-screen mob:mb-4'>
              <h1 className='font-InterExtraBold text-5xl box-content text-wrap'>The Bright Future of Web 3.0?</h1>
            </div>
      
            <div className=' w-1/2 mob:w-screen flex flex-col justify-between'>
              <p className='font-InterRegular text-slate-600'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
              <button className=' bg-orange-700 w-48 font-InterBold py-3 px-3 mt-6 hover:bg-lime-600 duration-300'>READ MORE</button>
            </div>

          </div>
        
        </div>
      
        <div className='w-1/3 mob:w-screen justify-between pb-5  flex flex-col bg-slate-900'>
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
      
      
      
      
      
      
      

      <div className='flex des:mt-10 mob:scale-90 mob:mb-5 justify-between mob:flex-col mob:gap-10'>

        <div>
            <div>
              <div className='flex'>
                <img className='h-[140px] w-[110px]' src="src\assets\images\image-retro-pcs.jpg" alt=".." />
                <div className='flex flex-col gap-1'>
                  <h1 className='font-InterBold text-3xl text-orange-600 ml-4'>01</h1>
                  <h1 className='mt-2 font-InterExtraBold ml-4'>Reviving Retro PCs</h1>
                  <p className='font-InterRegular text-sm ml-4 text-slate-700 mt-2'>What happens when old PCs are given modern upgrades?</p>
                </div>
              </div>
            </div>
        </div>

        <div className='ml-5 mob:mx-0'>
            <div>
              <div className='flex gap-1'>
                <img className='h-[140px] w-[110px]' src="src\assets\images\image-top-laptops.jpg" alt=".." />
                <div className='flex flex-col gap-1'>
                  <h1 className='font-InterBold text-3xl text-orange-600 ml-4'>02</h1>
                  <h1 className='mt-2 font-InterExtraBold ml-4'>Top 10 Laptops of 2022</h1>
                  <p className='font-InterRegular text-sm ml-4 text-slate-700 mt-2'>Our best picks for various needs and budgets.</p>
                </div>
              </div>
            </div>
        </div>

        <div className='ml-5 mob:mx-0'>
            <div>
              <div className='flex gap-1'>
                <img className='h-[140px] w-[110px]' src="src\assets\images\image-gaming-growth.jpg" alt=".." />
                <div className='flex flex-col gap-1'>
                  <h1 className='font-InterBold text-3xl text-orange-600 ml-4'>03</h1>
                  <h1 className='mt-2 font-InterExtraBold ml-4'>The Growth of Gaming</h1>
                  <p className='font-InterRegular text-sm ml-4 text-slate-700 mt-2'>How the pandemic has sparked fresh opportunities.</p>
                </div>
              </div>
            </div>
        </div>

      </div>
    
    </section>
  )
}

export default Home
