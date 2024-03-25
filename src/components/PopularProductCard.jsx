import React from 'react'
import { star } from '../assets/icons'
import { products } from '../constants'

const PopularProductCard = ({ imgURL, name, price, rating }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img
                src={imgURL} alt={name}
                className='w-[280px] h-[280px] hover:scale-110 cursor-pointer transition-transform'
            />
            <div className='flex justify-start mt-8 gap-2.5'>
                <img
                    src={star}
                    alt='rating'
                    width={24} height={24}
                />
                <p className='font-montserrat text-xl text-slate-gray leading-normal '>

                    ({rating})
                </p>
            </div>
            <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <h3 className='mt-2 font-semibold font-montserrat leading-normal text-coral-red'>{price}</h3>
        </div>
    )
}

export default PopularProductCard