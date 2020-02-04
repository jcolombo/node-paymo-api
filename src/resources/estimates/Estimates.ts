import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { EstimatesListConfig, EstimatesTypeCreate, EstimatesTypeResponse, EstimatesTypeUpdate } from "./types"

export interface EstimatesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<EstimatesTypeResponse | null>
  list: (config?: EstimatesListConfig) => Promise<EstimatesTypeResponse[]>
  create: (d: EstimatesTypeCreate) => Promise<EstimatesTypeResponse | null>
  update: (id: number, data: EstimatesTypeUpdate) => Promise<EstimatesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Estimates extends AbstractResource implements EstimatesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'estimates')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as EstimatesTypeResponse | null
  }

  list = async (config: EstimatesListConfig = {}) => {
    return (await this.baseList(config)) as EstimatesTypeResponse[]
  }

  create = async (data: EstimatesTypeCreate) => {
    return (await this.baseCreate(data)) as EstimatesTypeResponse | null
  }

  update = async (id: number, data: EstimatesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as EstimatesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
