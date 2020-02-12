import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /sessions    /sessions/####
// =================================================================================================

export interface SessionsTypeRead {
  readonly id: string
  readonly ip: string
  readonly created_on: string
  readonly updated_on: string
  readonly expires_on: string
  readonly user_id: number
}

export interface SessionsTypeUpdate {

}

export type SessionsTypeResponse = Merge<SessionsTypeUpdate, Merge<SessionsTypeRead, {

}>>

export interface SessionsTypeCreate {

}

export interface SessionsTypeFilter {

}

export interface SessionsFilterCondition extends SessionsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof SessionsTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface SessionsListConfig extends GenericListConfig {
  filter?:SessionsFilterCondition
}
