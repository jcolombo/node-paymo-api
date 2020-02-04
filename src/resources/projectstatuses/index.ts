import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ProjectStatusesListConfig, ProjectStatusesTypeCreate, ProjectStatusesTypeResponse, ProjectStatusesTypeUpdate } from "./types"

export interface ProjectStatusesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ProjectStatusesTypeResponse | null>
  list: (config?: ProjectStatusesListConfig) => Promise<ProjectStatusesTypeResponse[]>
  create: (d: ProjectStatusesTypeCreate) => Promise<ProjectStatusesTypeResponse | null>
  update: (id: number, data: ProjectStatusesTypeUpdate) => Promise<ProjectStatusesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class ProjectStatuses extends AbstractResource implements ProjectStatusesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'projectstatuses')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ProjectStatusesTypeResponse | null
  }

  list = async (config: ProjectStatusesListConfig = {}) => {
    return (await this.baseList(config)) as ProjectStatusesTypeResponse[]
  }

  create = async (data: ProjectStatusesTypeCreate) => {
    return (await this.baseCreate(data)) as ProjectStatusesTypeResponse | null
  }

  update = async (id: number, data: ProjectStatusesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ProjectStatusesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
