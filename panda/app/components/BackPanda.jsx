import Image from 'next/image'
export default function BackPanda() {
  return(  
  <div className="w-full h-full relative">
 <Image 
        src="/backpanda.png" 
        alt="Background Panda"
        objectFit="cover"
        // Correct syntax for width and height
        width={1900} // These are just placeholder values
        height={475}
      />  </div>
)}