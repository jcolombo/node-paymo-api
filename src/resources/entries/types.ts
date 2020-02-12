import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /entries    /entries/####
// =================================================================================================

export interface TimeEntriesTypeRead {
  readonly id: number
  readonly project_id:number
  readonly created_on: string
  readonly updated_on: string
}

export interface TimeEntriesTypeUpdate {
  task_id?:number
  user_id?:number
  is_bulk?: boolean
  start_time?:string
  end_time?:string
  date?:string
  duration?:number // in seconds
  description?:string
  added_manually?:boolean // false means the timer app was used
  billed?:boolean // time is on an invoice
}

export type TimeEntriesTypeResponse = Merge<TimeEntriesTypeUpdate, Merge<TimeEntriesTypeRead, {

}>>

interface TimeEntriesTypeCreateCommon extends TimeEntriesTypeUpdate {
  task_id:number
}

interface TimeEntriesTypeCreateRange extends TimeEntriesTypeCreateCommon {
  start_time:string
  end_time:string
}

interface TimeEntriesTypeCreateDuration extends TimeEntriesTypeCreateCommon {
  date:string
  duration:number
}

export type TimeEntriesTypeCreate = TimeEntriesTypeCreateRange | TimeEntriesTypeCreateDuration

export interface TimeEntriesTypeFilter {
  project_id?:number
  task_id?:number
  user_id?:number
  client_id?:number
  time_interval?:string[]
  end_time?:string | null
}

export interface TimeEntriesFilterCondition extends TimeEntriesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof TimeEntriesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface TimeEntriesListConfig extends GenericListConfig {
  filter?:TimeEntriesFilterCondition
}
