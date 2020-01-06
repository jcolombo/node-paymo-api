import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /company
// =================================================================================================

export interface CompanyTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly image_thumb_large?: string
  readonly image_thumb_medium?: string
  readonly image_thumb_small?: string
  readonly account_type: string
  readonly max_users: number
  readonly current_users: number
  readonly max_projects:number|null
  readonly current_projects:number
  readonly max_invoices: number
  readonly current_invoices: number
}

export interface CompanyTypeUpdate {
  name?:string
  address?:string
  phone?:string
  email?:string
  url?:string
  fiscal_information?:string
  country?:string
  image?:string
  timezone?:string
  default_currency?:string
  default_price_per_hour?:string
  apply_tax_to_expenses?:string
  tax_on_tax?:string
  currency_position?:"left"|"right"
  next_invoice_number?:number
  next_estimate_number?:number
  online_payments?:number
  date_format?:"Y-m-d"|"d/m/Y"|"m/d/Y"|"d.m.Y"
  time_format?:"H:i"|"h:i"
  decimal_sep?:string
  thousands_sep?:string
  week_start?:"0"|"1"|"2"|"3"|"4"|"5"|"6"
  workday_start?:string // HH:SS 24 hour format
  workday_end?:string // HH:SS 24 hour format
  working_days?:string // Comma separated list of 0,1,2,3,4,5,6
}

export type CompanyTypeResponse = Merge<CompanyTypeUpdate, Merge<CompanyTypeRead, {

}>>
