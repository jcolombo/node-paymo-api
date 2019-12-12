import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ProjectsListConfig, ProjectTypeCreate, ProjectTypeResponse, ProjectTypeUpdate } from "./types"

export interface ProjectsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ProjectTypeResponse | null>
  list: (config?: ProjectsListConfig) => Promise<ProjectTypeResponse[]>
  create: (d: ProjectTypeCreate) => Promise<ProjectTypeResponse | null>
  update: (id: number, data: ProjectTypeUpdate) => Promise<ProjectTypeResponse | null>
  delete: (id: number) => Promise<boolean>
  reorderTaskLists: (id: number, tli: number[]) => Promise<ProjectTypeResponse | null>
}

export class Projects extends AbstractResource implements ProjectsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'projects')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ProjectTypeResponse | null
  }

  list = async (config: ProjectsListConfig = {}) => {
    return (await this.baseList(config)) as ProjectTypeResponse[]
  }

  create = async (data: ProjectTypeCreate) => {
    return (await this.baseCreate(data)) as ProjectTypeResponse | null
  }

  update = async (id: number, data: ProjectTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ProjectTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

  reorderTaskLists = async (
    id: number,
    taskListIds: number[]
  ) => {
    return (await this.baseUpdate(id, {
      tasklists_order: taskListIds,
    })) as ProjectTypeResponse | null
  }
}
