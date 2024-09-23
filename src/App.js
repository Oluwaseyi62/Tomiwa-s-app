import { FaLocationDot } from "react-icons/fa6";
import "./App.css";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: "/assets/homepage.jpg", text: "HomePage" },
    { img: "/assets/ambulance-5.avif", text: "We provide ambulance Service" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //   }, 10000); // Change slide every 3000ms (3 seconds)

  //   return () => clearInterval(interval); // Clean up on unmount
  // }, [slides.length]);
  return (
    <main className="relative">
      <header className="z-50 flex flex-col items-center justify-between px-4 py-4 border-2 md:flex-row">
        <div>
          <img src="/assets/logo.svg" width={350} height={65} />
        </div>
        <div className="mt-10 md:mt-0">
          <a href="mailto:Tundexfashmedicallaboratory@gmail.com" className="px-4 py-4 font-bold text-white text-lg bg-[#365877] rounded-md">
            Book An Appointement
          </a>
         
        </div>
      </header>
      <section className="relative w-full h-[700px] bg-bg-home bg-no-repeat bg-cover bg-center">
        <div className="absolute w-screen h-full backdrop-saturate-125 bg-white/30"></div>
        {/* <img
          src="/assets/homepage.jpg"
          className="w-screen h-[500px] object-fill"
        /> */}
        <div className="absolute right-0 flex flex-col items-end justify-end w-1/2 p-10 animate-fade-right animate-duration-2000 backdrop-blur-sm top-20">
          <h1 className="text-[#365877] font-extrabold text-right text-[30px] md:text-[60px]">
            TUNDEXFASH MEDICAL DIAGNOSTIC CENTER
          </h1>
          <p className="text-[#365877] text-base md:text-2xl text-right">
            Provide Fast, Accurate Medical Tests & Result
          </p>
          <a href="mailto:Tundexfashmedicallaboratory@gmail.com" className="md:px-12 px-6 w-[200px] py-4 mt-4 text-center font-bold text-lg text-white bg-[#365877] rounded-md">
            Book a Test
          </a>
        </div>
      </section>
      {/* <div className="relative carousel h-[500px] w-screen">
        <div
          className="slides-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="relative slide" key={index}>
              <img
                  src={slide.img}
                  className="object-cover h-[500px] w-screen backdrop-saturate-50 bg-white/30 bg-blend-hue"
                  alt={`Slide ${index + 1}`}
                />
                <p className="text-[#365877] absolute text-7xl font-extrabold top-0 text-center left-0 right-0">
                  {slide.text}
                </p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute p-4 hover:opacity-50 text-white cursor-pointer top-1/2 left-3 bg-[#365877]"
        >
          &#10094;{" "}
        </button>
        <button
          onClick={prevSlide}
          className="absolute p-4 hover:opacity-50 text-white cursor-pointer top-1/2 right-3 bg-[#365877]"
        >
          &#10095;{" "}
        </button>
      </div> */}
      <section className="items-center px-12 py-5 mb-20">
        <h1 className="mb-3 text-3xl font-bold text-center text-[#365877]">What we do</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-fade-left">
            <h1 className="text-xl font-semibold text-center text-[#365877]">
              DIAGNOSTIC SERVICES
            </h1>
            <p className="text-lg text-center">
              Conduct a wide range of tests, including blood tests, urine tests,
              cultures, and other specimens, to help diagnose medical conditions
              and monitor health.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-fade-left">
            <h1 className="text-xl font-semibold text-center text-[#365877]">
              SPECIALIZED TESTING
            </h1>
            <p className="text-lg text-center">
              Perform advanced and specialized tests, such as genetic testing,
              molecular diagnostics, and pathology analysis, for more precise
              diagnoses and personalized treatment plans.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-fade-left">
            <h1 className="text-xl font-semibold text-center text-[#365877]">
              EMBALMING AND AMBULANCE SERVICES
            </h1>
            <p className="text-lg text-center">
              Provide professional embalming services to prepare deceased
              individuals for viewing, transport, and burial. Offer 24/7
              ambulance services to provide prompt and reliable transportation
              for patients in emergency and non-emergency situations.
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 py-5 mb-20 ">
        <h1 className="mb-3 text-3xl font-bold text-center text-[#365877]">Who We Are</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-jump ">
            <h1 className="text-xl font-semibold text-center text-[#365877]">Our Mission</h1>
            <p className="text-lg text-center">
              To provide comprehensive diagnostic facilities, including laboratory services
              for blood tests, radiology services (ultrasound scan), ECG, and
              other imaging modalities.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-jump ">
            <h1 className="text-xl font-semibold text-center text-[#365877]">Our Vision</h1>
            <p className="text-lg text-center">
              is to be a broad-based global leader in medical diagnosis that
              consistently deliver full spectrum of quality health care services
              and exceptional results.
            </p> 
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-jump">
            <h1 className="text-xl font-semibold text-center text-[#365877]">Our Motto</h1>
            <p className="text-lg text-center">Health, The Pillar Of Life</p>
          </div>
        </div>
      </section>
      <footer className="grid grid-cols-1 px-12 py-12 text-black gap-7 md:grid-cols-3">
        <div className="flex flex-col items-start justify-center px-6 mx-4 space-y-4 text-center">
          <div>
            <img src="/assets/logo.svg" width={350} height={65} />
          </div>
          <h1 className="flex items-center justify-center text-base text-center md:text-lg">
            <FaLocationDot className="mr-2" /> Plot 4 Ishasi road, near Alimotu
            Bus stop, Akute, Ogun State
          </h1>
          <a
            href="mailto:TundeFash@gmail.com"
            className="flex items-center justify-center text-base md:text-lg"
          >
            <IoMail className="mr-2" /> Tundexfashmedicallaboratory@gmail.com
          </a>
          <h1 className="flex items-center justify-center text-base md:text-lg">
            <FaPhoneAlt className="mr-2" /> 09028081361, 08179133731.
          </h1>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-extrabold text-center text-[#365877]">
            We are working on
          </h1>
          <div>
            <h1 className="flex items-center justify-center text-lg">
              Week Days.
            </h1>
            <p className="flex items-center justify-center text-base md:text-lg">
              Mondays - Saturday: 8:00am - 7:00pm
            </p>
          </div>
          <div>
            <h1 className="flex items-center justify-center text-lg">
              Sundays.
            </h1>
            <p className="flex items-center justify-center text-base md:text-lg">
              2:00 pm - 6:00 pm
            </p>
          </div>
          <div>
            <h1 className="flex items-center justify-center text-lg">
              Public Holidays
            </h1>
            <p className="flex items-center justify-center text-base md:text-lg">
              8:00 am - 7:00 pm
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="mb-5 text-2xl font-extrabold text-[#365877] text-center">
            Get Health Tips
          </h1>
          <label className="flex items-center justify-center">
            <input
              placeholder="Enter Your Mail"
              className="px-8 py-3 text-black bg-white rounded-lg outline-none border-2 border-[#365877] invalid:border-red-600"
              type="email"
            />
            <button className="px-6 py-3 ml-2 text-white bg-[#365877] rounded-md">
              Submit
            </button>
          </label>
        </div>
      </footer>
    </main>
  );
}

export default App;
