import { Repo } from '../example/dependency'

export const example_handler = function potato() {
    console.log("HEllo")
    const item = new Repo().get();
    new Repo().save(item);
}

export default example_handler