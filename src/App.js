import { FaLocationDot } from "react-icons/fa6";
import "./App.css";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  return (
    <main>
      <header className="flex items-center justify-between px-4 py-4 border-2 shadow-black/40">
        <div>
          <h1 className="text-lg font-extrabold">
            Tundexfash Medical Diagnostic Services
          </h1>
        </div>
        <div>
          <button className="px-4 py-2 font-bold text-white bg-blue-700 rounded-md">
            Book An Appointement
          </button>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center w-full h-screen bg-no-repeat bg-cover bg-bg-home backdrop-blur-xl">
        <div>
          <h1 className="font-extrabold text-center text-blue-600 text-7xl">
            TundexFash Medical Diagnostic Services
          </h1>
        </div>
      </section>
      <section className="items-center px-12 py-5 mb-20">
        <h1 className="mb-3 text-3xl font-bold text-center">What we do</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-rotate-x shadow-black">
            <h1 className="text-lg font-semibold text-center">
              DIAGNOSTIC SERVICES
            </h1>
            <p className="text-center">
              Comprehensive diagnostic facilities, including laboratory services
              for blood tests, radiology services (ultrasound scan), ECG, and
              other imaging modalities.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-rotate-x shadow-black">
            <h1 className="text-lg font-semibold text-center">
              Personal Services
            </h1>
            <p className="text-center">
              Comprehensive diagnostic facilities, including laboratory services
              for blood tests, radiology services (ultrasound scan), ECG, and
              other imaging modalities.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-rotate-x shadow-black">
            <h1 className="text-lg font-semibold text-center">Treatment</h1>
            <p className="text-center">
              Comprehensive diagnostic facilities, including laboratory services
              for blood tests, radiology services (ultrasound scan), ECG, and
              other imaging modalities.
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 py-5 mb-20 ">
        <h1 className="mb-3 text-3xl font-bold text-center">Who We Are</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-jump shadow-black">
            <h1 className="text-lg font-semibold text-center">Our Mission</h1>
            <p className="text-center">
              Comprehensive diagnostic facilities, including laboratory services
              for blood tests, radiology services (ultrasound scan), ECG, and
              other imaging modalities.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-jump shadow-black">
            <h1 className="text-lg font-semibold text-center">Our Vision</h1>
            <p className="text-center">
              is to be a broad-based global leader in medical diagnosis that
              consistently deliver full spectrum of quality health care services
              and exceptional results.
            </p>
          </div>
          <div className="px-4 border-2 rounded-md shadow-lg py-7 hover:animate-jump shadow-black">
            <h1 className="text-lg font-semibold text-center">Our Goals</h1>
            <p className="text-center">
              is to be a distinctively exceptional medical diagnostic
              institution guided by commitment to excellence, given with highest
              value, combine with quality of presence and tradition of caring.
            </p>
          </div>
        </div>
      </section>
      <footer className="grid grid-cols-1 px-12 py-12 text-white bg-black gap-7 md:grid-cols-3">
        <div className="flex flex-col items-start justify-center px-6 mx-4 space-y-4 text-center">
          <h1>TundexFash Logo</h1>
          <h1 className="flex items-center justify-center text-center">
            <FaLocationDot className="mr-2" /> Plot 2b Ishasi road, near Animotu
            Bus stop, Akute, Ogun State
          </h1>
          <a
            href="mailto:TundeFash@gmail.com"
            className="flex items-center justify-center"
          >
            <IoMail className="mr-2" /> TundeFash@gmail.com
          </a>
          <h1 className="flex items-center justify-center">
            <FaPhoneAlt className="mr-2" /> 08024586185
          </h1>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-extrabold text-center">
            We are working on
          </h1>
          <div>
            <h1 className="flex items-center justify-center text-lg">
              Week Days.
            </h1>
            <p className="flex items-center justify-center tex-base">
              Mondays - Fridays: 8:00am - 6:00pm
            </p>
          </div>
          <div>
            <h1 className="flex items-center justify-center text-lg">
              Weekends.
            </h1>
            <p className="flex items-center justify-center text-base">
             9:00 am - 6:00 pm
            </p>
          </div>
          <div>
            <h1 className="flex items-center justify-center text-lg">
              Public Holidays
            </h1>
            <p className="flex items-center justify-center text-base">
             9:00 am - 6:00 pm
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="mb-5 text-2xl font-extrabold text-center">
            Get Health Tips
          </h1>
          <label>
            <input
              placeholder="Enter Your Mail"
              className="px-8 py-3 rounded-lg outline-none bg-slate-500 invalid:border-red-600"
              type="email"
            />
            <button className="px-6 py-3 ml-2 bg-blue-700 rounded-md">
              Submit
            </button>
          </label>
        </div>
      </footer>
    </main>
  );
}

export default App;
