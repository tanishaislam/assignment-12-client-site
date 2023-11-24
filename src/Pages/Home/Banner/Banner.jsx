
import slide1 from '../../../assets/Glenbrook27_Living2_Meridian__Resampled.jpg'
import slide2 from '../../../assets/Most_Beautiful_Houses_In_The_World_House_M_featured_on_architecture_beast_01.webp'
import slide3 from '../../../assets/maxresdefault.jpg'
import slide4 from '../../../assets/1520218016644.jfif'
import slide5 from '../../../assets/Essential-Interior-Style-Guide-Fresh-Coastal-homes-HERO-1500-x-770__Resampled.jpg'
import slide6 from '../../../assets/Most_Beautiful_Houses_In_The_World_House_M_featured_on_architecture_beast_38.jpg'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1900)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    return (
        <div className='lg:px-1 px-5'>
           <div ref={sliderRef} className="keen-slider">
           <div className="keen-slider__slide number-slide1">
                    <img src={slide2} className='h-[90vh] w-full' alt="" />
                    <div className="absolute flex items-center justify-center text-center left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] h-full">
                    <div className='space-y-5 lg:w-1/2 md:w-1/2 w-full pl-10'>
                    <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-white font-cursive'>Find Your Dream House</h2>
                    <p className='text-white text-lg font-body'> Vitae saepe sapiente iste totam ducimus laboriosam. Ullam accusantium magnam earum expedita nemo perferendis ipsum quasi enim eveniet aut, est nostrum blanditiis?</p>
                    <div className='text-center flex gap-3 items-center justify-center'>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border-none text-white bg-red-600 ">Latest Project</button>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border  text-white border-white">More Details</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src={slide1} className='h-[90vh] w-full' alt="" />
                    <div className="absolute flex items-center justify-center text-center left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] h-full">
                    <div className='space-y-5 lg:w-1/2 md:w-1/2 w-full pl-10'>
                    <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-white font-cursive'>Find Your Dream House</h2>
                    <p className='text-white text-lg font-body'> Vitae saepe sapiente iste totam ducimus laboriosam. Ullam accusantium magnam earum expedita nemo perferendis ipsum quasi enim eveniet aut, est nostrum blanditiis?</p>
                    <div className='text-center flex gap-3 items-center justify-center'>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border-none text-white bg-red-600 ">Latest Project</button>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border  text-white border-white">More Details</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src={slide3} className='h-[90vh] w-full' alt="" />
                    <div className="absolute flex items-center justify-center text-center left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] h-full">
                    <div className='space-y-5 lg:w-1/2 md:w-1/2 w-full pl-10'>
                    <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-white font-cursive'>Find Your Dream House</h2>
                    <p className='text-white text-lg font-body'> Vitae saepe sapiente iste totam ducimus laboriosam. Ullam accusantium magnam earum expedita nemo perferendis ipsum quasi enim eveniet aut, est nostrum blanditiis?</p>
                    <div className='text-center flex gap-3 items-center justify-center'>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border-none text-white bg-red-600 ">Latest Project</button>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border  text-white border-white">More Details</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src={slide4} className='h-[90vh] w-full' alt="" />
                    <div className="absolute flex items-center justify-center text-center left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] h-full">
                    <div className='space-y-5 lg:w-1/2 md:w-1/2 w-full pl-10'>
                    <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-white font-cursive'>Find Your Dream House</h2>
                    <p className='text-white text-lg font-body'> Vitae saepe sapiente iste totam ducimus laboriosam. Ullam accusantium magnam earum expedita nemo perferendis ipsum quasi enim eveniet aut, est nostrum blanditiis?</p>
                    <div className='text-center flex gap-3 items-center justify-center'>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border-none text-white bg-red-600 ">Latest Project</button>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border  text-white border-white">More Details</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img src={slide5} className='h-[90vh] w-full' alt="" />
                    <div className="absolute flex items-center justify-center text-center left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] h-full">
                    <div className='space-y-5 lg:w-1/2 md:w-1/2 w-full pl-10'>
                    <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-white font-cursive'>Find Your Dream House</h2>
                    <p className='text-white text-lg font-body'> Vitae saepe sapiente iste totam ducimus laboriosam. Ullam accusantium magnam earum expedita nemo perferendis ipsum quasi enim eveniet aut, est nostrum blanditiis?</p>
                    <div className='text-center flex gap-3 items-center justify-center'>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border-none text-white bg-red-600 ">Latest Project</button>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border  text-white border-white">More Details</button>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img src={slide6} className='h-[90vh] w-full' alt="" />
                    <div className="absolute flex items-center justify-center text-center left-0 top-0 right-5 bottom-0 bg-gradient-to-r from-[#151515] h-full">
                    <div className='space-y-5 lg:w-1/2 md:w-1/2 w-full pl-10'>
                    <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-white font-cursive'>Find Your Dream House</h2>
                    <p className='text-white text-lg font-body'> Vitae saepe sapiente iste totam ducimus laboriosam. Ullam accusantium magnam earum expedita nemo perferendis ipsum quasi enim eveniet aut, est nostrum blanditiis?</p>
                    <div className='text-center flex gap-3 items-center justify-center'>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border-none text-white bg-red-600 ">Latest Project</button>
                        <button className="lg:py-3 md:py-3 py-2 px-5 rounded-md border  text-white border-white">More Details</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;