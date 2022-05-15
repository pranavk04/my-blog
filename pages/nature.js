import db from '../components/firebase/db'
import { collection, getDocs } from 'firebase/firestore'

import Plant from '../components/plant'


export default function nature({ data }) {

    return (
        <div className='space-y-4'>
            <h1 className="text-center text-primary-900 mb-4 font-semibold text-3xl md:text-5xl tracking-tight">Nature</h1>
            <p>Below you'll find pictures I take of my garden or things I find in nature. They're grouped roughly by what they are, although the landscapes category is just pictures of scenery. Click view to expand the box and view the pictures!</p>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4'>
                    {data.map((value) => (
                        <Plant title={value.title} key={value.title} path={value.data}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await getDocs(collection(db, "photos"));

    let data = [];
    res.forEach((doc) => {
        data.push(doc.data());
    })

    return {
        props: { data }
    }
}