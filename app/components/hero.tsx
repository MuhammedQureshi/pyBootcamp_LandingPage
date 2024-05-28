import React from 'react'

function Hero() {
  return (
    <div className='flex-col justify-center bgCstm h-[35rem]'>
        <div className='mt-[4rem]'>
            <h1 className='headline md:text-[55px] text-[30px] text-center justify-center lg:mx-[20rem] mx-2'>Land a python developer role in 6 months</h1>
            <p className='text-center md:mx-20 mt-[2rem]'>
               Master the art of programming & become a professional Python Software Developer <br /> <strong className='font-normal text-[#FF2957]'>without previous coding experience.</strong> 
            </p>
            <div className=' items-center justify-center flex mt-[2rem]'>
                <button className='border py-2 px-4 font-light text-white bg-[#FF2957] rounded-[10px]'>Start your dream career</button>
            </div>
        </div>
        <div className='flex items-center justify-center mt-10'>
        <iframe className='rounded-2xl sm:h-[460px] h-[200px]' width="860" height="460" src="https://www.youtube-nocookie.com/embed/rF57hyUuZIw?si=qpoSsF93Awy2_yqW&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>
    
  )
}

export default Hero