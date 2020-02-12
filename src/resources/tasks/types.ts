import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /tasks    /tasks/####
// =================================================================================================

export interface TasksTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly project_id: number
}

export interface TasksTypeUpdate {
  name?:string
  code?:string
  tasklist_id?: number
  seq?: number | null
  description?: string
  complete?: boolean
  due_date?: string
  user_id?: number
  users?: number[] | null
  billable?: boolean
  flat_billing?: boolean
  price_per_hour?: number
  budget_hours?: number
  estimated_price?: number
  invoiced?: boolean
  invoice_item_id?: number
  priority?: 25 | 50 | 75 | 100
  status_id?: number
}

export type TasksTypeResponse = Merge<TasksTypeUpdate, Merge<TasksTypeRead, {
  completed_by?:number
  cover_file_id?: number
  start_date?:string
  recurring_profile_id?:number
  billing_type?:string
}>>

interface TasksTypeCreateCommon extends TasksTypeUpdate {
  name: string
}

interface TasksTypeCreateWithTaskList extends TasksTypeCreateCommon {
  tasklist_id: number
}

interface TasksTypeCreateWithProject extends TasksTypeCreateCommon {
  project_id: number
}

export type TasksTypeCreate = TasksTypeCreateWithProject | TasksTypeCreateWithTaskList

export interface TasksTypeFilter {
  project_id?:number
  tasklist_id?: number
  complete?: boolean
  users?: number | (number|string)[] | 'anyone'
  mytasks?: boolean
}

export interface TasksFilterCondition extends TasksTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof TasksTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface TasksListConfig extends GenericListConfig {
  filter?:TasksFilterCondition
}
