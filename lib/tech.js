import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const techDirectory= path.join(process.cwd(), 'tech');

export const getSortedTech = () => {
    const fileNames = fs.readdirSync(techDirectory);

    const allTechData = fileNames.map((filename) => {
        const slug = filename.replace('.mdx', '');
        const fullPath = path.join(techDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterRes = matter(fileContents);

        return {
            slug, 
            ...matterRes.data
        }
    });


    return allTechData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

export const getAllTechSlugs = () => {
    const fileNames = fs.readdirSync(techDirectory);

    return fileNames.map((filename) => {
        return {
            params: {
                slug: filename.replace('.mdx', '')
            }
        };
    });
};

export const getTechData = async (slug) => {
    const fullPath = path.join(techDirectory, `${slug}.mdx`);
    const TechContent = fs.readFileSync(fullPath, 'utf8');

    return TechContent;
};
