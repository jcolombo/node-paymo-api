import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /workflows    /workflows/####
// =================================================================================================

export interface WorkflowsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface WorkflowsTypeUpdate {
  name?:string
  is_default?:boolean
}

export type WorkflowsTypeResponse = Merge<WorkflowsTypeUpdate, Merge<WorkflowsTypeRead, {

}>>

export interface WorkflowsTypeCreate extends WorkflowsTypeUpdate {
  name:string
}

export interface WorkflowsTypeFilter {
  id?:number
  name?:string
  is_default?:boolean
}

export interface WorkflowsFilterCondition extends WorkflowsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof WorkflowsTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface WorkflowsListConfig extends GenericListConfig {
  filter?:WorkflowsFilterCondition
}
