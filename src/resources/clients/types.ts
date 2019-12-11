import { FilterOperator, GenericListConfig } from '../../types'

// PAYMO API DOCS - 2019-11-23 | /clients    /clients/####
// =================================================================================================
// id	integer	(read-only) Unique client identifier
// name	text	Client name
// address	text	Street address
// city	text	City name
// postal_code	text	Postal code
// country	text	Country name
// state	text	State or Region name
// phone	text	Phone number
// fax	text	Fax number
// email	email	Email address
// website	url	Website address
// active	boolean	(read-only) If true the client is active, otherwise the client is archived.
// fiscal_information	text	Fiscal information. It is used in invoice headers to display client details.
// created_on	datetime	(read-only) Date and time when the client was created
// updated_on	datetime	(read-only) Date and time when the client was last updated
// image	url	Client logo image URL
// image_thumb_large	url	(read-only) Client logo image large size thumbnail URL
// image_thumb_medium	url	(read-only) Client logo image medium size thumbnail URL
// image_thumb_small	url	(read-only) Client logo image small size thumbnail URL

export interface ClientTypeRead {
  readonly id: number
  readonly active: boolean
  readonly created_on: string
  readonly updated_on: string
  readonly image_thumb_large?: string
  readonly image_thumb_medium?: string
  readonly image_thumb_small?: string
}

export type ClientTypeUpdate = {
  name?: string
  address?: string
  city?: string
  postal_code?: string
  country?: string
  state?: string
  phone?: string
  fax?: string
  email?: string
  website?: string
  fiscal_information?: string
  image?: string
}

export type ClientTypeResponse = ClientTypeRead &
  ClientTypeUpdate & {
    additional_privileges: any[]
    address?: string | null
    city?: string | null
    country?: string | null
    email?: string | null
    fax?: string | null
    fiscal_information?: string | null
    image?: string | null
    phone?: string | null
    postal_code?: string | null
    state?: string | null
    website?: string | null
  }

export type ClientTypeCreate = {
  name: string
} & ClientTypeUpdate

export type ClientTypeFilter = {
  id?: number
  active?: boolean
  created_on?: string
  updated_on?: string
  name?: string
  address?: string | null
  city?: string | null
  country?: string | null
  email?: string | null
  fax?: string | null
  fiscal_information?: string | null
  image?: string | null
  phone?: string | null
  postal_code?: string | null
  state?: string | null
  website?: string | null
}

export type ClientFilterCondition = {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ClientTypeFilter, string>
      operator?: FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
} & ClientTypeFilter

export interface ClientsListConfig extends GenericListConfig {
  filter?: ClientFilterCondition
}
