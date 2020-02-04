import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /projectstatuses    /projectstatuses/####
// =================================================================================================

export interface ProjectStatusesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly readonly: boolean
}

export interface ProjectStatusesTypeUpdate {
  name?: string
  active?: boolean
  seq?: number | null
}

export type ProjectStatusesTypeResponse = Merge<ProjectStatusesTypeUpdate, Merge<ProjectStatusesTypeRead, {

}>>

export interface ProjectStatusesTypeCreate extends ProjectStatusesTypeUpdate {
  name:string
}

export interface ProjectStatusesTypeFilter {
  name?:string
  active?:boolean
}

export interface ProjectStatusesFilterCondition extends ProjectStatusesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ProjectStatusesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ProjectStatusesListConfig extends GenericListConfig {
  filter?:ProjectStatusesFilterCondition
}
