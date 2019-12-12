import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /bookings    /bookings/####
// =================================================================================================

export interface BookingsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly creator_id: number
}

export interface BookingsTypeUpdate {
  user_task_id?:number
  start_date?:string
  end_date?:string
  hours_per_day?:number
  description?:string
}

export type BookingsTypeResponse = Merge<BookingsTypeUpdate, Merge<BookingsTypeRead,  {
  booked_hours:any|null
  start_date: string
  start_time: string|null
  end_date:string
  end_time:string|null
}>>

export interface BookingsTypeCreate extends BookingsTypeUpdate {
  user_task_id:number
  start_date:string
  end_date:string
  hours_per_day:number
}

export interface BookingsTypeFilter {
  user_task_id?:number
  task_id?:number
  user_id?:number
  project_id?:number
  date_interval?:string[]

  hours_per_day?:number
  start_date?:string
  end_date?:string
}

export interface BookingsFilterCondition extends BookingsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof BookingsTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface BookingsListConfig extends GenericListConfig {
  filter?:BookingsFilterCondition
}
