import { redirect } from '@sveltejs/kit';

export const prerender = true;
export const trailingSlash = 'always';

export const load = () => {
  throw redirect(308, '/activation-monitors/');
};
