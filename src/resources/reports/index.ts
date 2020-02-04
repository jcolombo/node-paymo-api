import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ReportsListConfig, ReportsTypeCreate, ReportsTypeResponse, ReportsTypeUpdate } from "./types"

export interface ReportsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ReportsTypeResponse | null>
  list: (config?: ReportsListConfig) => Promise<ReportsTypeResponse[]>
  create: (d: ReportsTypeCreate) => Promise<ReportsTypeResponse | null>
  update: (id: number, data: ReportsTypeUpdate) => Promise<ReportsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Reports extends AbstractResource implements ReportsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'reports')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ReportsTypeResponse | null
  }

  list = async (config: ReportsListConfig = {}) => {
    return (await this.baseList(config)) as ReportsTypeResponse[]
  }

  create = async (data: ReportsTypeCreate) => {
    return (await this.baseCreate(data)) as ReportsTypeResponse | null
  }

  update = async (id: number, data: ReportsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ReportsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
