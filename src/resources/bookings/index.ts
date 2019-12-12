import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from '../../types'
import {
  BookingsListConfig,
  BookingsTypeCreate,
  BookingsTypeResponse,
  BookingsTypeUpdate,
} from './types'

export interface BookingsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<BookingsTypeResponse | null>
  list: (config?: BookingsListConfig) => Promise<BookingsTypeResponse[]>
  create: (d: BookingsTypeCreate) => Promise<BookingsTypeResponse | null>
  update: (
    id: number,
    data: BookingsTypeUpdate
  ) => Promise<BookingsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Bookings extends AbstractResource implements BookingsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'bookings')
    this.filterDates = ['start_date', 'end_date']
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as BookingsTypeResponse | null
  }

  list = async (config: BookingsListConfig = {}) => {
    const validConfig =
      !!config &&
      config.filter &&
      (config.filter.user_task_id ||
        config.filter.task_id ||
        config.filter.user_id ||
        config.filter.project_id ||
        (config.filter.date_interval &&
          Array.isArray(config.filter.date_interval) &&
          config.filter.date_interval.length === 2) ||
        (config.filter.start_date && config.filter.end_date))
    if (!validConfig) {
      console.log('Booking list requires at least one valid filter condition')
      return []
    }
    return (await this.baseList(config)) as BookingsTypeResponse[]
  }

  create = async (data: BookingsTypeCreate) => {
    return (await this.baseCreate(data)) as BookingsTypeResponse | null
  }

  update = async (id: number, data: BookingsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as BookingsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }
}
