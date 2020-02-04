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

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

export type PaymoCurrency = 'AED' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'BAM' | 'BDT' | 'BGN' | 'BRL' | 'BWP' | 'CAD' | 'CFP' | 'CHF' | 'CLF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CZK' | 'DKK' | 'DOP' | 'DZD' | 'EEK' | 'EGP' | 'EUR' | 'GBP' | 'GTQ' | 'HKD' | 'HRK' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LKR' | 'LTL' | 'LVL' | 'MAD' | 'MDL' | 'MUR' | 'MXN' | 'MYR' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NZD' | 'OMR' | 'PEN' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RMB' | 'RON' | 'RSD' | 'RUB' | 'SAR' | 'SEK' | 'SGD' | 'SKK' | 'TBH' | 'TND' | 'TRY' | 'TTD' | 'TWD' | 'U$S' | 'UAH' | 'US$' | 'USD' | 'UYU' | 'VEF' | 'VND' | 'ZAR'
