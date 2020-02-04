import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ProjectTemplatesListConfig, ProjectTemplatesTypeCreate, ProjectTemplatesTypeResponse, ProjectTemplatesTypeUpdate } from "./types"

// @todo Add the projecttemplatestasklists and projecttemplatestasks objects

export interface ProjectTemplatesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ProjectTemplatesTypeResponse | null>
  list: (config?: ProjectTemplatesListConfig) => Promise<ProjectTemplatesTypeResponse[]>
  create: (d: ProjectTemplatesTypeCreate) => Promise<ProjectTemplatesTypeResponse | null>
  update: (id: number, data: ProjectTemplatesTypeUpdate) => Promise<ProjectTemplatesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class ProjectTemplates extends AbstractResource implements ProjectTemplatesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'projecttemplates', 'project_templates')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ProjectTemplatesTypeResponse | null
  }

  list = async (config: ProjectTemplatesListConfig = {}) => {
    return (await this.baseList(config)) as ProjectTemplatesTypeResponse[]
  }

  create = async (data: ProjectTemplatesTypeCreate) => {
    return (await this.baseCreate(data)) as ProjectTemplatesTypeResponse | null
  }

  update = async (id: number, data: ProjectTemplatesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ProjectTemplatesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
