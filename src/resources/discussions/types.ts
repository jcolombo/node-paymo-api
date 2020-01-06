import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /discussions    /discussions/####
// =================================================================================================

export interface DiscussionsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface DiscussionsTypeUpdate {
  name?: string
  description?: string
  project_id?:number
  user_id?:number
}

export type DiscussionsTypeResponse = Merge<DiscussionsTypeUpdate, Merge<DiscussionsTypeRead, {
  name:string
  project_id:number
  description: string | null
  user_id: number
  comments_count: number
}>>

export interface DiscussionsTypeCreate extends DiscussionsTypeUpdate {
  name:string
  project_id: number
}

export interface DiscussionsTypeFilter {
  id?: number
  created_on?:string
  updated_on?:string
  name?:string
  description?:string
  user_id?:number
}

export interface DiscussionsFilterCondition extends DiscussionsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof DiscussionsTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface DiscussionsListConfig extends GenericListConfig {
  filter?:DiscussionsFilterCondition
}
