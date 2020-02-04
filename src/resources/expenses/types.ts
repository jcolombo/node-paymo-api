import { FilterOperator, GenericListConfig, Merge, PaymoCurrency } from "../../types"

// PAYMO API DOCS - 2019-12-11    /expenses    /expenses/####
// =================================================================================================

export interface ExpensesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly image_thumb_large?: string
  readonly image_thumb_medium?: string
  readonly image_thumb_small?: string
}

export interface ExpensesTypeUpdate {
  client_id?: number
  project_id?: number
  user_id?: number
  amount?: number
  currency?: PaymoCurrency
  date?: string
  notes?: string
  invoiced?: boolean
  invoice_item_id?: number
  tags?: string[]
  file?: string
}

export type ExpensesTypeResponse = Merge<ExpensesTypeUpdate, Merge<ExpensesTypeRead, {

}>>

export interface ExpensesTypeCreate extends ExpensesTypeUpdate {
  client_id: number
  currency: PaymoCurrency
  amount: number
}

export interface ExpensesTypeFilter {
  client_id?: number
  project_id?: number
  user_id?: number
  invoice_item_id?: number
}

export interface ExpensesFilterCondition extends ExpensesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ExpensesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ExpensesListConfig extends GenericListConfig {
  filter?:ExpensesFilterCondition
}
