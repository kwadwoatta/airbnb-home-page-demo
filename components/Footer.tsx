function Footer() {
  return (
    <div className="bg-gray-100">
      <div className=" max-w-7xl mx-auto px-10 py-10 mt-10">
        <div className="lg:flex lg:gap-x-16 lg:border-b-[1px] border-[#dddddd]">
          <FooterSection
            title="ABOUT"
            contents={[
              "How Airbnb works",
              "Newsroom",
              "Airbnb 2021",
              "Investors",
              "Airbnb Plus",
              "Airbnb Luxe",
              "HotelTonight",
              "Airbnb for Work",
              "Made possible by Hosts",
              "Careers",
              "Founders' Letter",
            ]}
          />
          <FooterSection
            title="COMMUNITY"
            contents={[
              "Diversity & Belonging",
              "Against Discrimination",
              "Accessibility",
              "Airbnb Associates",
              "Frontline Stays",
              "Guest Referrals",
              "Gift cards",
              "Airbnb.org",
            ]}
          />
          <FooterSection
            title="HOST"
            contents={[
              "Host your home",
              "Host an Online Experience",
              "Host an Experience",
              "Responsible hosting",
              "Resource Center",
              "Community Center",
            ]}
          />
          <FooterSection
            title="SUPPORT"
            contents={[
              "Our COVID-19 Response",
              "Help Center",
              "Cancellation options",
              "Neighborhood Support",
              "Trust & Safety",
            ]}
          />
        </div>
        <div className=" mt-3 flex xl:block">
          <p className="text-sm text-[#222] cursor-text font-light text-left lg:text-center ">
            © 2021 Airbnb, Inc.
          </p>
          <div className="flex justify-start lg:justify-center text-sm text-[#222] gap-x-4 cursor-pointer font-light sm:ml-3">
            <p className="hover:underline">Privacy</p>
            <p className=""> • </p>
            <p className="hover:underline">Terms</p>
            <p className=""> • </p>
            <p className="hover:underline">Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

function FooterSection({ title, contents }: any) {
  return (
    <section className="pb-6 mb-6 border-b-[1px] border-[#dddddd] lg:border-b-0 xl:border-b-0 2xl:border-b-0">
      <p className="text-[12px] text-[#222] font-semibold">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-y-1">
        {contents.map((content: string) => (
          <p
            key={content}
            className="text-sm leading-[18px] text-[#222] cursor-pointer font-light mt-3 hover:underline"
          >
            {content}
          </p>
        ))}
      </div>
    </section>
  );
}
