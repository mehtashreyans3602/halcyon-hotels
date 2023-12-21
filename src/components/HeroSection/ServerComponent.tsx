import Image from "next/image";
export const heading1 =( <div>
<h1 className="font-heading mb-6 text-tertiary-light">Explore our Exquisite Hotels:</h1>

<p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg text-left">
    Embark on a Journey of Unparalleled Luxury and Cultural Immersion with Our Exceptional Hotels.
</p>
<button className="btn-primary">Get Started</button>
</div>);

export const section2= (<div className='md:grid hidden gap-8 grid-cols-1'>
<div className="flex flex-row justify-stretch items-center gap-8  w-full">
    <div className='rounded-lg overflow-hidden w-[80%] h-96'>
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
                src='/images/hero-3.jpg'
                alt='hero-2'
                width={300}
                height={300}
                className='img scale-animation'
            />
        </div>
        <div className='rounded-lg overflow-hidden h-44'>
            <Image
                src='/images/hero-1.jpg'
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
</div>);