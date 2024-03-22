import Image from "next/image";

import Navbar from "../components/header/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col overflow-hidden">
        <section
          id="top"
          className="py-5 lg:py-5 lg:pt-16 mx-2 lg:mx-20 flex flex-col   bg-white overflow-hidden"
        >
          <div className="relative max-h-[50vh] flex flex-wrap justify-center">
            <div className="lg:w-1/2 mt-16 md:mt-24 flex flex-col  items-center z-10">
              <h1 className=" text-3xl md:text-5xl max-w-[500px] px-3 bg-white">
                <span className="text-primary">Discover</span> Hidden{" "}
                <span className="text-secondary">Gems</span> and Local{" "}
                <span className="text-tertiary">Secrets </span> in The Gambia
                with Your Own Personal Guide
              </h1>
              <span className="mt-5 text-4xl md:text-6xl font-bangers">
                {" "}
                <span className="text-primary">Lam</span>
                <span className="text-secondary">in Be</span>
                <span className="text-tertiary">yai</span>
              </span>
            </div>

            <Image
              className="lg:w-1/2 me-auto max-h-[50vh] lg:max-h-[70vh] object-cover object-bottom "
              src={"/hero-4.jpg"}
              width={720}
              height={690}
              alt="Photo of a gambian shop at the market"
              priority
            />
          </div>
        </section>
        <div className="relative h-[300px] lg:h-[200px] bg-white py-5 mx-2 lg:py-20 lg:mx-20 overflow-visible">
          <div className="absolute lg:top-[-120px] end-1/2 translate-x-1/2 w-screen md:w-[99vw] flex gap-3 py-5 px-5 overflow-x-scroll mostly-customized-scrollbar ">
            <div className="min-w-[250px] overflow-hidden rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-1.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
                priority
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-2.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden  -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-3.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
                priority
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-4.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
                priority
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-5.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
                priority
              />
            </div>
            <div className="min-w-[250px] overflow-hidden -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-6.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-7.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-8.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/carousel-1.jpg"}
                width={500}
                height={200}
                alt="tours in the gambia"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/pexels-ruben-verla-11153531.jpg"}
                width={500}
                height={250}
                alt="tours in the gambia"
              />
            </div>
          </div>
        </div>
        <section
          id="about"
          className=" flex flex-col justify-around  items-center py-5  bg-white mx-2 lg:mx-20"
        >
          <div className="w-full flex flex-col-reverse justify-around lg:flex-row">
            <Image
              className="mx-auto"
              src={"/lamin.jpg"}
              width={400}
              height={200}
              alt="photo of lamin beyai the tour guide"
              priority
            />
            <div className="flex flex-col justify-center items-center mx-auto">
              <h2 className="text-4xl font-bold">About Me</h2>
              <p className="max-w-[700px] mt-5">
                I am a tour guide based in The Gambia. I offer tours around the
                country and Senegal. I have been in the business for over 10
                years and I have a lot of experience. I have a lot of knowledge
                about the country and I can show you all the best places to
                visit. I am very friendly and I will make sure you have a great
                time. I can also help you with accommodation and transportation.
              </p>
            </div>
          </div>
        </section>
        <section
          id="experiences"
          className="flex flex-col  items-center py-5    bg-white mx-2 lg:mx-20"
        >
          <h2 className="text-4xl font-bold my-5">Experiences</h2>
          <div className="flex flex-wrap gap-0 align-middle justify-center items-center my-4 md:my-0">
            <div className="w-full lg:w-1/2 rounded-lg">
              <h3 className="font-bold text-2xl text-center">
                Lazy day outings in The Gambia
              </h3>
              <p className="max-w-[700px] mx-auto">
                Welcome to The Gambia, my home, where hospitality is second
                nature. As a local host, I invite you to join me for a unique
                experience that goes beyond the typical tourist attractions.
                Take advantage of our complimentary lazy day outings, where
                you`ll have the chance to mingle with villagers and immerse
                yourself in our rich culture. Sit around the campfire with us,
                share stories, and enjoy the rhythm of jembe drumming sessions
                right on the beach, led by our talented local boys. It`s all
                about genuine connections and authentic experiences here in The
                Gambia, and I can`t wait to share them with you.
              </p>
            </div>
            <div className=" w-full lg:w-1/2">
              <Image
                className="w-full object-cover"
                src={"/lazy-day.jpg"}
                width={900}
                height={200}
                alt="lazy day in the gambia"
              />
            </div>
          </div>
          <div className="flex flex-wrap-reverse gap-0 align-middle justify-center items-center my-4 md:my-0">
            <div className="  w-full lg:w-1/2">
              <Image
                className=""
                src={"/fathala.jpg"}
                width={900}
                height={200}
                alt="fatalla park in senegal"
              />
            </div>
            <div className=" w-full lg:w-1/2 rounded-lg">
              <h3 className="font-bold text-2xl text-center">Fathala Park</h3>
              <p className="max-w-[700px] mx-auto">
                Welcome to Fathala Park, an exotic paradise nestled in the heart
                of Senegal! Immerse yourself in the thrill of lion encounters
                and marvel at the diverse array of majestic wildlife roaming
                freely in their natural habitat. From the awe-inspiring lions to
                the enchanting sights of various animals at their very best,
                Fathala Park promises an unforgettable safari adventure. Prepare
                to be captivated by the beauty of nature and create timeless
                memories in this remarkable sanctuary.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-0 align-middle justify-around items-center my-4 md:my-0">
            <div className=" w-full lg:w-1/2 rounded-lg">
              <h3 className="font-bold text-2xl text-center">Lamin Lodge</h3>
              <p className="max-w-[700px] mx-auto">
                Welcome to Lamin Lodge, a gem known for its unparalleled river
                boat trips and authentic Gambian river adventures. Our focus is
                on providing visitors with a genuine local experience, rich in
                cultural insights and captivating tales. Join us as we navigate
                the serene river, soaking in the vibrant sights and sounds of
                Gambian life along the way. A highlight of our trips is a visit
                to the neighboring village of Daranka, a journey that takes
                about two hours by boat, guided by experienced captains who know
                the river like the back of their hand. In Daranka, you`ll
                encounter the remarkable Elephant Tree, a local treasure. This
                unique treehouse, adorned with an elephant sculpture atop its
                branches, offers a fascinating glimpse into village life. Step
                inside and discover the warmth of Gambian hospitality as more
                than 10 people can gather within its rustic confines, sharing
                stories and experiences unlike any other.
              </p>
            </div>
            <div className=" w-full lg:w-1/2">
              <Image
                className="h-full w-full object-cover"
                src={"/lamin-lodge-collection.jpg"}
                width={900}
                height={200}
                alt="lamin lodge in the gambia"
              />
            </div>
          </div>
        </section>
        <section
          id="artsAndCrafts"
          className="flex flex-col  items-center py-5   bg-white mx-2 lg:mx-20"
        >
          <h2 className="text-4xl font-bold my-5">Arts and Crafts</h2>
          <div className="flex flex-wrap gap-0 align-middle justify-center items-center my-4 md:my-0">
            <p className="max-w-[700px] mx-auto">
              I also create and sell arts and crafts. I make a variety of items
              and I can also make custom orders. I make jewelry, bags, and other
              items. I use a variety of materials including beads, leather, and
              fabric. I also make traditional African items such as masks and
              statues. I can also make items for special occasions such as
              weddings and birthdays. I can make items for both
            </p>
          </div>
        </section>
        <div className="relative h-[220px] bg-white lg:py-32 mx-2 md:mx-20 overflow-visible">
          <div className="absolute lg:top-0 end-1/2 translate-x-1/2 w-full  flex gap-3 py-5 px-5 overflow-x-scroll mostly-customized-scrollbar ">
            <div className="min-w-[250px] overflow-hidden rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-1.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-2.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden  -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-3.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-4.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-5.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-6.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden rotate-2 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-7.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
            <div className="min-w-[250px] overflow-hidden -rotate-1 rounded-xl">
              <Image
                className="aspect-square object-cover"
                src={"/arts-and-crafts-9.jpg"}
                width={500}
                height={200}
                alt="arts and crafts"
              />
            </div>
          </div>
        </div>
        <section
          id="contact"
          className="flex flex-col  items-center py-32   bg-white mx-2 lg:mx-20 "
        >
          <h2 className="text-4xl font-bold ">Contact Me</h2>
          <div className="flex flex-col justify-center items-center">
            <p className="max-w-[700px]">
              If you would like to book a tour or if you have any questions,
              please feel free to contact me. I am always happy to help. You can
              reach me by phone, text or email. I look forward to hearing from
              you!
            </p>
            <ul className="mt-5">
              <li>
                <span className="font-bangers text-xl">Phone:</span>
                <a
                  href="tel:+220
                3314244"
                  className="m-2"
                >
                  +220 3314244
                </a>
              </li>
              <li>
                <span className="font-bangers text-xl">Email:</span>{" "}
                <a href="mailto:beyailamin897@gmail.com" className="m-2">
                  beyailamin897@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
