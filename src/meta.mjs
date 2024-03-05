import { locate } from 'func-loc';
console.log(import.meta)

const fun = () => {
    console.log("Howdy!");
    }

const maker = function potato() {
    return {
        callback: fun
    }
    };

console.log('name',maker().callback.name)
console.log('url', await locate(maker().callback).then(x => x.source))
