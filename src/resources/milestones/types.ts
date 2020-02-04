import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /milestones    /milestones/####
// =================================================================================================

export interface MilestonesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly reminder_sent: boolean
}

export interface MilestonesTypeUpdate {
  name?: string
  project_id?: number
  user_id?: number
  due_date?: string
  send_reminder?: number
  complete?: boolean
  linked_tasklists?: number[]
}

export type MilestonesTypeResponse = Merge<MilestonesTypeUpdate, Merge<MilestonesTypeRead, {

}>>

export interface MilestonesTypeCreate extends MilestonesTypeUpdate {
  name: string
  project_id: number
  due_date: string
}

export interface MilestonesTypeFilter {
  project_id?: number
  user_id?: number
  due_date?: string
  complete?: boolean
}

export interface MilestonesFilterCondition extends MilestonesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof MilestonesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface MilestonesListConfig extends GenericListConfig {
  filter?:MilestonesFilterCondition
}
