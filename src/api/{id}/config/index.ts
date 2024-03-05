import { Repo } from '../../../example/dependency'

export const example_handler = function potato() {
    console.log("Howdy!")
}

export default example_handler

export const endpointConfig = () => {
    return {
        method: 'GET',
        path: '/{id}/config',
    }
}