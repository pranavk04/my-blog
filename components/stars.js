import {
    FaStar, 
    FaStarHalfAlt,
    FaRegStar
} from 'react-icons/fa'

export default function Stars(props) {
    switch (props.starcount) {
        case 0:
            return (
                <div className='flex flex-row text-lg'><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            )
        case 0.5:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStarHalfAlt/> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            )
        case 1:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            )
        case 1.5:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            )
        case 2:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /></div>
            )
        case 2.5:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /> <FaRegStar /></div>
            )
        case 3:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar /></div>
            )
        case 3.5:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <FaRegStar /></div>
            )
        case 4:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar /></div>
            )
        case 4.5:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /></div>
            )
        case 5:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
            )
        default:
            return (
                <div className='flex flex-row text-lg text-yellow-400'><p>Error: No rating to show. Starcount is {props.starcount}</p></div>
            )
    }
}