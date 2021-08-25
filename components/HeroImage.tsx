import Image from "next/image";

function HeroImage() {
  return (
    <div className="relative h-[450px] sm:h-[90vh] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center text-lg">
        <p>Not sure where to go? Perfect.</p>
        <button className="my-3 rounded-full bg-white py-3.5 px-8 sm:py-5 sm:px-14 shadow-md hover:shadow-xl active:scale-90 transition duration-150">
          <p className="text-base leading-5 bg-gradient-to-br from-[#6F019C] to-[#C6017E] text-transparent bg-clip-text font-bold">
            I'm flexible
          </p>
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
