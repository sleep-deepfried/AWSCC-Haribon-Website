import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { CustomCarouselProps } from "@/types";
import { useMemo } from "react";

export default function CloudBuilderCarousel({ items }: CustomCarouselProps) {
    const carouselItems = useMemo(() => {
        return items.map((item, index) => (
            <CarouselItem key={index} className="w-full">
                <div className="relative flex flex-col justify-center items-center mt-10">
                    <div className="bg-[#2CBA9F] w-3xs h-[307px] px-5 pt-7 rounded-4xl space-y-5">
                        <p className="text-2xl text-[#FCF8B7] font-bold text-center">{item.title}</p>
                        <p className="text-xs text-white text-center">{item.description}</p>
                    </div>
                    <Image 
                        src="/images/cloud.svg" 
                        alt="cloud" 
                        width={280} 
                        height={133} 
                        className="absolute -bottom-10"
                        loading="lazy"
                        priority={false}
                    />
                </div>
            </CarouselItem>
        ));
    }, [items]);

    return (
        <div className="w-full overflow-hidden">
            <Carousel
                orientation="vertical"
                className="w-full"
                opts={{
                    loop: false,
                    dragFree: false,
                }}
            >
                <CarouselContent className="w-full flex flex-col h-[400px]">{carouselItems}</CarouselContent>
            </Carousel>
        </div>
    );
}
