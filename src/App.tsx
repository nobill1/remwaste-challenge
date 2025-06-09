import { useState, useEffect } from "react";
import "./App.css";
import { Stepper, Step, Progress } from "@material-tailwind/react";

const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json'
  }
}

function App() {
  const [activeStep, setActiveStep] = useState(2);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  
  const [skipList, setSkipList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedSkip, setSelectedSkip] = useState(true);

  const progress = Math.max(Math.round((activeStep / 3) * 100), 10);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(API_URL, API_OPTIONS);
      const data = await response.json()
      setSkipList(data)
      console.log(data)
    } catch (error) {
      console.error(`Error fetching data: ${error}`)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
      <div className="bg-[#121212] min-h-screen w-full text-white">
        <div className="container mx-auto max-md:px-4">
          <div className="flex justify-center w-full">
            <div className="flex flex-col gap-4 lg:gap-0 p-4 md:p-6 w-full lg:w-[848/594]">
              <div className="flex">
                <div className="hidden lg:flex flex-col border-r-[1px] border-[#2A2A2A] w-full md:max-w-[250px]">
                  <Step
                    onClick={() => setActiveStep(2)}
                    placeholder={undefined}                    
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className={`${activeStep == 0 ? "border-l-4 border-l-[#0037C1]" : ""} flex gap-1 px-3 pb-4 rounded-none border-b-[1px] border-b-[#2A2A2A] cursor-pointer border-solid`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${activeStep >= 0 ? "stroke-[#0037C1]" : "stroke-white/60"} size-6 mr-2`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span
                      className={`${activeStep >= 0 ? "text-white" : "text-white/60"} text-nowrap`}
                    >
                      Postcode
                    </span>
                  </Step>
                  <Step
                  onClick={() => setActiveStep(2)}
                  placeholder={undefined}                    
                  onResize={undefined}
                  onResizeCapture={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                    className={`${activeStep == 1 ? "border-l-4 border-l-[#0037C1]" : ""} flex gap-1 px-3 rounded-none border-b-[1px] border-b-[#2A2A2A] cursor-pointer border-solid py-4 mt-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${activeStep >= 1 ? "stroke-[#0037C1]" : "stroke-white/60"} size-6 mr-2`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                    <span
                      className={`${activeStep >= 1 ? "text-white" : "text-white/60"} text-nowrap`}
                    >
                      Waste Type
                    </span>
                  </Step>
                  <Step
                    onClick={() => setActiveStep(2)}
                    placeholder={undefined}                    
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className={`${activeStep == 2 ? "border-l-4 border-l-[#0037C1]" : ""} flex gap-1 px-3 rounded-none border-b-[1px] border-b-[#2A2A2A] cursor-pointer border-solid py-4 mt-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${activeStep >= 2 ? "stroke-[#0037C1]" : "stroke-white/60"} size-6 mr-2`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    <span
                      className={`${activeStep >= 2 ? "text-white" : "text-white/60"} text-nowrap`}
                    >
                      Select Skip
                    </span>
                  </Step>
                  <Step
                    onClick={() => setActiveStep(2)}
                    placeholder={undefined}                    
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className={`${activeStep == 3 ? "border-l-4 border-l-[#0037C1]" : ""} flex cursor-not-allowed gap-1 px-3 rounded-none py-4 border-b-[1px] border-b-[#2A2A2A] mt-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${activeStep >= 3 ? "stroke-[#0037C1]" : "stroke-white/60"} size-6 mr-2`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                    <span
                      className={`${activeStep >= 3 ? "text-white" : "text-white/60"} text-nowrap`}
                    >
                      Permit Check
                    </span>
                  </Step>
                  <Step
                    onClick={() => setActiveStep(2)}
                    placeholder={undefined}                    
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className={`${activeStep == 4 ? "border-l-4 border-l-[#0037C1]" : ""} flex cursor-not-allowed gap-1 px-3 rounded-none py-4 border-b-[1px] border-b-[#2A2A2A] mt-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${activeStep >= 4 ? "stroke-[#0037C1]" : "stroke-white/60"} size-6 mr-2`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <span
                      className={`${activeStep >= 4 ? "text-white" : "text-white/60"} text-nowrap`}
                    >
                      Choose Date
                    </span>
                  </Step>
                  <Step
                    onClick={() => setActiveStep(2)}
                    placeholder={undefined}                    
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                    className={`${activeStep == 5 ? "border-l-4 border-l-[#0037C1]" : ""} flex cursor-not-allowed gap-1 px-3 rounded-none py-4 mt-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`${activeStep >= 5 ? "stroke-[#0037C1]" : "stroke-white/60"} size-6 mr-2`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>
                    <span
                      className={`${activeStep >= 5 ? "text-white" : "text-white/60"} text-nowrap`}
                    >
                      Payment
                    </span>
                  </Step>
                </div>
                <div className="flex flex-col gap-5 md:pl-6 w-full">
                  <Stepper
                    lineClassName="bg-green/50"
                    activeLineClassName="bg-green"
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                    placeholder={undefined}
                    className="lg:hidden"
                  >
                    <Step
                      onClick={() => setActiveStep(0)}
                      placeholder={undefined}
                      className={`${activeStep >= 0 ? "border-[#0037C1]" : "border-white/60"} border-[1px] h-[24px] w-[24px] flex justify-center items-center cursor-pointer`}
                    >
                      <span className={`${activeStep >= 0 ? "text-[#0037C1]" : "text-white"}`}>1</span>                      
                    </Step>
                    <Step
                      onClick={() => setActiveStep(1)}
                      placeholder={undefined}
                      className={`${activeStep >= 1 ? "border-[#0037C1]" : "border-white/60"} border-[1px] h-[24px] w-[24px] flex justify-center items-center cursor-pointer`}
                    >
                      <span className={`${activeStep >= 1 ? "text-[#0037C1]" : "text-white"}`}>2</span>                      
                    </Step>
                    <Step
                      onClick={() => setActiveStep(2)}
                      placeholder={undefined}
                      className={`${activeStep >= 2 ? "border-[#0037C1]" : "border-white/60"} border-[1px] h-[24px] w-[24px] flex justify-center items-center cursor-pointer`}
                    >
                      <span className={`${activeStep >= 2 ? "text-[#0037C1]" : "text-white"}`}>3</span>                      
                    </Step>
                    <Step
                      onClick={() => setActiveStep(2)}
                      placeholder={undefined}
                      className={`${activeStep >= 3 ? "border-[#0037C1]" : "border-white/60"} border-[1px] h-[24px] w-[24px] flex justify-center items-center cursor-not-allowed`}
                    >
                      <span className={`${activeStep >= 3 ? "text-[#0037C1]" : "text-white"}`}>4</span>                      
                    </Step>
                    <Step
                      onClick={() => setActiveStep(2)}
                      placeholder={undefined}
                      className={`${activeStep >= 4 ? "border-[#0037C1]" : "border-white/60"} border-[1px] h-[24px] w-[24px] flex justify-center items-center cursor-not-allowed`}
                    >
                      <span className={`${activeStep >= 4 ? "text-[#0037C1]" : "text-white"}`}>5</span>                      
                    </Step>
                    <Step
                      onClick={() => setActiveStep(2)}
                      placeholder={undefined}
                      className={`${activeStep >= 5 ? "border-[#0037C1]" : "border-white/60"} border-[1px] h-[24px] w-[24px] flex justify-center items-center cursor-not-allowed`}
                    >
                      <span className={`${activeStep >= 5 ? "text-[#0037C1]" : "text-white"}`}>6</span>                      
                    </Step>
                  </Stepper>
                  <div
                    className={`${activeStep == 0 ? "flex" : "hidden"} flex-col w-full min-h-screen`}
                  >
                    Step 1
                  </div>
                  <div
                    className={`${activeStep == 1 ? "flex" : "hidden"} flex-col w-full min-h-screen`}
                  >
                    Step 2
                  </div>
                  <div
                    className={`${activeStep == 2 ? "flex" : "hidden"} flex-col mb-4 w-full min-h-screen`}
                  >
                    <h2 className="text-2xl font-bold text-center mb-4">
                      Choose Your Skip Size
                    </h2>
                    <p className="text-gray-400 text-center mb-8">
                      Select the skip size that best suits your needs
                    </p>
                    {isLoading ? <p className="text-white">Loading...</p> : skipList ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">                      
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                            alt="4 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            4 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          4 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £211
                            </span>
                          </div>
                        </div>
                        <button className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] false">
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg"
                            alt="5 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            5 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          5 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £241
                            </span>
                          </div>
                        </div>
                        <button className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] false">
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg"
                            alt="6 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            6 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          6 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £264
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg"
                            alt="8 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            8 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2"></div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          8 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £295
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg"
                            alt="10 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            10 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2">
                            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span className="text-xs font-medium text-yellow-500">
                                Not Allowed On The Road
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          10 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £356
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg"
                            alt="12 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            12 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2">
                            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span className="text-xs font-medium text-yellow-500">
                                Not Allowed On The Road
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          12 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £390
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg"
                            alt="14 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            14 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2">
                            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span className="text-xs font-medium text-yellow-500">
                                Not Allowed On The Road
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          14 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £434
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg"
                            alt="16 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            16 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2">
                            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span className="text-xs font-medium text-yellow-500">
                                Not Allowed On The Road
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          16 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          7 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £510
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg"
                            alt="20 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            20 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2">
                            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span className="text-xs font-medium text-yellow-500">
                                Not Allowed On The Road
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          20 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £802
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#2A2A2A] hover:border-[#0037C1]/50 bg-[#1C1C1C] text-white cursor-pointer">
                        <div className="relative">
                          <img
                            src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg"
                            alt="40 Yard Skip"
                            className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                          />
                          <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                            40 Yards
                          </div>
                          <div className="absolute bottom-3 left-2 z-20 space-y-2">
                            <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                              >
                                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span className="text-xs font-medium text-yellow-500">
                                Not Allowed On The Road
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                          40 Yard Skip
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 md:mb-6">
                          14 day hire period
                        </p>
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                              £877
                            </span>
                          </div>
                        </div>
                        <button
                          className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
                        bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1]
                        false"
                        >
                          <span>Select This Skip</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-arrow-right w-4 h-4"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>) : "No Skip available"}                    
                  </div>
                  <div
                    className={`${activeStep == 3 ? "flex" : "hidden"} flex-col w-full min-h-screen`}
                  >
                    Step 4
                  </div>
                  <div
                    className={`${activeStep == 4 ? "flex" : "hidden"} flex-col w-full min-h-screen`}
                  >
                    Step 5
                  </div>
                  <div
                    className={`${activeStep == 5 ? "flex" : "hidden"} flex-col w-full min-h-screen`}
                  >
                    Step 6
                  </div>
                </div>
              </div>
              <div className="w-full border-t-[1px] border-t-[#2A2A2A] hidden lg:flex flex-col">
                <Progress
                  placeholder={undefined}
                  value={progress}
                  size="sm"
                  color="blue"
                  className="mb-5 w-full -translate-y-[3px] bg-transparent rounded-none"
                />
                <div className="flex justify-between px-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-[15px] text-grey">
                      Step {activeStep + 1} of 4
                    </p>
                    <p className="small-text font-medium">item information</p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="flex justify-center items-center px-[1rem] py-[0.6875rem] rounded-[2.5rem] font-medium text-[#0037C1] border-[#0037C1] border-2"
                      onClick={handlePrev}
                      disabled={isFirstStep}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                      </svg>
                    </button>
                    <button
                      className={`${isLastStep ? "hidden" : "flex"} justify-center items-center px-[1rem] py-[0.6875rem] rounded-[2.5rem] font-medium text-white bg-gradient-to-b from-blue to-[#0037C1]`}
                      onClick={handleNext}
                      disabled={isLastStep}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 right-0 left-0 z-20 flex bg-[#121212] gap-4 p-4 w-full lg:hidden">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-1">
                <p className="text-[15px] text-grey">
                  Step {activeStep + 1} of 4
                </p>
                <p className="small-text font-medium">item information</p>
              </div>
              <div className="flex gap-4">
                <button
                  className="flex justify-center items-center px-[1rem] py-[0.6875rem] rounded-[2.5rem] font-medium text-[#0037C1] border-[#0037C1] border-2"
                  onClick={handlePrev}
                  disabled={isFirstStep}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
                <button
                  className={`${isLastStep ? "hidden" : "flex"} justify-center items-center px-[1rem] py-[0.6875rem] rounded-[2.5rem] font-medium text-white bg-gradient-to-b from-blue to-[#0037C1]`}
                  onClick={handleNext}
                  disabled={isLastStep}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
