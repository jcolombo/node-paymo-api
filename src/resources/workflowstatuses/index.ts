import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { WorkflowStatusesListConfig, WorkflowStatusesTypeCreate, WorkflowStatusesTypeResponse, WorkflowStatusesTypeUpdate } from "./types"

export interface WorkflowStatusesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<WorkflowStatusesTypeResponse | null>
  list: (config?: WorkflowStatusesListConfig) => Promise<WorkflowStatusesTypeResponse[]>
  create: (d: WorkflowStatusesTypeCreate) => Promise<WorkflowStatusesTypeResponse | null>
  update: (id: number, data: WorkflowStatusesTypeUpdate) => Promise<WorkflowStatusesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class WorkflowStatuses extends AbstractResource implements WorkflowStatusesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'workflowstatuses')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as WorkflowStatusesTypeResponse | null
  }

  list = async (config: WorkflowStatusesListConfig = {}) => {
    return (await this.baseList(config)) as WorkflowStatusesTypeResponse[]
  }

  create = async (data: WorkflowStatusesTypeCreate) => {
    return (await this.baseCreate(data)) as WorkflowStatusesTypeResponse | null
  }

  update = async (id: number, data: WorkflowStatusesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as WorkflowStatusesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
