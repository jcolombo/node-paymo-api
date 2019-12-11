export interface AuthInterface {
  userApi: string
  password: string
}

export type FilterOperator =
  | '='
  | '<='
  | '>='
  | '>'
  | '<'
  | '!='
  | 'like'
  | 'not like'
  | 'in'
  | 'not in'

export type GenericCustomFilterType = {
  [k: string]: {
    key?: string
    operator?: FilterOperator
    value: string | number | boolean | null | number[]
  }
}

export type GenericFilterType = {
  [key: string]: any
} & {
  _custom?: GenericCustomFilterType
}

export interface GenericListConfig {
  filter?: GenericFilterType
  include?: string[]
}
