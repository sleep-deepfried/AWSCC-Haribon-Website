import Image from "next/image"

export default function Member(){
    return(
        <div className="flex flex-col items-center justify-center space-y-4 py-10 px-10">
            <p className="text-4xl text-center font-bold text-amazon-blue">
                Be A Member Now!
            </p>
            <Image src="/images/bonee-member.svg" alt="bonee spreaded wings" width={243} height={243} />
            <p className="text-center text-lg text-amazon-dark">
            Join AWS Cloud Club Haribon and embark on a journey of learning, collaboration, and innovation—where your cloud ambitions turn into reality!
            </p>
            <button className="bg-amazon-blue text-lg py-3.5 px-4 rounded-lg">
                Join Us Now
            </button>
        </div>
    )
}