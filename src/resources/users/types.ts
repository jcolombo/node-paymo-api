import { FilterOperator, GenericListConfig } from "../../types"

// PAYMO API DOCS - 2019-11-23    /users    /users/####
// =================================================================================================
// id	integer	(read-only) Unique user identifier
// name	text	Full name
// email	email	Email address. There are no two active users in Paymo with the same email address. Email is used to receive notifications from Paymo as well as to log into Paymo.
// type	text	Account type. Available options: Admin, Employee.
// active	boolean	If true the user is active and can use Paymo, otherwise it is retired (archived).
// timezone	text	User timezone. List of available options
// phone	text	Phone number
// skype	text	Skype account name
// position	text	Job position description
// workday_hours	decimal	Number of working hours in a day. It is used to compute user performance.
// price_per_hour	decimal	Price per hour. It is used in invoicing to compute the cost of worked time.
// created_on	datetime	(read-only) Date and time when the user was created
// updated_on	datetime	(read-only) Date and time when the user was last updated
// image	url	User profile image URL
// image_thumb_large	url	(read-only) User profile image large size thumbnail URL
// image_thumb_medium	url	(read-only) User profile image medium size thumbnail URL
// image_thumb_small	url	(read-only) User profile image small size thumbnail URL
// date_format	text	Format for displaying dates in the application. Available options: Y-m-d, d/m/Y, m/d/Y, d.m.Y.
// time_format	text	Format for displaying time values. Available options: H:i for 24-hour format, h:i a for 12-hour format.
// decimal_sep	text	Decimal separator for displaying numeric values
// thousands_sep	text	Thousands separator for displaying numeric values
// week_start	text	Numeric value in the range 0-6 representing the day the week starts, 0 being Sunday, 6 being Saturday.
// language	text	Paymo user interface language
// theme	text	Paymo user interface theme name
// assigned_projects	list	List of projects ids to which the user is assigned
// managed_projects	list	List of projects ids that the user manages. This list is a subset of assigned_projects.
// is_online	boolean	(read-only) If true the user is logged into Paymo.
// password	text	(only for create/update requests) User password when creating or updating a user.

export interface UserTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly image_thumb_large?: string
  readonly image_thumb_medium?: string
  readonly image_thumb_small?: string
  readonly is_online?: boolean
}

export type UserTypeUpdate = {
  name?: string
  email?: string
  type?: "Admin" | "Employee"
  active?: boolean
  timezone?: string
  phone?: string
  skype?: string
  position?: string
  workday_hours?: number
  price_per_hour?:number
  image?: string
  date_format?:"Y-m-d"|"d/m/Y"|"m/d/Y"|"d.m.Y"
  time_format?:"H:i"|"h:i"
  decimal_sep?:string
  thousands_sep?:string
  week_start?:0|1|2|3|4|5|6
  language?:string
  theme?:string
  assigned_projects?:number[]
  managed_projects?:number[]
  password?:string
}

export type UserTypeResponse = UserTypeRead & UserTypeUpdate & {
  description?: string | null
  color?: string | null
  price_per_hour?: number | null
  price?: number | null
  hourly_billing_mode?: string | null
  budget_hours?: number | null
  adjustable_hours?: boolean | null
  invoice_item_id?: number | null
}

export type UserTypeCreate = {
  email: string
} & UserTypeUpdate

export type UserTypeFilter = {
  id?: number
  created_on?: string
  updated_on?: string
  is_online?: boolean
  name?: string
  email?: string
  type?: "Admin" | "Employee"
  active?: boolean
  timezone?: string
  phone?: string
  skype?: string
  position?: string
  workday_hours?: number
  price_per_hour?:number
  image?: string
  date_format?:"Y-m-d"|"d/m/Y"|"m/d/Y"|"d.m.Y"
  time_format?:"H:i"|"h:i"
  decimal_sep?:string
  thousands_sep?:string
  week_start?:0|1|2|3|4|5|6
  language?:string
  theme?:string
  assigned_projects?:number[]
  managed_projects?:number[]
  password?:string
}

export type UserFilterCondition = {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof UserTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
} & UserTypeFilter

export interface UsersListConfig extends GenericListConfig {
  filter?:UserFilterCondition
}
