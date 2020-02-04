import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /invoicetemplates    /invoicetemplates/####
// =================================================================================================

export interface InvoiceTemplatesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface InvoiceTemplatesTypeUpdate {
  name?:string
  title?:string
  html?:string
  css?:string
  is_default?:boolean
}

export type InvoiceTemplatesTypeResponse = Merge<InvoiceTemplatesTypeUpdate, Merge<InvoiceTemplatesTypeRead, {

}>>

export interface InvoiceTemplatesTypeCreate extends InvoiceTemplatesTypeUpdate {
  name: string
}

export interface InvoiceTemplatesTypeFilter {
  id?:number
  name?: string
  is_default?: boolean
}

export interface InvoiceTemplatesFilterCondition extends InvoiceTemplatesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof InvoiceTemplatesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface InvoiceTemplatesListConfig extends GenericListConfig {
  filter?:InvoiceTemplatesFilterCondition
}
