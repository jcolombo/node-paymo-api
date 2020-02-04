import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { InvoicesListConfig, InvoicesTypeCreate, InvoicesTypeResponse, InvoicesTypeUpdate } from "./types"

export interface InvoicesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<InvoicesTypeResponse | null>
  list: (config?: InvoicesListConfig) => Promise<InvoicesTypeResponse[]>
  create: (d: InvoicesTypeCreate) => Promise<InvoicesTypeResponse | null>
  update: (id: number, data: InvoicesTypeUpdate) => Promise<InvoicesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Invoices extends AbstractResource implements InvoicesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'invoices')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as InvoicesTypeResponse | null
  }

  list = async (config: InvoicesListConfig = {}) => {
    return (await this.baseList(config)) as InvoicesTypeResponse[]
  }

  create = async (data: InvoicesTypeCreate) => {
    return (await this.baseCreate(data)) as InvoicesTypeResponse | null
  }

  update = async (id: number, data: InvoicesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as InvoicesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
