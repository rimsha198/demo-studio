import Image from "next/image";
import  background from "@/assest/images/jpg/image01.jpg"





const Hero = () => {
    return(

        <>
           <h1>Plan.<br/>Manage.<br/>Build</h1>
           <div>/</div>
           <h3>Our Differences Is In The Finishing</h3>
           <button>Work</button>
           <Image src= {background} width={"1500"} height={"1000"} alt="hero image" />
        </>
    );
}

export default Hero;