import Link from 'next/link'
import {
    CgWebsite
} from 'react-icons/cg'
import {
    FaHammer, FaHome, FaInfo, FaPenSquare, FaStar, FaUser, FaExternalLinkAlt, FaFileAlt, FaMusic, FaPalette, FaLaptopCode, FaBook
} from 'react-icons/fa'
import {
    MdContactMail
} from 'react-icons/md'
import {
    GrTechnology
} from 'react-icons/gr'



export default function SideNav(props) {
    function RowEl({link, text, icon}) {
        return (
            <Link href={link}>
                <a className='flex gap-x-2 items-center text-primary-700 hover:text-primary-600 hover:underline'>
                    <div className='text-lg'>{icon}</div>
                    <div>{text}</div>
                </a>
            </Link>
        )
    }

    return (
        <div
            className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-y-2 rounded-xl border p-4 bg-primary-200 border-primary-500'
        >
            <RowEl link='/' icon={<FaHome />} text='Home' />
            <RowEl link='/blog' icon={<FaPenSquare />} text='Blog' />
            <RowEl link='/about-me' icon={<FaUser />} text='About Me' />
            <RowEl link='/resources' icon={<FaInfo />} text='Resources' />
            <RowEl link='/contact' icon={<MdContactMail />} text='Contact' />
            <RowEl link='/website' icon={<CgWebsite />} text='Website' />
            <RowEl link='/music' icon={<FaMusic />} text='Music' />
            <RowEl link='/art' icon={<FaPalette />} text='Art' />
            <RowEl link='/ratings' icon={<FaStar />} text='Ratings' />
            <RowEl link='/projects' icon={<FaHammer />} text='Projects' />
            <RowEl link='/tech' icon={<FaLaptopCode />} text='Tech' />
            <RowEl link='/recommendations' icon={<FaBook />} text='Recs' />
            <RowEl link='/links' icon={<FaExternalLinkAlt />} text='Links' />
            <RowEl link='/resume.pdf' icon={<FaFileAlt />} text='CV' />
            
        </div>
    )
}