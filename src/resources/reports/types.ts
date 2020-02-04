import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /reports    /reports/####
// =================================================================================================

type ReportsDateIntervals = 'today' | 'yesterday' | 'this_month' | 'last_month' | 'this_week' | 'last_week' | 'this_year' | 'last_year' | 'all_time'

interface ReportsIncludeOptions {
  days?: boolean
  clients?: boolean
  users?: boolean
  projects?: boolean
  tasklists?: boolean
  tasks?: boolean
  billed?: boolean
  entries?: boolean
}

interface ReportsExtraOptions {
  exclude_billed_entries?: boolean
  exclude_unbilled_entries?: boolean
  exclude_billable_tasks?: boolean
  exclude_nonbillable_tasks?: boolean
  exclude_flat_rate_tasks?: boolean
  exclude_flats?: boolean
  enable_time_rounding?: boolean
  rounding_step?: number // In minutes
  display_charts?: boolean
  display_costs?: boolean
  display_entries_descriptions?: boolean
  display_seconds?: boolean
  display_tasks_codes?: boolean
  display_tasks_descriptions?: boolean
  display_tasks_complete_status?: boolean
  display_tasks_remaining_time_budgets?: boolean
  display_tasks_time_budget?: boolean
  display_projects_budgets?: boolean
  display_projects_codes?: boolean
  display_projects_descriptions?: boolean
  display_projects_remaining_budgets?: boolean
  display_users_positions?: boolean
  order?: Array<keyof ReportsIncludeOptions>
}

export interface ReportsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface ReportsTypeUpdate {
  name?: string
  user_id?: number
  type?: 'static' | 'live' | 'temp'
  start_date?: string
  end_date?: string
  date_interval?: ReportsDateIntervals
  shared?: boolean
}

export type ReportsTypeResponse = Merge<ReportsTypeUpdate, Merge<ReportsTypeRead, {
  info: any       // Parameters used in the creation
  content?: { items: any[] }   // Mix of response data types, @todo Can be narrowed down later
  permalink: string
  shared: boolean
  share_client_id?: number
}>>

export type ReportsTypeCreate = ReportsTypeCreateWithInterval | ReportsTypeCreateWithDates

interface ReportsTypeCommon extends ReportsTypeUpdate {
  projects?: number[] | 'all' | 'all_active' | 'all_archived' | string // string must be status_id=STATUS_ID
  clients?: number[] | 'all' | 'all_active'
  users?: number[] | 'all' | 'all_active' | 'all_archived'
  include?: ReportsIncludeOptions
  extra?: ReportsExtraOptions
}

interface ReportsTypeCreateWithInterval extends ReportsTypeCommon {
  date_interval: ReportsDateIntervals
}

interface ReportsTypeCreateWithDates extends ReportsTypeCommon {
  start_date: string
  end_date: string
}

export interface ReportsTypeFilter {

}

export interface ReportsFilterCondition extends ReportsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ReportsTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ReportsListConfig extends GenericListConfig {
  filter?:ReportsFilterCondition
}
