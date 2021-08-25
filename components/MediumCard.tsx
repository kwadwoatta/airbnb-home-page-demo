import Image from "next/image";

function MediumCard({ img, title }: any) {
  return (
    <div className="rounded-xl cursor-pointer hover:scale-105 transition duration-200 ease-out">
      {/* Top */}
      <div className="relative h-[240px] w-[240px] lg:h-[35vh] lg:w-[33.5vh]">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* Bottom */}
      <h3 className="pt-2 text-lg text-[#222222]">{title}</h3>
    </div>
  );
}

export default MediumCard;
