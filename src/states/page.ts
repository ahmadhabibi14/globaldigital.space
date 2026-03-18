import { writable, type Writable } from 'svelte/store';

export const PathHome: string = '/';

export type PathNames = '/' | string;

export const CURRENT_PATH: Writable<PathNames | string> = writable(PathHome);
