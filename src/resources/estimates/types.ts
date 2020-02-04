import { FilterOperator, GenericListConfig, Merge, PaymoCurrency } from "../../types"


// PAYMO API DOCS - 2019-12-11    /estimates    /estimates/####
// =================================================================================================

export interface EstimatesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly subtotal : number
  readonly total : number
  readonly tax_amount : number
  readonly tax2_amount : number
  readonly permalink : string
  readonly pdf_link : string
}

export interface EstimatesTypeUpdate {
  number?: string
  client_id?: number
  template_id?: number
  status?: 'draft' | 'sent' | 'viewed' |'accepted' | 'invoiced' | 'void'
  currency?: PaymoCurrency
  date?: string
  tax?: number
  tax2?: number
  tax_on_tax?: boolean
  bill_to?: string
  company_info?: string
  footer?: string
  notes?: string
  tax_text?:string
  tax2_text?:string
  title?:string
  invoice_id?:number
  estimateitems?: EstimateItemTypeCreate[] // Not sure if this is how you update items or not !
}

export type EstimatesTypeResponse = Merge<EstimatesTypeUpdate, Merge<EstimatesTypeRead, {
  estimateitems?: EstimateItemTypeRead[]
}>>

export interface EstimatesTypeCreate extends EstimatesTypeUpdate {
  client_id: number
  currency: PaymoCurrency
  items?:EstimateItemTypeCreate[]
}

export interface EstimatesTypeFilter extends EstimatesTypeUpdate {
  created_on?: string
  updated_on?: string
  subtotal?: number
  total?: number
  tax_amount?: number
  tax2_amount?: number
}

export interface EstimatesFilterCondition extends EstimatesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof EstimatesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface EstimatesListConfig extends GenericListConfig {
  filter?:EstimatesFilterCondition
}

export interface EstimateItemTypeCreate {
  item: string
  description: string
  price_unit: number
  quantity: number
  apply_tax?: boolean
  seq?: number | null
}

export interface EstimateItemTypeRead extends EstimateItemTypeCreate {
  readonly id: number
  readonly estimate_id: number
  apply_tax: boolean
  seq: number | null
  readonly created_on: string
  readonly updated_on: string
}
