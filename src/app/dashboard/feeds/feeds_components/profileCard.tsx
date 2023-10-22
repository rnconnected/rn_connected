import "src/app/dashboard/feeds/feeds_components/profileCard.css";


export const dynamic = 'force-dynamic';

export default async function ProfileCard() {

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center px-8 pt-8 custom">
                <div className="intro">
                    <div className="intro_upper">
                        <div className="intro_dp">
                            {/* <Image src={"/RNlogo/logo1.png"} height={50} width={50} alt="hey" /> */}
                            <div className="intro_dpImg"></div>
                        </div>

                        <div className="intro_name">Damilare </div>
                        <div className="intro_title">Email address</div>
                    </div>
                    <div className="intro_txt">
                        I am a registered nurse for over 10 years. I earned my RN certification at University of America more...
                    </div>
                </div>
            </div>
        </>
    );
}
