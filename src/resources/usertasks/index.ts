import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { UserTasksListConfig, UserTasksTypeCreate, UserTasksTypeResponse, UserTasksTypeUpdate } from "./types"

export interface UserTasksHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<UserTasksTypeResponse | null>
  list: (config?: UserTasksListConfig) => Promise<UserTasksTypeResponse[]>
  create: (d: UserTasksTypeCreate) => Promise<UserTasksTypeResponse | null>
  update: (id: number, data: UserTasksTypeUpdate) => Promise<UserTasksTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class UserTasks extends AbstractResource implements UserTasksHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'userstasks')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as UserTasksTypeResponse | null
  }

  list = async (config: UserTasksListConfig = {}) => {
    const validConfig =
      !!config &&
      config.filter &&
      (config.filter.user_id || config.filter.task_id)
    if (!validConfig) {
      console.log('User task list requires at least a user_id or task_id filter')
      return []
    }
    return (await this.baseList(config)) as UserTasksTypeResponse[]
  }

  create = async (data: UserTasksTypeCreate) => {
    return (await this.baseCreate(data)) as UserTasksTypeResponse | null
  }

  update = async (id: number, data: UserTasksTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as UserTasksTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
