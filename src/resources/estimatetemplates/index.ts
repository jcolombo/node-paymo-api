import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { EstimateTemplatesListConfig, EstimateTemplatesTypeCreate, EstimateTemplatesTypeResponse, EstimateTemplatesTypeUpdate } from "./types"

export interface EstimateTemplatesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<EstimateTemplatesTypeResponse | null>
  list: (config?: EstimateTemplatesListConfig) => Promise<EstimateTemplatesTypeResponse[]>
  create: (d: EstimateTemplatesTypeCreate) => Promise<EstimateTemplatesTypeResponse | null>
  update: (id: number, data: EstimateTemplatesTypeUpdate) => Promise<EstimateTemplatesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class EstimateTemplates extends AbstractResource implements EstimateTemplatesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'estimatetemplates')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as EstimateTemplatesTypeResponse | null
  }

  list = async (config: EstimateTemplatesListConfig = {}) => {
    return (await this.baseList(config)) as EstimateTemplatesTypeResponse[]
  }

  create = async (data: EstimateTemplatesTypeCreate) => {
    return (await this.baseCreate(data)) as EstimateTemplatesTypeResponse | null
  }

  update = async (id: number, data: EstimateTemplatesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as EstimateTemplatesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
