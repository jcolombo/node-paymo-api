import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /userstasks    /userstasks/####
// =================================================================================================

export interface UserTasksTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface UserTasksTypeUpdate {
  user_id?:number
  task_id?:number
}

export type UserTasksTypeResponse = Merge<UserTasksTypeUpdate, Merge<UserTasksTypeRead, {

}>>

export interface UserTasksTypeCreate extends UserTasksTypeUpdate {
  user_id:number
  task_id:number
}

export interface UserTasksTypeFilter {
  user_id?:number
  task_id?:number
}

export interface UserTasksFilterCondition extends UserTasksTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof UserTasksTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface UserTasksListConfig extends GenericListConfig {
  filter?:UserTasksFilterCondition
}
