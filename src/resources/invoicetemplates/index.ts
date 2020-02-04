import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { InvoiceTemplatesListConfig, InvoiceTemplatesTypeCreate, InvoiceTemplatesTypeResponse, InvoiceTemplatesTypeUpdate } from "./types"

export interface InvoiceTemplatesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<InvoiceTemplatesTypeResponse | null>
  list: (config?: InvoiceTemplatesListConfig) => Promise<InvoiceTemplatesTypeResponse[]>
  create: (d: InvoiceTemplatesTypeCreate) => Promise<InvoiceTemplatesTypeResponse | null>
  update: (id: number, data: InvoiceTemplatesTypeUpdate) => Promise<InvoiceTemplatesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class InvoiceTemplates extends AbstractResource implements InvoiceTemplatesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'invoicetemplates')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as InvoiceTemplatesTypeResponse | null
  }

  list = async (config: InvoiceTemplatesListConfig = {}) => {
    return (await this.baseList(config)) as InvoiceTemplatesTypeResponse[]
  }

  create = async (data: InvoiceTemplatesTypeCreate) => {
    return (await this.baseCreate(data)) as InvoiceTemplatesTypeResponse | null
  }

  update = async (id: number, data: InvoiceTemplatesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as InvoiceTemplatesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
