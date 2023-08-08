// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		
		interface MDFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: Record<string, string>;
		}

		type MDResolver = () => Promise<MDFile>;

		interface Post {
			slug: string;
			title: string;
			summary: string;
			date: string;
		}

		interface RecFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: Record<string, string>;
		}

		type RecResolver = () => Promise<RecFile>;

		interface Rec {
			slug: string;
			title: string;
			summary: string;
		}
	}
}

export {};
