import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ClientContactsListConfig, ClientContactsTypeCreate, ClientContactsTypeResponse, ClientContactsTypeUpdate } from "./types"

export interface ClientContactsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ClientContactsTypeResponse | null>
  list: (config?: ClientContactsListConfig) => Promise<ClientContactsTypeResponse[]>
  create: (d: ClientContactsTypeCreate) => Promise<ClientContactsTypeResponse | null>
  update: (id: number, data: ClientContactsTypeUpdate) => Promise<ClientContactsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class ClientContacts extends AbstractResource implements ClientContactsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'clientcontacts')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ClientContactsTypeResponse | null
  }

  list = async (config: ClientContactsListConfig = {}) => {
    return (await this.baseList(config)) as ClientContactsTypeResponse[]
  }

  create = async (data: ClientContactsTypeCreate) => {
    return (await this.baseCreate(data)) as ClientContactsTypeResponse | null
  }

  update = async (id: number, data: ClientContactsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ClientContactsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
