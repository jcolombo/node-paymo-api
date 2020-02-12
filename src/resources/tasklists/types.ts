import { FilterOperator, GenericListConfig, Merge } from '../../types'

// PAYMO API DOCS - 2019-12-11    /tasklists    /tasklists/####
// =================================================================================================

export interface TaskListsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly project_id: number
}

export interface TaskListsTypeUpdate {
  name?: string
  seq?: number | null
  milestone_id?: number
  tasks_order?: number[]
}

export type TaskListsTypeResponse = Merge<
  TaskListsTypeUpdate,
  Merge<TaskListsTypeRead, {}>
>

export interface TaskListsTypeCreate extends TaskListsTypeUpdate {
  name: string
  project_id: number
}

export interface TaskListsTypeFilter {
  name?:string
  project_id?: number
  milestone_id?: number
}

export interface TaskListsFilterCondition extends TaskListsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof TaskListsTypeFilter, string>
      operator?: FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface TaskListsListConfig extends GenericListConfig {
  filter?: TaskListsFilterCondition
}
