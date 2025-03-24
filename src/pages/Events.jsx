/* eslint-disable react/prop-types */
import { IoShareSocial } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const upcomingEvents = [
  {
    name: "Code With DCG",
    date: "March 18, 2025",
    venue: "New Delhi",
    details:
      "🚀 Code With DCG – Where Innovation Meets Impact! 🚀Where geeks build, innovators rise, and code shapes the future!Are you ready to push the boundaries of technology.",
    social: "https://code-with-dcg.devfolio.co/",
    image: "/DGC.jpg",
  },
  {
    name: "Code-ए-Manipal",
    date: "March 21 - 22, 2025",
    venue: "Jaipur",
    social: "https://codemanipal.devfolio.co/",
    details:
      "🌟 Code-ए-Manipal: Where Innovation Meets Scarcity of Water 🌟Are you ready to unleash your inner tech wizard, survive on caffeine, and redefine what it means to innovate? ",
    image: "/ab2.jpg",
  },
  {
    name: "Code Nakshatra",
    date: "March 21 - 22, 2025",
    venue: "Greater Noida",
    social: "https://code-nakshatra.devfolio.co/",
    details:
      "Where Innovators Collide and Code Takes Flight🌟Code Nakshatra: Where Ideas Shine and Dreams Soar🌟Get ready to unlock your coding superpowers, fuel up on ideas (and maybe some coffee), and experience a hackathon like never before. Code Nakshatra isn’t just another tech event.",
    image: "/Nakshatra.jpg",
  },
];

const pastEvents = [
  {
    name: "Code Cubicle 3.0",
    date: "May 15-19, 2024",
    venue: "Noida, India",
    details:
      "🌟 Introducing Code Cubicle: Unlocking Collaboration & Innovation, One Cubicle at a Time!🚀 Join us for an unparalleled tech adventure at Code Cubicle, the ultimate hackathon brought to you by Geek Room..",
    social: "https://code-cubicle.devfolio.co/",
    image: "/CC3.0.jpg",
  },
  {
    name: "Code Kshetra 2.0",
    date: "February 21 - 23, 2025",
    venue: "New Delhi",
    social: "https://code-kshetra-2.devfolio.co/",
    details:
      "🌟 Code Kshetra 2.0: Where Innovation Meets Madness🌟Are you ready to unleash your inner tech wizard, survive on caffeine, and redefine what it means to innovate?Code Kshetra isn’t just a hackathon.",
    link: "https://codekshetra2.geekroom.in/",
    image: "/ab7.jpg",
  },
  {
    name: "Code Kshetra 1.0",
    date: "February 05 - 06, 2024",
    venue: "New Delhi",
    social: "https://code-kshetra.devfolio.co/",
    details:
      "🚀 Code Kshetra: Where Geeks Battle with Code & Innovation📌 Welcome to Code Kshetra, a groundbreaking hackathon jointly organised by JIMS Sector-5 Rohini and Geek Room.",
    image: "/CK1.0.jpg",
  },
  {
    name: "TechMinds",
    date: "March 15 - 17, 2025",
    venue: "New Delhi",
    social: "https://techminds.devfolio.co/",
    details:
      "Join TechMinds, an exhilarating hackathon co-organized by Geek Room and the Artificial Intelligence Experience Centre, IITM Janakpuri. This event invites tech enthusiasts and innovators to push the boundaries of creativity and technology. ",
    image: "/TechMinds.jpg",
  },
];

const spotlightEvents = [
  {
    name: "CodeKshetra 2.0",
    image: "/Spotlight/CK2.0.jpeg",
    content:
      "🌟15,000+ Code Warriors! One of India's biggest hackathons—where innovation went wild! 🚀🔥",
  },
  {
    name: "Pears Global",
    image: "/Spotlight/Pears.jpeg",
    content:
      "🌟🌍 A Global Coding Frenzy! 2K+ registrations, 12+ countries—where borders blurred & innovation soared! 🚀🔥",
  },
  {
    name: "CodeCubicle 3.0",
    image: "/Spotlight/CC3.0.jpg",
    content:
      "🚀 Code, Caffeine & Conquered! A hackathon that rocked the MasterCard Office! 💥🔥",
  },
];

