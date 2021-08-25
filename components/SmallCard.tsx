import Image from "next/image";

function SmallCard({ img, location, distance }: any) {
  return (
    <div className="flex items-center w-[210px] h-[72px] space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-100 transition duration-200 ease-out">
      {/* Left */}
      <div className="relative h-[72px] w-[72px] ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2 className="font-semibold text-base leading-5">{location}</h2>
        <h3 className="font-light text-base leading-5">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
