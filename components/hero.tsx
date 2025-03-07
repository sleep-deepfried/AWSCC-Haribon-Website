import Image from "next/image";

export default function Hero() {
    return (
    <div className="h-screen bg-gradient-to-b from-[#003366] via-[#20B2AA] to-[#269AAB]">
        <div className="relative w-full">
            <div className="absolute right-5 -top-5">
                <Image src="/images/lamp.svg" alt="lamp" width={70} height={50} />
            </div>
            <div className="absolute right-20 -top-10">
                <Image src="/images/lamp.svg" alt="lamp" width={70} height={50} />
            </div>
            <div className="absolute right-35">
                <Image src="/images/lamp.svg" alt="lamp" width={70} height={50} />
            </div>
        </div>

        <div className="flex flex-col justify-center items-start text-center h-full pb-40 space-y-5">
            <p className="font-bold text-4xl px-11">
            It&apos;s always day one
            </p>

            <p className="text-xl px-8">
            Each day is a chance to build, create, and achieve. At AWS Cloud Club Haribon, your first step starts today and every day after.
            </p>
        </div>

        <div className="absolute -bottom-10 z-10">
            <Image src="/images/bonee-hero.svg" alt="hero" width={543} height={543} />
        </div>
        

        <div className="absolute bottom-0 z-20">
            <Image src="/images/walls.svg" alt="hero" width={543} height={543} />
        </div>
        
    </div>
    );
}