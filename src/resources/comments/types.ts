import { FilterOperator, GenericListConfig, Merge } from '../../types'

// PAYMO API DOCS - 2019-12-11    /comments    /comments/####
// =================================================================================================

export interface CommentsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly thread_id: number
  readonly user_id: number
}

export interface CommentsTypeUpdate {
  content: string
}

export type CommentsTypeResponse = Merge<
  CommentsTypeUpdate,
  Merge<CommentsTypeRead, {}>
>

interface CommentsTypeCreateWithThread extends CommentsTypeUpdate {
  thread_id: number
}

interface CommentsTypeCreateWithTask extends CommentsTypeUpdate {
  task_id: number
}

interface CommentsTypeCreateWithDiscussion extends CommentsTypeUpdate {
  discussion_id: number
}

interface CommentsTypeCreateWithFile extends CommentsTypeUpdate {
  file_id: number
}

export type CommentsTypeCreate =
  | CommentsTypeCreateWithThread
  | CommentsTypeCreateWithTask
  | CommentsTypeCreateWithDiscussion
  | CommentsTypeCreateWithFile

export interface CommentsTypeFilter {
  id?: number
  thread_id?: number
  user_id?: number
  created_on?: string
  updated_on?: string
  content?: string
}

export interface CommentsFilterCondition extends CommentsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof CommentsTypeFilter, string>
      operator?: FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface CommentsListConfig extends GenericListConfig {
  filter?: CommentsFilterCondition
}

// PAYMO API DOCS - 2019-12-11    /threads    /threads/####
// =================================================================================================

export interface ThreadsTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
  readonly project_id: number
  readonly discussion_id: number | null
  readonly task_id: number | null
  readonly file_id: number | null
}

export type ThreadsTypeResponse = Merge<ThreadsTypeRead, {}>

export interface ThreadsTypeFilter {
  id?: number
  created_on?: string
  updated_on?: string
  project_id?: number
  discussion_id?: number
  task_id?: number
  file_id?: number
}

export interface ThreadsFilterCondition extends ThreadsTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ThreadsTypeFilter, string>
      operator?: FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ThreadsListConfig extends GenericListConfig {
  filter?: ThreadsFilterCondition
}
