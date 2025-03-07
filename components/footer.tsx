import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="bg-footer">
            <div className="py-5 px-5 flex flex-col items-center justify-center text-center space-y-5">
                <div className="flex items-center space-x-2">
                    <Image src="/images/seal.svg" alt="seal" width={83} height={83} />
                    <div>
                        <p className="text-xl font-bold">
                            AWS Cloud Club Haribon
                        </p>
                        <p className="text-xs">
                            Pamantasan ng Lungsod ng Maynila
                        </p>
                    </div>
                </div>
                
                <p className="text-lg">
                    Connect with us on social media and join the AWS Cloud Club Haribon community!
                </p>

                <div className="flex space-x-5">
                    <Link href="#" target="_blank"><Image src="/images/facebook.svg" alt="facebook" width={37} height={37} /></Link>
                    <Link href="#" target="_blank"><Image src="/images/instagram.svg" alt="instagram" width={37} height={37} /></Link>
                    <Link href="#" target="_blank"><Image src="/images/linkedin.svg" alt="linkedin" width={37} height={37} /></Link>
                </div>

            </div>
            
            <div className="bg-[#236A7B] w-full px-9 py-5 text-center text-xs">
                <p>
                    Copyright © 2024 by AWS Cloud Club Haribon, All rights reserved.
                </p>
            </div>

        </div>
    );
}