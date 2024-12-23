import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-pink-100'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-semibold text-gray-900">
      Stop Junk Food
        <br className="hidden lg:inline-block" />
        Addiction
      </h1>
      <p className="mb-8 leading-relaxed text-justify">
      Unhealthy food typically refers to items that are high in calories, fats, sugars, and salt,
       but low in essential nutrients like vitamins, minerals, and fiber. These foods often include
        processed snacks, sugary drinks, fast food, and items rich in artificial additives. Consuming
         unhealthy food on a regular basis can lead to various health issues, including obesity, heart disease,
          diabetes, and high blood pressure. These foods provide quick energy but lack the nutritional
           value needed for long-term health. A diet dominated by unhealthy food can disrupt metabolism,
            weaken the immune system, and increase the risk of chronic illnesses,
       making it important to limit their intake in favor of more balanced, nutrient-rich options.
       </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/hero2.jpg")}
        width={760}
        height={400}
      />
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero