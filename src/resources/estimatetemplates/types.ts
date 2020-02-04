import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /estimatetemplates    /estimatetemplates/####
// =================================================================================================

export interface EstimateTemplatesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface EstimateTemplatesTypeUpdate {
  name?:string
  title?:string
  html?:string
  css?:string
  is_default?:boolean
}

export type EstimateTemplatesTypeResponse = Merge<EstimateTemplatesTypeUpdate, Merge<EstimateTemplatesTypeRead, {

}>>

export interface EstimateTemplatesTypeCreate extends EstimateTemplatesTypeUpdate {
  name: string
}

export interface EstimateTemplatesTypeFilter {
  id?:number
  name?: string
  is_default?: boolean
}

export interface EstimateTemplatesFilterCondition extends EstimateTemplatesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof EstimateTemplatesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface EstimateTemplatesListConfig extends GenericListConfig {
  filter?:EstimateTemplatesFilterCondition
}
