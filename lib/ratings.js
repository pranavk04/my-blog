import fs from "fs";
import path from 'path'
import matter from 'gray-matter'

const ratingsDirectory = path.join(process.cwd(), 'reviews');

export const getSortedRatings = () => {
    const fileNames = fs.readdirSync(ratingsDirectory);

    const allRatingsData = fileNames.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const fullPath = path.join(ratingsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterRes = matter(fileContents);

        return {
            slug, 
            ...matterRes.data
        }
    });


    return allRatingsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const getAllRatingSlugs = () => {
    const fileNames = fs.readdirSync(ratingsDirectory);

    return fileNames.map((filename) => {
        return {
            params: {
                slug: filename.replace('.mdx', '')
            }
        };
    });
};

export const getRatingsData = async (slug) => {
    const fullPath = path.join(ratingsDirectory, `${slug}.mdx`);
    const ratingsContent = fs.readFileSync(fullPath, 'utf8');

    return ratingsContent;
};