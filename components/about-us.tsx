import Image from 'next/image';
import CloudBuilderCarouser from "@/components/cloud-builder-carousel";
import { cloudCarouselData } from "@/data/cloud-builder";

export default function AboutUs (){
    return(
        <div>
            <div className='space-y-8 flex flex-col items-center'>
                <p className='text-5xl font-bold text-center mt-20 text-amazon-blue'>
                    Who Are We?
                </p>
                <Image src="/images/who-are-we.svg" alt="who are we" width={378} height={378} />
                <p className='text-amazon-dark text-lg text-center px-11'>
                    At AWS Cloud Club Haribon, every journey begins with a shared passion for learning and growth. Whether you&apos;re exploring AWS for the first time or sharpening your expertise, you&apos;ll find a community ready to inspire and support you.
                </p>
            </div>

            {/* Mission */}
            <div className='flex flex-col items-center space-y-8 py-10 px-11'>
                <p className='text-5xl font-bold text-center text-amazon-blue'>
                    Our Mission
                </p>
                <Image src="/images/bonee-mission.svg" alt="bonee" width={174} height={100} />
                <p className='text-amazon-dark text-lg text-center'>
                    To engage the Haribon Community in cloud practices and careers, fostering a strong foundation for cloud services and promoting widespread participation in the AWS Cloud system. 
                </p>
            </div>

            {/* Vision */}
            <div className='flex flex-col items-center space-y-8 py-4 px-11'>
                <p className='text-5xl font-bold text-center text-amazon-blue'>
                    Our Vision
                </p>
                <Image src="/images/bowee-vision.svg" alt="bonee" width={174} height={174} />
                <p className='text-amazon-dark text-lg text-center'>
                    To advance the presence of Amazon Web Services in Pamantasan ng Lungsod ng Maynila and to empower future student leaders by providing them with comprehensive resources and opportunities within the AWS Cloud environment.                 </p>
            </div>

            {/* Cloud Builder */}
            <div>
                <p className='text-5xl font-bold text-center text-amazon-blue'>
                    Cloud Builder
                </p>
                <p className='text-amazon-dark text-lg text-center'>
                    At AWS Cloud Club Haribon, four dedicated teams turn ideas into experiences, visions into realities, and connections into opportunities.
                </p>
                <CloudBuilderCarouser items={cloudCarouselData} />

            </div>
        </div>
    );
}