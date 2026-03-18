import { writable, type Writable } from 'svelte/store';

export const UNDER_CONSTRUCTION: Writable<boolean> = writable(false);
