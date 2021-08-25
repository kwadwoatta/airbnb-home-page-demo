import Head from "next/head";
import MediumCard from "../components/MediumCard";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import SmallCard from "../components/SmallCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import BottomNavbar from "../components/BottomNavbar";

export default function Home({ exploreNearbyData, liveAnyWhereData }: any) {
  return (
    <div className="">
      <Head>
        <title>NextTail Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HeroImage />

      <main className="max-w-7xl mx-auto px-6 lg:px-16">
        <section className="">
          <h2 className="text-2xl font-bold py-4">Explore Nearby</h2>
          <div className="overflow-x-scroll scrollbar-hide">
            <div className="w-max p-1.5 ml-1 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-6 sm:gap-x-20 lg:gap-x-20 xl:gap-x-20 2xl:gap-x-20 gap-y-4 overflow-x-scroll scrollbar-hide">
              {exploreNearbyData?.map(({ img, distance, location }: any) => (
                <SmallCard
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-7">
          <h2 className="text-2xl font-bold py-4 mb-4">Live Anywhere</h2>
          <div className="p-2 -ml-2 flex gap-x-5 overflow-x-scroll scrollbar-hide">
            {liveAnyWhereData?.map(({ img, title }: any) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
          <LargeCard
            img="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=720"
            title="Try hosting"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Learn more"
          />
        </div>
        <div className="hidden md:inline lg:inline xl:inline 2xl:inline">
          <LargeCard
            img="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"
            title="Try hosting"
            description="Earn extra income and unlock new opportunities by sharing your space."
            buttonText="Learn more"
          />
        </div>
      </main>
      <Footer />
      <BottomNavbar />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonkeeper.com/b/4G1G");
    const exploreNearbyData = await res.json();

    const res2 = await fetch("https://links.papareact.com/zp1");
    const liveAnyWhereData = await res2.json();

    return {
      props: {
        exploreNearbyData,
        liveAnyWhereData,
      },
    };
  } catch (error) {}
}
