
import Image from 'next/image'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";


export default function ServicesCard({ service }) {
    const { title, price, img,_id } = service
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <Image className='h-60 pt-5' height={240} width={350} src={img} alt={title}></Image>
            </figure>
            <div className="card-body ">
                <h2 className="card-title ">Title : {title}</h2>

                <div className="card-actions justify-between items-center">
                    <p className=''>Price : <span className='font-bold text-orange-400'>{price} $</span></p>
                    <Link href={`/servicesdata/${_id}`}><button className="btn btn-primary"> View Details <FaArrowRight /></button></Link>
                </div>
            </div>
        </div>
    )
}
