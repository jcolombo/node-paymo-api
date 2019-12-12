import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ClientsListConfig, ClientTypeCreate, ClientTypeResponse, ClientTypeUpdate } from "./types"

export interface ClientsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ClientTypeResponse | null>
  list: (config?: ClientsListConfig) => Promise<ClientTypeResponse[]>
  create: (d: ClientTypeCreate) => Promise<ClientTypeResponse | null>
  update: (id: number, data: ClientTypeUpdate) => Promise<ClientTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Clients extends AbstractResource implements ClientsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'clients')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ClientTypeResponse | null
  }

  list = async (config: ClientsListConfig = {}) => {
    return (await this.baseList(config)) as ClientTypeResponse[]
  }

  create = async (data: ClientTypeCreate) => {
    return (await this.baseCreate(data)) as ClientTypeResponse | null
  }

  update = async (id: number, data: ClientTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ClientTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
