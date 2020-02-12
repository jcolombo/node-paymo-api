import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { TaskListsListConfig, TaskListsTypeCreate, TaskListsTypeResponse, TaskListsTypeUpdate } from "./types"

export interface TaskListsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<TaskListsTypeResponse | null>
  list: (config?: TaskListsListConfig) => Promise<TaskListsTypeResponse[]>
  create: (d: TaskListsTypeCreate) => Promise<TaskListsTypeResponse | null>
  update: (id: number, data: TaskListsTypeUpdate) => Promise<TaskListsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class TaskLists extends AbstractResource implements TaskListsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'tasklists')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as TaskListsTypeResponse | null
  }

  list = async (config: TaskListsListConfig = {}) => {
    return (await this.baseList(config)) as TaskListsTypeResponse[]
  }

  create = async (data: TaskListsTypeCreate) => {
    return (await this.baseCreate(data)) as TaskListsTypeResponse | null
  }

  update = async (id: number, data: TaskListsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as TaskListsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
