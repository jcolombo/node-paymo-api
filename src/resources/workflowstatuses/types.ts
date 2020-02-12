import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /workflowstatuses    /workflowstatuses/####
// =================================================================================================

export interface WorkflowStatusesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly seq: number
  readonly action: '' | 'complete' |'backlog'
}

export interface WorkflowStatusesTypeUpdate {
  name?:string
  workflow_id?:number
  color?:string
}

export type WorkflowStatusesTypeResponse = Merge<WorkflowStatusesTypeUpdate, Merge<WorkflowStatusesTypeRead, {

}>>

export interface WorkflowStatusesTypeCreate extends WorkflowStatusesTypeUpdate {
  name:string
  color:string
  workflow_id:number
}

export interface WorkflowStatusesTypeFilter {
  name?:string
  workflow_id?:number
}

export interface WorkflowStatusesFilterCondition extends WorkflowStatusesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof WorkflowStatusesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface WorkflowStatusesListConfig extends GenericListConfig {
  filter?:WorkflowStatusesFilterCondition
}
