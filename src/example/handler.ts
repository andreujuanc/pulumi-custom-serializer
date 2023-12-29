import { Repo } from './dependency'

export const example_handler = function potato() {
    console.log("HEllo")
    const item = new Repo().get();
    new Repo().save(item);
}