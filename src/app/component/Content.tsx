import Image from "next/image";

export default function Content() {
    return (
     <div className="bg-pink-100">

    <h1 className="text-center font-semibold p-2 pt-6 text-4xl font-serif">Harmful Effects Of Junk Food</h1>
     
     <div className="flex justify-between space-x-4 p-4">
    
        <Image
          src="/zinger.avif" 
          alt=""
          width={250}
         height={400}
          className="w-1/3 h-auto"
        />
        <Image
            src="/rollparhta.jpg" 
            alt=""
            width={200}
            height={200}
            className="w-1/3 h-auto"
        />
        <Image
            src="/pizza.jpg" 
            alt=""
            width={200}
            height={200}
            className="w-1/3 h-auto"
        /> 
      </div>
      <div>
        <p className="text-justify p-3 pl-6 pr-6">
Junk food has numerous harmful effects on health when consumed regularly. High in unhealthy fats,
sugars, and salt, junk food contributes to weight gain, obesity, and an increased risk of chronic
diseases such as heart disease, type 2 diabetes, and hypertension. These foods are often
nutrient-poor, offering little to no vitamins, minerals, or fiber, which are essential for the
body’s proper functioning. Additionally, junk food can lead to poor digestion, as it lacks
the nutrients needed for a healthy gut. Over time, frequent consumption of junk food can
impair brain function, leading to mood swings, decreased concentration, and a higher risk
of mental health issues like depression. The addictive nature of junk food, combined with
its lack of nutritional value, makes it difficult to break free from unhealthy eating habits,
ultimately leading to long-term health problems.
</p>
<p className="text-justify p-3 pl-6 pr-6">    
The overconsumption of junk food can also negatively impact the body’s metabolism. High sugar and 
refined carbohydrate content in junk food cause spikes in blood sugar levels, which can lead to insulin
 resistance over time. This disrupts the body's ability to regulate blood sugar effectively, increasing 
 the likelihood of developing type 2 diabetes. Furthermore, the unhealthy fats found in junk food, such 
 as trans fats and saturated fats, can contribute to clogged arteries and raise cholesterol levels, 
 further increasing the risk of cardiovascular diseases, such as heart attacks and strokes. 
 These long-term effects make junk food a significant threat to overall health and well-being.
 </p>
<p className="text-justify p-3 pl-6 pr-6">
In addition to physical health risks, junk food can have a detrimental impact on one's mental and 
emotional state. Studies have shown that diets high in processed foods can affect brain chemistry, 
leading to increased feelings of irritability, anxiety, and depression. The lack of essential nutrients, 
such as omega-3 fatty acids and antioxidants, can impair brain function and hinder the production of
 neurotransmitters like serotonin, which regulate mood. Junk food’s quick energy boost is often followed 
 by a crash, causing fatigue and poor focus. This cycle can create a dependence on unhealthy foods for
  emotional comfort, making it harder to maintain a balanced and healthy diet in the long run.
        </p>
      </div>
      </div>
    );
  }
  
