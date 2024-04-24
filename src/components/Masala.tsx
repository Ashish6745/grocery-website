import React from 'react'
import CommonCard from './CommonCard'

function Masala() {
  return (
    <div>
    <h3 className="text-teal-600 font-bold text-3xl ml-8">Masala</h3>
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      
      <CommonCard
        name="Everst Aloo Dum Masala"
        price="39"
        url="data:image/jpeg;base64,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"
        quantity="250gm"
        unit="1"
        status="In Stock"
        discount="16%"
      />
      <CommonCard
        name="Goldie Amchur"
        price="22"
        url="data:image/jpeg;base64,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"
        quantity="50g"
        unit="1"
        status="In Stock"
        discount="8%"
      />
      <CommonCard
        name="Dry Ginger"
        price="20"
        url="data:image/jpeg;base64,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"
        quantity="200g"
        unit="1"
        status="Out of Stock"
        discount="10%"
      />
    </section>
  </div>
  )
}

export default Masala
