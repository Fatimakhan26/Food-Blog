import React from 'react'
import Image from 'next/image'
import Navbar from '../component/Navbar'

const page = () => {
  return (
    
    <div className='bg-pink-100'>
        <Navbar/>
      <h1 className='font font-semibold text-center text-4xl pt-10'>About Us</h1>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded pt-10"
      alt="hero"
      src={require("../../../public/aboutpic.webp")}

    />
    <div className="text-center lg:w-2/3 w-full">
      
      <p className="mb-8 leading-relaxed text-justify">
      Unhealthy food is often characterized by high levels of sugar, salt, unhealthy fats, and artificial 
      ingredients, while lacking essential nutrients such as vitamins, minerals, and fiber. Common examples
       include fast food, sugary snacks, processed meals, and sodas. While these foods may be convenient and
        satisfying in the short term, regularly consuming them can have serious long-term effects on your
         health, contributing to conditions like obesity, heart disease, diabetes, and digestive issues.
          At our blog, we aim to raise awareness about the impact of unhealthy eating habits and provide
           resources to help you make better, more informed food choices for a healthier lifestyle.
      In addition to the physical health risks, unhealthy food can also affect mental well-being. 
      Diets high in processed foods and low in nutrients can lead to energy crashes, mood swings,
       and even contribute to mental health conditions such as anxiety and depression. The gut-brain
        connection plays a crucial role in mental health, and a poor diet can disrupt the balance of 
        beneficial bacteria in the digestive system, leading to negative effects on mood and cognition. 
        By choosing wholesome, nutrient-dense foods, you can not only improve your physical health but
         also enhance your mental clarity and emotional stability. We encourage our readers to make mindful
          food choices that nourish both the body and the mind.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default page