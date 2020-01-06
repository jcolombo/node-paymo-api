import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /clientcontacts    /clientcontacts/####
// =================================================================================================

export interface ClientContactsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly image_thumb_large?: string
  readonly image_thumb_medium?: string
  readonly image_thumb_small?: string
}

export interface ClientContactsTypeUpdate {
  name?: string
  email?: string
  mobile?:string
  phone?: string
  fax?:string
  skype?: string
  notes?:string
  position?: string
  is_main?:boolean
  access?:boolean
  client_id?:number
  password?:string
}

export type ClientContactsTypeResponse = Merge<ClientContactsTypeUpdate, Merge<ClientContactsTypeRead, {
  image:string|null
  phone:string|null
  position:string|null
  skype:string|null
}>>

export interface ClientContactsTypeCreate extends ClientContactsTypeUpdate {
  name: string
  client_id:number
}

export interface ClientContactsTypeFilter {
  id?: number
  created_on?: string
  updated_on?: string
  name?: string
  email?: string
  mobile?:string
  phone?: string
  fax?:string
  skype?: string
  is_main?:boolean
  access?:boolean
  client_id?:number
}

export interface ClientContactsFilterCondition extends ClientContactsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ClientContactsTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ClientContactsListConfig extends GenericListConfig {
  filter?:ClientContactsFilterCondition
}
