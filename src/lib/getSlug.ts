export const getSlug = (path: string) => 
	path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

