import { FilterOperator, GenericListConfig, Merge } from "../../types"

// PAYMO API DOCS - 2019-12-11    /projecttemplates    /projecttemplates/####
// =================================================================================================

// @todo map out types for projecttemplatestasklists and projecttemplatestasks

export interface ProjectTemplatesTypeRead {
  readonly id: number
  readonly created_on: string
  readonly updated_on: string
}

export interface ProjectTemplatesTypeUpdate {
  name?: string
}

export type ProjectTemplatesTypeResponse = Merge<ProjectTemplatesTypeUpdate, Merge<ProjectTemplatesTypeRead, {

}>>

export interface ProjectTemplatesTypeCreate extends ProjectTemplatesTypeUpdate {
  name: string
  project_id?: number // Will create the new template from an existing project
}

export interface ProjectTemplatesTypeFilter {
  name?:string
}

export interface ProjectTemplatesFilterCondition extends ProjectTemplatesTypeFilter {
  _custom?: {
    [k: string]: {
      key?: Extract<keyof ProjectTemplatesTypeFilter, string>
      operator?:FilterOperator
      value: string | number | boolean | null | number[]
    }
  }
}

export interface ProjectTemplatesListConfig extends GenericListConfig {
  filter?:ProjectTemplatesFilterCondition
}
