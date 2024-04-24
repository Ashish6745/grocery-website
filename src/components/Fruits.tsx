import React from 'react'
import CommonCard from './CommonCard'

function Fruits() {
  return (
    <div>
    <h3 className="text-teal-600 font-bold text-3xl ml-8">Fruits</h3>
    <section
      id="Projects"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      
      <CommonCard
        name="Mango"
        price="480"
        url="data:image/jpeg;base64,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"
        quantity="5 Kg"
        unit="1"
        status="In Stock"
        discount="4%"
      />
      <CommonCard
        name="Pomegranate"
        price="690"
        url="data:image/jpeg;base64,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"
        quantity="5 Kg"
        unit="1"
        status="In Stock"
        discount="8%"
      />
      <CommonCard
        name="Kiwi"
        price="670"
        url="data:image/jpeg;base64,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"
        quantity="2Kg"
        unit="1"
        status="Out of Stock"
        discount="17%"
      />
    </section>
  </div>
  )
}

export default Fruits
