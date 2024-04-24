import React from 'react'
import { FaPhone, FaShare } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import User from './User'

function Feedback() {
  return (
    <div>
  <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
   
      <User
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjR1dU4oeXwNVcdOJwSnqewUV1e_ea_GlOA&s"
      name="Ghanshyam"
      msg="Provision ,Diary and household goods"
      />
      <User
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUPD5udKkRYsohmRJ7yPV3invJn24xy6upg&s"
      name="Rohit"
      msg="Amazing service"
      />
       <User
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdS0S9lA024A-IGrY_n4Z1fFlBiCV6FttH9w&s"
      name="Krishna Complex"
      msg="BasharatPur"
      />
      </section>
    </div>
  )
}

export default Feedback
