import React from "react";

function App() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-[#D5E1EF]">
      <div className="bg-white h-[499px] max-w-[320px] rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col p-3 box-border">
          {/* Blue Card */}
          <div className="relative overflow-hidden bg-[#3685ff] rounded-2xl h-[288px] flex justify-center items-center">
            {/* Qr Code */}
            <img
              src="/src/assets/QR.png"
              alt="QR-Code"
              className="relative z-10 w-[160px]"
            />

            {/* Circle bg */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#93beff] rounded-full opacity-20"></div>
            {/* Circle bg */}
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#83b4ff] rounded-full opacity-20"></div>
          </div>

          <div className="flex flex-col items-center pt-[24px] space-y-2.5 px-4">
            <h2 className="font-bold text-[22px] text-center text-[#1F314F]">
              Improve your front-end skills by building projects
            </h2>
            <p className="text-center text-[#8e99aa]">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
