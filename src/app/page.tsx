import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Content from "./component/Content";
import Comments from "./component/Comment";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Content/>
  
   </div>
  );
}
