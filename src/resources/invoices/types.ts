import { FilterOperator, GenericListConfig, Merge, PaymoCurrency } from "../../types"


// PAYMO API DOCS - 2019-12-11    /invoices    /invoices/####
// =================================================================================================

export interface InvoicesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly subtotal : number
  readonly total : number
  readonly tax_amount : number
  readonly tax2_amount : number
  readonly discount_amount : number
  readonly reminder_1_sent : boolean
  readonly reminder_2_sent : boolean
  readonly reminder_3_sent : boolean
  readonly permalink : string
  readonly pdf_link : string
}

export interface InvoicesTypeUpdate {
  number?: string
  client_id?: number
  template_id?: number
  status?: 'draft' | 'sent' | 'viewed' |'paid' | 'void'
  currency?: PaymoCurrency
  date?: string
  due_date?: string
  tax?: number
  tax2?: number
  discount?: number
  tax_on_tax?: boolean
  bill_to?: string
  company_info?: string
  footer?: string
  notes?: string
  outstanding?: number
  tax_text?:string
  tax2_text?:string
  discount_text?:string
  title?:string
  pay_online?: boolean

  invoiceitems?: InvoiceItemTypeCreate[] // Not sure if this is how you update items or not !
}

export type InvoicesTypeResponse = Merge<InvoicesTypeUpdate, Merge<InvoicesTypeRead, {
  invoiceitems?: InvoiceItemTypeRead[]
}>>

export interface InvoicesTypeCreate extends InvoicesTypeUpdate {
  client_id: number
  currency: PaymoCurrency
  items?:InvoiceItemTypeCreate[]
}

export interface InvoicesTypeFilter extends InvoicesTypeUpdate {
  created_on?: string
  updated_on?: string
  subtotal?: number
  total?: number
  tax_amount?: number
  tax2_amount?: number
}

export interface InvoicesFilterCondition extends InvoicesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof InvoicesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface InvoicesListConfig extends GenericListConfig {
  filter?:InvoicesFilterCondition
}

export interface InvoiceItemTypeCommon {
  item: string
  description: string
  price_unit: number
  quantity: number
  expense_id?: number
  apply_tax?: boolean
  seq?: number | null
}

export interface InvoiceItemTypeCreate extends InvoiceItemTypeCommon {
  entries?: number[]  // Array of entries (Time Entries) to be added as line items as billed
}

export interface InvoiceItemTypeRead extends InvoiceItemTypeCommon {
  readonly id: number
  apply_tax: boolean
  seq: number | null
  readonly created_on: string
  readonly updated_on: string
}
