import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { TasksListConfig, TasksTypeCreate, TasksTypeResponse, TasksTypeUpdate } from "./types"

export interface TasksHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<TasksTypeResponse | null>
  list: (config?: TasksListConfig) => Promise<TasksTypeResponse[]>
  create: (d: TasksTypeCreate) => Promise<TasksTypeResponse | null>
  update: (id: number, data: TasksTypeUpdate) => Promise<TasksTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Tasks extends AbstractResource implements TasksHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'tasks')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as TasksTypeResponse | null
  }

  list = async (config: TasksListConfig = {}) => {
    return (await this.baseList(config)) as TasksTypeResponse[]
  }

  create = async (data: TasksTypeCreate) => {
    return (await this.baseCreate(data)) as TasksTypeResponse | null
  }

  update = async (id: number, data: TasksTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as TasksTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