//Main function
export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === spotlightEvents.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? spotlightEvents.length - 1 : prev - 1
    );
  };

  return (
    <div className="h-full relative bg-[#121212] md:py-5 overflow-x-hidden">
      {/* Events Page Banner with Animation */}
      <motion.section
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-h-screen w-full md:mb-8 flex flex-col items-center justify-center text-[#F2F2F2] px-4"
      >
        <img
          src="./logo/transparent_geek_room_logo.svg"
          alt="Logo"
          className="w-20 h-20 md:w-42 md:h-42 md:mb-1 mt-[7rem] mb-[5.5rem] md:my-14"
        />
        <h1 className="text-[2.3rem] md:text-[8rem] font-satoshi-bold text-center tracking-tight mb-3 md:mb-4 md:mt-[1rem]">
          EVENTS
        </h1>
        <p className="text-lg md:text-xl font-satoshi text-center mb-[6rem] md:mb-4">
          &apos;&apos;A community dedicated to helping each other get better at
          coding together&apos;&apos;
        </p>
      </motion.section>

      <motion.section
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full"
      >
        <h1 className="text-[2.3rem] md:ml-[6rem] ml-[2rem] md:text-[4rem] font-satoshi-bold text-center tracking-loose mb-3 md:mb-2 md:mt-[7rem] text-[#F2F2F2]">
          SPOTLIGHT 🚀
        </h1>

        <section className="w-full relative flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#121212] md:px-10 md:gap-x-16">
          {/* Left Box (Orange) - Adjusted width */}
          <div className="relative w-[60%] h-[300px] md:w-[25%] md:h-[400px] flex justify-end md:ml-[-19rem]">
            {spotlightEvents.slice(0, currentIndex + 1).map((event, index) => (
              <motion.div
                key={index}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className={`absolute w-[90%] h-[120px] md:h-[100px] flex items-center justify-center 
      text-white font-bold text-lg md:text-2xl rounded-lg 
      shadow-lg p-3 
      ${
        index === 0
          ? "bg-gradient-to-r from-pink-500 to-purple-700"
          : index === 1
          ? "bg-gradient-to-r from-[#B6DD48] to-green-900 text-black"
          : "bg-gradient-to-r from-[#252323] to-gray-500"
      }`}
                style={{ top: index * 80 }}
              >
                {event.name}
              </motion.div>
            ))}
          </div>

          {/* Previous Arrow Button (Moved closer inside screen) */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-2 md:left-10 p-3 rounded-full ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-700"
            } text-[#F15A22] text-xl`}
          >
            <IoArrowBack />
          </button>

          {/* Center Box (Black) */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[85vw] h-[50vh] md:w-[30vw] md:h-[75vh] bg-gray-800 rounded-xl flex items-center justify-center relative"
          >
            <img
              src={spotlightEvents[currentIndex].image}
              className="w-full h-full object-cover rounded-xl transition-all duration-500"
            />
          </motion.div>

          {/* Next Arrow Button for both*/}
          <button
            onClick={handleNext}
            disabled={currentIndex === spotlightEvents.length - 1}
            className={`absolute right-5 md:right-10 p-3 rounded-full ${
              currentIndex === spotlightEvents.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-700"
            } text-[#F15A22] text-xl`}
          >
            <IoArrowForward />
          </button>

          {/* Right Box (Blue) - Positioned below in mobile */}
          <div className="relative w-[90%] md:w-[18%] h-[300px] flex justify-start md:mr-[-19rem] ml-8 md:ml-0 mt-8 md:mt-0">
            {spotlightEvents.slice(0, currentIndex + 1).map((event, index) => (
              <motion.div
                key={index}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className={`absolute w-[90%] h-[120px] md:h-[260px] flex items-center justify-center 
      text-white font-bold text-lg md:text-xl rounded-lg 
      shadow-lg p-3 
      ${
        index === 0
          ? "bg-gradient-to-r from-pink-500 to-purple-700"
          : index === 1
          ? "bg-gradient-to-r from-[#B6DD48] to-green-900 text-black"
          : " bg-gradient-to-r from-[#252323] to-gray-500"
      }`}
                style={{ top: index * 80 }}
              >
                {event.content}
              </motion.div>
            ))}
          </div>
        </section>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-[#F2F2F2] w-full flex flex-col items-center p-5 md:p-10 md:mt-[6rem] mt-[5rem]"
      >
        <h1 className="text-[2.3rem] md:text-[6rem] font-satoshi-bold mb-5 md:mb-10 tracking-tighter text-center">
          UPCOMING EVENTS 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full md:w-[80%]">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Past Events */}
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="min-h-screen w-full text-white flex flex-col items-center p-5 md:p-10 md:mt-[6rem] mt-[7rem]"
      >
        <h1 className="text-[2.3rem] md:text-[6rem] font-satoshi-bold mb-5 md:mb-8 tracking-tighter text-center">
          PAST EVENTS 🌟
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full md:w-[80%]">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

// Event Card Component
function EventCard({ event }) {
  return (
    <div className="bg-[#242424] p-6 rounded-lg flex flex-col gap-3 relative">
      <div className="flex items-center gap-4">
        <div className="h-34 w-34 object-cover bg-gray-300 rounded-full">
          <img
            src={event.image}
            className="h-34 w-34 object-fit rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg md:text-2xl md:py-3 font-semibold text-white">
            {event.name}
          </h2>
          <p className="text-sm md:text-lg text-[#F15A22]">
            {event.date} • {event.venue}
          </p>
        </div>
      </div>
      <p className="text-md pt-3 text-white">{event.details}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <div className="text-white rounded-full">
            <a href={event.link}>
              <IoShareSocial />
            </a>
          </div>
        </div>
        <button
          className="bg-[#F15A22] text-[#121212] px-4 py-2 rounded-lg font-semibold cursor-pointer"
          onClick={() => window.open(event.social, "_blank")}
        >
          <a href={event.social}>View</a>
        </button>
      </div>
    </div>
  );
}
