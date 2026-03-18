import { writable, type Writable } from 'svelte/store';

export const NAVBAR_OPEN: Writable<boolean> = writable(false);
