import React, { useState } from 'react'
import "remixicon/fonts/remixicon.css";
import Main from './Main';
import  Sidebar  from './Sidebar';
import Trendbar from './Trendbar';

const Section01 = () => {
    const [isslide, setslide] = useState(false)
    
  return (<>

  {/* mobile  design */}
  <section className='sm:hidden'>
    <section className='w-full h-[70vh]  text-white justify-center flex flex-col items-center'>


{/* glassmorphism */}

    <div className='flex flex-col items-center justify-start'>


    <div className='w-5/6 h-[60vh] rounded-lg fixed -z-10 backdrop-blur-md bg-black opacity-45 brightness-50'></div>

    <div className='flex px-4  w-4/5  justify-between items-center border-2 rounded-lg border-zinc-600 '>
        <div className=' px-2 py-3 text-lg font-bold'>What`s on Your mind</div>
        <div>
            <span  className='text-2xl hover:text-blue-500 hover:big-2' ><i class="ri-download-2-line"></i> </span>
            <span className='text-2xl ' > <i class="ri-share-box-line"></i> </span>
        </div>
    </div>
        <div className=' w-5/6 h-fit border-zinc-600 border mt-4 bg-zinc-800 relative z-0 rounded-2xl  '>

            <div className='w-full px-3 relative  my-2 rounded-xl  flex  justify-center'>
                <img className='w-full rounded-xl object-cover ' src="./images/ram.jpg"/>
                {/* <div className={`  `}> */}
                <div className={`w-full ${isslide?"block":"hidden"} absolute bottom-0 h-1/3   opacity-55 backdrop-blur-lg brightness-50 bg-black`}></div>
                <div className={`w-full ${isslide?"block":"hidden"} absolute bottom-0 px-2 py-1 rounded-lg text-sm h-1/3 brightness-100 `}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, corporis id. </div>
                {/* </div> */}
            </div>

            <div className='mb-2 flex justify-between items-center text-base font-medium px-2 '> 
                <div className='px-3 py-2 flex gap-3 items-center'>
                <span className="flex w-fit px-1 gap-1 justify-center items-center text-md border-2 border-red-600 bg-red-400  rounded-md">50 <i class=" hover:big-2 ri-heart-3-fill text-red-600"></i></span>
                <button onClick={()=>{if (isslide==false){ setslide(true)} else{setslide(false)}}} className='border-2 px-1 py-1 text-white    active:bg-purple-400 border-purple-600 bg-purple-700 text-sm rounded-md'>Prompt</button>
                </div>

                <button className='bg-blue-600 active:big-1 hover:bg-blue-500 border-2 border-blue-600 px-2 py-1 rounded-md'>Download</button>

            </div>
            
        </div>



    {/* prompt box  */}

        <div>

        </div></div>
    </section>
        <div className=' w-screen fixed bottom-0 flex justify-center ' ><form className='w-11/12 rounded-lg bg-zinc-800 border flex flex-col gap-2'>
            <div className='  flex justify-between gap-4   px-2 py-3  '>
                {/* <span></span> */}
                
                    
                <input className='outline-none text-white bg-transparent rounded-lg w-full ' type="text" placeholder='Enter the Prompt '/>
                {/* <input className='bg-blue-600' type="Submit" vlaue="Create it" /> */}
                <button className='w-8 text-zinc-400 hover:text-white ml-1'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor"><path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path></svg></button>
            </div>

            </form>
        </div>

    </section>

    {/* https://api-inference.huggingface.co/models/ */}
    {/* for laptop view  */}

    <section className='hidden relative bg-cgray w-full sm:flex'>
    <Sidebar/>
    <Main/>
    <Trendbar/>
    </section>



  </>)
}

export default Section01