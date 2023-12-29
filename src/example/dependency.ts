import { SiweMessage } from 'siwe'


class RepoBase {
    save(item: object) {
        const message = new SiweMessage({ address: '0x0' })
        return message.toMessage()
    }

    delete() {
        //not in use
        return false
    }

}

export class Repo extends RepoBase {
    get() {
        const message = new SiweMessage({ address: '0x0' })
        return message.validate("123132", "123")
    }
}