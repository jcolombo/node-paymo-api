import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /_template_    /_template_/####
// =================================================================================================

export interface _Template_TypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface _Template_TypeUpdate {

}

export type _Template_TypeResponse = Merge<_Template_TypeUpdate, Merge<_Template_TypeRead, {

}>>

export interface _Template_TypeCreate extends _Template_TypeUpdate {

}

export interface _Template_TypeFilter {

}

export interface _Template_FilterCondition extends _Template_TypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof _Template_TypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface _Template_ListConfig extends GenericListConfig {
  filter?:_Template_FilterCondition
}
