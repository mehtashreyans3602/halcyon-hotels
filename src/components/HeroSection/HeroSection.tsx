import Image from "next/image";
export default function HeroSection() {
    return <section className="flex px-4 items-center gap-12 container mx-auto">
        <div className="py-10 h-full">

            <h1 className="font-heading mb-6">Explore our Exquisite Hotels:</h1>

            <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg text-left">
                Embark on a Journey of Unparalleled Luxury and Cultural Immersion with Our Exceptional Hotels.
            </p>
            <button className="btn-primary">Get Started</button>
            <div className="flex justify-between mt-12">
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Essential Retreats</p>
                    <p className="md:font-bold font-medium text-lg xl:text-5xl">+200</p>
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Opulent Retreat</p>
                    <p className="md:font-bold font-medium text-lg xl:text-5xl">+50</p>
                </div>
                <div className="flex gap-3 flex-col items-center justify-center">
                    <p className="text-xs lg:text-xl text-center">Executive Suites</p>
                    <p className="md:font-bold font-medium text-lg xl:text-5xl">+15</p>
                </div>
            </div>
        </div>
        <div className='md:grid hidden gap-8 grid-cols-1'>
            <div className="grid grid-cols-2 items-center gap-8">
                <div className='rounded-lg overflow-hidden h-96'>
                    <Image
                        src='/images/hero-4.jpg'
                        alt='hero-1'
                        width={600}
                        height={1000}
                        priority={true}
                        quality={100}
                        className='img scale-animation'
                    />
                </div>
                <div className='grid grid-rows-2 gap-8 h-96'>
                    <div className='rounded-lg overflow-hidden'>
                        <Image
                            src='/images/hero-1.jpg'
                            alt='hero-2'
                            width={300}
                            height={300}
                            className='img scale-animation'
                        />
                    </div>
                    <div className='rounded-lg overflow-hidden'>
                        <Image
                            src='/images/hero-3.jpg'
                            alt='hero-3'
                            width={300}
                            height={300}
                            className='img scale-animation'
                        />
                    </div>

                </div>
            </div>

            <div className='grid grid-cols-3 gap-8 h-44'>
                <div className='rounded-lg overflow-hidden'>
                    <Image
                        src='/images/hero-7.jpg'
                        alt='hero-2'
                        width={300}
                        height={300}
                        className='img scale-animation'
                    />
                </div>
                <div className='rounded-lg overflow-hidden'>
                    <Image
                        src='/images/hero-5.jpg'
                        alt='hero-3'
                        width={300}
                        height={300}
                        className='img scale-animation'
                    />
                </div>
                <div className='rounded-lg overflow-hidden'>
                    <Image
                        src='/images/hero-2.jpg'
                        alt='hero-3'
                        width={300}
                        height={300}
                        className='img scale-animation'
                    />
                </div>
            </div>
        </div>
    </section>
}