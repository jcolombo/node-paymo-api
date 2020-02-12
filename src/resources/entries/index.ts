import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { TimeEntriesListConfig, TimeEntriesTypeCreate, TimeEntriesTypeResponse, TimeEntriesTypeUpdate } from "./types"

export interface TimeEntriesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<TimeEntriesTypeResponse | null>
  list: (config?: TimeEntriesListConfig) => Promise<TimeEntriesTypeResponse[]>
  create: (d: TimeEntriesTypeCreate) => Promise<TimeEntriesTypeResponse | null>
  update: (id: number, data: TimeEntriesTypeUpdate) => Promise<TimeEntriesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class TimeEntries extends AbstractResource implements TimeEntriesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'entries')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as TimeEntriesTypeResponse | null
  }

  list = async (config: TimeEntriesListConfig = {}) => {
    const validConfig =
      !!config &&
      config.filter &&
      (config.filter.project_id ||
        config.filter.client_id ||
        config.filter.task_id ||
        config.filter.user_id ||
        (config.filter.time_interval &&
          Array.isArray(config.filter.time_interval) &&
          config.filter.time_interval.length === 2))
    if (!validConfig) {
      console.log('Entry list requires at least one valid filter condition')
      return []
    }
    return (await this.baseList(config)) as TimeEntriesTypeResponse[]
  }

  create = async (data: TimeEntriesTypeCreate) => {
    return (await this.baseCreate(data)) as TimeEntriesTypeResponse | null
  }

  update = async (id: number, data: TimeEntriesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as TimeEntriesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
