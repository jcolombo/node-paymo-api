import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { WorkflowsListConfig, WorkflowsTypeCreate, WorkflowsTypeResponse, WorkflowsTypeUpdate } from "./types"

export interface WorkflowsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<WorkflowsTypeResponse | null>
  list: (config?: WorkflowsListConfig) => Promise<WorkflowsTypeResponse[]>
  create: (d: WorkflowsTypeCreate) => Promise<WorkflowsTypeResponse | null>
  update: (id: number, data: WorkflowsTypeUpdate) => Promise<WorkflowsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Workflows extends AbstractResource implements WorkflowsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'workflows')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as WorkflowsTypeResponse | null
  }

  list = async (config: WorkflowsListConfig = {}) => {
    return (await this.baseList(config)) as WorkflowsTypeResponse[]
  }

  create = async (data: WorkflowsTypeCreate) => {
    return (await this.baseCreate(data)) as WorkflowsTypeResponse | null
  }

  update = async (id: number, data: WorkflowsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as WorkflowsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
