import Image from 'next/image';

export default function AboutUs (){
    return(
        <div>
            <div className='space-y-8'>
                <p className='text-5xl font-bold text-center mt-20 text-amazon-blue'>
                    Who Are We?
                </p>
                <Image src="/images/who-are-we.svg" alt="who are we" width={378} height={378} />
                <p className='text-amazon-dark text-lg text-center px-11'>
                At AWS Cloud Club Haribon, every journey begins with a shared passion for learning and growth. Whether you&apos;re exploring AWS for the first time or sharpening your expertise, you&apos;ll find a community ready to inspire and support you.
                </p>
            </div>
        </div>
    );
}