import React from "react";
import Stars from "./stars";
import Image from 'next/image'
export default function RatingTile(props) {
    return (
        <div className="rounded-xl block p-4 my-5">
            <div className='flex flex-row'>
                <h1 className='flex-1 text-lg md:text-lg mb-2 font-semibold text-primary-700'>{props.title}</h1>
                <Stars starcount={props.starcount} />
            </div>

           <p>{props.excerpt}</p>
           <div className="max-w-sm">
           </div>
        </div>
    )
}