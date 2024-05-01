import { Typography } from '@material-tailwind/react'
import React from 'react'
export const Hero_bot = () => {
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
    <div>

     {/* img */}
     <div>
     <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Sara Lamalo
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            20 July 2022
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          Growth
        </Typography>
      </figcaption>
    </figure>
     </div>
     {/* text */}
    </div>
     <div className='w-[40%]'>
      <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsam. Illo eaque qui odit error sequi enim dolores ea cum ipsum totam, necessitatibus sapiente voluptate dicta maiores incidunt voluptas culpa dignissimos quasi nemo maxime officiis saepe adipisci aliquid soluta. In vel ipsa expedita quisquam quas voluptas, exercitationem iusto porro corporis quis necessitatibus eius optio quidem odit molestias tempora assumenda consequuntur atque, odio voluptatibus quia, eligendi temporibus culpa vero. Ex dolor reprehenderit repudiandae voluptates quidem obcaecati similique ab sit. Commodi laboriosam eius debitis ducimus rem incidunt quam laudantium id dolores, aspernatur dolor neque. Vel voluptatum dolorum illum delectus! Aut, autem odio.
      </Typography>
     </div>
    </div>
  )
}
