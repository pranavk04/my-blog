import { getSortedRatings } from '../../lib/ratings'
import RatingTile from '../../components/rating-tile'

import Link from 'next/link'
const Ratings = ({ allRatingsData }) => {
    return (
        <div className='space-y-4'>
            <h1 className='text-center text-3xl md:text-5xl mb-3 md:mb-5 font-semibold text-primary-900'>
                Ratings
            </h1>
            <p className='text-gray-700 text-center'>Ratings, because it's always good to get someone else's opinion on something before you buy it.</p>

            <p>I mostly review stationery (since I'm a huge stationary fan, but I'll review other things too. </p>

            <ul>
                {allRatingsData.map(({slug, date, title, excerpt, starcount}) => (
                    <li key={slug}>
                        <Link href='/ratings/[slug]' as={`/ratings/${slug}`}>
                            <a>
                                <RatingTile title={title} date={date} excerpt={excerpt} starcount={starcount} />
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ratings;

export async function getStaticProps() {
    const allRatingsData = getSortedRatings();

    return {
        props: {
            allRatingsData,
        },
    };
}