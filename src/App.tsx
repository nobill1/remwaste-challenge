import { useState } from 'react'
import './App.css'
import { Stepper, Step } from "@material-tailwind/react";

function App() {
  const [activeStep, setActiveStep] = useState(2);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
 
  // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <div className="bg-[#121212] min-h-screen w-full text-white">
        <div className="container mx-auto max-md:px-4">
          <div className="flex flex-col w-full">
              <Stepper
                    lineClassName=""
                    activeLineClassName="bg-green"
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)} placeholder={undefined} className="flex w-full justify-evenly items-stretch pt-4 mb-8 overflow-hidden overflow-x-auto" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <Step onClick={() => setActiveStep(0)} placeholder={undefined} className="flex w-full justify-center items-center" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeStep >= 0 ? "stroke-[#0037C1]" : "stroke-[#2A2A2A]"} size-6 mr-2`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span className={`${activeStep >= 0 ? "text-white" : "text-[#2A2A2A]"} text-nowrap`}>Postcode</span>
                  </Step>
                  <div className={`${activeStep >= 1 ? "bg-[#0037C1]" : "bg-[#2A2A2A]"} w-16 h-px`}></div>
                  <Step onClick={() => setActiveStep(1)} placeholder={undefined} className="flex w-full justify-center items-center" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeStep >= 1 ? "stroke-[#0037C1]" : "stroke-[#2A2A2A]"} size-6 mr-2`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <span className={`${activeStep >= 1 ? "text-white" : "text-[#2A2A2A]"} text-nowrap`}>Waste Type</span>
                  </Step>
                  <div className={`${activeStep >= 2 ? "bg-[#0037C1]" : "bg-[#2A2A2A]"} w-16 h-px`}></div>
                  <Step onClick={() => setActiveStep(2)} placeholder={undefined} className="flex w-full justify-center items-center" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeStep >= 2 ? "stroke-[#0037C1]" : "stroke-[#2A2A2A]"} size-6 mr-2`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <span className={`${activeStep >= 2 ? "text-white" : "text-[#2A2A2A]"} text-nowrap`}>Select Skip</span>
                  </Step>
                  <div className={`${activeStep >= 3 ? "bg-[#0037C1]" : "bg-[#2A2A2A]"} w-16 h-px`}></div>
                  <Step onClick={() => setActiveStep(3)} placeholder={undefined} className="flex w-full justify-center items-center" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeStep >= 3 ? "stroke-[#0037C1]" : "stroke-[#2A2A2A]"} size-6 mr-2`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                    <span className={`${activeStep >= 3 ? "text-white" : "text-[#2A2A2A]"} text-nowrap`}>Permit Check</span>
                  </Step>
                  <div className={`${activeStep >= 4 ? "bg-[#0037C1]" : "bg-[#2A2A2A]"} w-16 h-px`}></div>
                  <Step onClick={() => setActiveStep(4)} placeholder={undefined} className="flex w-full justify-center items-center" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeStep >= 4 ? "stroke-[#0037C1]" : "stroke-[#2A2A2A]"} size-6 mr-2`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span className={`${activeStep >= 4 ? "text-white" : "text-[#2A2A2A]"} text-nowrap`}>Choose Date</span></Step>
                  <div className={`${activeStep >= 5 ? "bg-[#0037C1]" : "bg-[#2A2A2A]"} w-16 h-px`}></div>
                  <Step onClick={() => setActiveStep(5)} placeholder={undefined} className="flex w-full justify-center items-center" onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${activeStep >= 5 ? "stroke-[#0037C1]" : "stroke-[#2A2A2A]"} size-6 mr-2`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                <span className={`${activeStep >= 5 ? "text-white" : "text-[#2A2A2A]"} text-nowrap`}>Payment</span></Step>

              </Stepper>
              <div className={`${activeStep == 0 ? "flex" : "hidden"} flex-col gap-6 w-full lg:min-w-[450px] min-h-[628px] overflow-y-scroll`}>
                  Step 1
              </div>
              <div className={`${activeStep == 1 ? "flex" : "hidden"} flex-col gap-6 w-full lg:min-w-[450px] min-h-[628px] overflow-y-scroll`}>
                  Step 2                                    
              </div>
              <div className={`${activeStep == 2 ? "flex" : "hidden"} flex-col gap-6 w-full lg:min-w-[450px] min-h-[628px] overflow-y-scroll`}>
                  Step 3                                    
              </div>
              <div className={`${activeStep == 3 ? "flex" : "hidden"} flex-col gap-6 w-full lg:min-w-[450px] min-h-[628px] overflow-y-scroll`}>
                  Step 4 
              </div>
              <div className={`${activeStep == 4 ? "flex" : "hidden"} flex-col gap-6 w-full lg:min-w-[450px] min-h-[628px] overflow-y-scroll`}>
                  Step 5
              </div>
              <div className={`${activeStep == 5 ? "flex" : "hidden"} flex-col gap-6 w-full lg:min-w-[450px] min-h-[628px] overflow-y-scroll`}>
                  Step 6
              </div>                                                            
          </div>
        </div>
    </div>
    </>
  )
}

export default App
