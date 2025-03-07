import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { CustomCarouselProps } from "@/types";

export default function CloudBuilderCarousel({ items }: CustomCarouselProps) {
    return (
        <div className="w-full overflow-hidden">
            <Carousel
                orientation="vertical"
                className="w-full"
                opts={{
                dragFree: false,
                slidesToScroll: 1,
                loop: false,
                duration: 15
                }}
            >
            <CarouselContent className="w-full h-[400px]">
                {items.map((item, index) => (
                    <CarouselItem key={index} className="w-full">
                    <div className="relative flex justify-center items-center mt-10">
                        <div className="bg-[#2CBA9F] w-3xs h-[307px] px-5 pt-7 rounded-4xl space-y-5">
                        <p className="text-2xl text-[#FCF8B7] font-bold text-center">{item.title}</p>
                        <p className="text-xs text-white text-center">{item.description}</p>
                        </div>
                        <Image src="/images/cloud.svg" alt="cloud" width={280} height={133} className="absolute -bottom-10" />
                    </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
    );
}