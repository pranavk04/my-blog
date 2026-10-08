import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = false;

export const GET: RequestHandler = ({ params }) => {
  const path = (params.path ?? '').split('/').map(encodeURIComponent).join('/');
  throw redirect(308, `/activation-monitors/${path}`);
};
