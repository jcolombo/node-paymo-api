import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-11-23    /projects    /projects/####
// =================================================================================================
// id	integer	(read-only) Unique project identifier
// name	text	Project name
// code	text	Project code can only contain alphanumeric characters (letters A-Z, numbers 0-9). Project code is used as a prefix in task code.
// task_code_increment	integer	(read-only) This is the sequence of the last task from this project.
// description	text	Project description
// client_id	integer	Id of the client for whom the project was created
// status_id	integer	Status id
// active	boolean	If true the project is being active (you can add time to its tasks), otherwise it is archived (you cannot add time to its tasks)
// color	text	An RGB value representing a color for the project when used in charts.
// users	list	A list of ids of users assigned to the project. This list contains also the ids of the managers for this project.
// managers	list	A list of ids of users that are managers for the project. It is a subset of the users list.
// billable	boolean	If true the project is billable. See billing.
// flat_billing	boolean	For billable projects, if true the project is flat rate, otherwise the project is time & materials. See billing.
// price_per_hour	decimal	For time & materials projects, the project hourly rate. Note: which hourly rate (user, task, project, or company) will be used for billing is defined by the hourly_billing_mode field.
// price	decimal	For flat rate project, the project flat rate. See billing.
// estimated_price	decimal	For billable projects, the estimated project price consisting of the price of all its billable tasks (including flat rate tasks).
// hourly_billing_mode	text	For time & materials projects, defines the hierarchy of rates used when deciding on the hourly rate for billing the time in the project. See billing.
// budget_hours	decimal	Project budget in hours. If not set, the project will have unlimited budget hours.
// adjustable_hours	boolean	If true the budget_hours will be adjusted automatically based on tasks budget hours.
// invoiced	boolean	For flat rate projects, if true, the project was already invoiced.
// invoice_item_id	integer	For flat rate projects, if set, the ID of the invoice line (part of the invoice for the project).
// workflow_id	integer	Id of the workflow. See workflows
// created_on	datetime	(read-only) Date and time when the project was created
// updated_on	datetime	(read-only) Date and time when the project was last updated

export interface ProjectTypeRead {
  readonly id: number
  readonly task_code_increment: number
  readonly created_on: string
  readonly updated_on: string
  readonly billing_type: string // undocumented
}

export interface ProjectTypeUpdate {
  name?: string
  client_id?: number
  code?: string
  description?: string
  status_id?: number
  active?: boolean
  color?: string
  users?: number[]
  managers?: number[]
  billable?: boolean
  flat_billing?: boolean
  price_per_hour?: number
  price?: number
  estimated_price?: number | string
  hourly_billing_mode?: string
  budget_hours?: number
  adjustable_hours?: boolean
  invoiced?: boolean
  invoice_item_id?: number
  workflow_id?: number
  template_id?: number
}

export type ProjectTypeResponse = Merge<ProjectTypeRead, Merge<ProjectTypeUpdate, {
  description?: string | null
  color?: string | null
  price_per_hour?: number | null
  price?: number | null
  hourly_billing_mode?: string | null
  budget_hours?: number | null
  adjustable_hours?: boolean | null
  invoice_item_id?: number | null
}>>

export interface ProjectTypeCreate extends ProjectTypeUpdate {
  name: string
  client_id: number
}

export interface ProjectTypeFilter {
  id?: number
  task_code_increment?: number
  created_on?: string
  updated_on?: string
  billing_type?: string
  name?: string
  client_id?: number
  code?: string
  description?: string | null
  status_id?: number
  active?: boolean
  color?: string | null
  users?: number | number[]
  managers?: number | number[]
  billable?: boolean
  flat_billing?: boolean
  price_per_hour?: number | null
  price?: number | null
  estimated_price?: number | string
  hourly_billing_mode?: string | null
  budget_hours?: number | null
  adjustable_hours?: boolean
  invoiced?: boolean
  invoice_item_id?: number | null
  workflow_id?: number
  template_id?: number
}

export interface ProjectFilterCondition extends ProjectTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ProjectTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ProjectsListConfig extends GenericListConfig {
  filter?:ProjectFilterCondition
}

// export type ProjectInclude =
//   | 'client'
//   | ClientChildrenInclude
//   | 'projectstatus'
//   | 'tasklists'
//   | 'tasks'
//   | 'tasks.entries'
//   | 'milestones'
//   | 'discussions'
//   | 'files'
//   | 'invoiceitem'
//   | 'workflow'

