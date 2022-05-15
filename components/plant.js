import Link from 'next/link'

export default function Plant(props) {

    return (
        <div className="max-w-sm items-stretch flex flex-col rounded-xl gap-y-4 border py-4 px-8 bg-secondary-100 border-secondary-500">
            <h2 className="font-semibold text-center text-secondary-800">{props.title}</h2>
            <Link href={props.path}> 
                <a className="text-center text-highlight-800 font-semibold flex-1">View</a>
            </Link>
        </div>
    )
}