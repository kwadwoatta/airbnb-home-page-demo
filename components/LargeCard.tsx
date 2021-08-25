import Image from "next/image";

function LargeCard({ img, title, description, buttonText }: any) {
  return (
    <section className="relative bg-[#484848] rounded-full lg:rounded-2xl">
      {/* Underneath */}
      <div className="relative h-[60vh] sm:h-[90vh] lg:h-[60vh] min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          className="rounded-2xl"
          objectFit="cover"
        />
      </div>
      {/* On Top */}
      <div className="absolute grid grid-rows-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 top-6 sm:py-10">
        <div className="text-center lg:text-left text-white space-y-4 lg:space-y-8  mx-auto items-center sm:px-20 lg:px-20 xl:px-20">
          <p className="text-[30px] lg:text-5xl lg:leading-[52px] xl:text-5xl xl:leading-[52px] leading-9">
            {title}
          </p>
          <p className="text-base lg:text-lg lg:leading-6 xl:text-lg xl:leading-6 font-light leading-5">
            {description}
          </p>
          <button className="py-[9px] px-4 rounded-lg bg-white text-[#222] text-sm">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;
