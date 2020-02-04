import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /files    /files/####
// =================================================================================================

export interface FilesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly user_id: number | null
  readonly project_id: number | null
  readonly discussion_id: number | null
  readonly task_id: number | null
  readonly comment_id: number | null
  readonly token: string
  readonly size: number
  readonly mime: string
  readonly file: string
  readonly image_thumb_large?: string
  readonly image_thumb_medium?: string
  readonly image_thumb_small?: string
}

export interface FilesTypeUpdate {
  original_filename?: string
  description?: string
}

export type FilesTypeResponse = Merge<FilesTypeUpdate, Merge<FilesTypeRead, {

}>>

// This is not the actual CREATE type as it is a multi-part upload
export interface FilesTypeCreate extends FilesTypeUpdate {

}

export interface FilesTypeFilter {
  original_filename?: string
  project_id?: number
  discussion_id?: number
  task_id?: number
  comment_id?: number
}

export interface FilesFilterCondition extends FilesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof FilesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface FilesListConfig extends GenericListConfig {
  filter?:FilesFilterCondition
}
