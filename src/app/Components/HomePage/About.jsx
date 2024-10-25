import Image from "next/image";

const About = () => {
    return (
        <div>
            <h3 className='text-orange-400 text-3xl text-center mt-10 font-bold'>About Us</h3>
            <div className="hero bg-white ">
                <div className="flex flex-col lg:flex-row mt-10">
                    <div className='relative'>
                        <Image className="w-1/2 relative rounded-lg shadow-2xl" alt="person" src='/assets/images/about_us/person.jpg' width={400} height={200}></Image>
                        <Image className=" absolute w-1/3 top-1/2 left-1/3 border-8 border-white rounded-lg shadow-2xl" alt="person" src='/assets/images/about_us/parts.jpg' width={400} height={200}></Image>
                    </div>
                    <div className=''>
                        <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br />in this field</h1>
                        <h2 className="mt-5 ">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </h2>
                        <h2 className="mt-5 ">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                        </h2 >
                        <button className=" mt-5 btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;