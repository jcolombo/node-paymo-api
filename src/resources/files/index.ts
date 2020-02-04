import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { FilesListConfig, FilesTypeCreate, FilesTypeResponse, FilesTypeUpdate } from "./types"

export interface FilesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<FilesTypeResponse | null>
  list: (config?: FilesListConfig) => Promise<FilesTypeResponse[]>
  create: (d: FilesTypeCreate) => Promise<FilesTypeResponse | null>
  update: (id: number, data: FilesTypeUpdate) => Promise<FilesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Files extends AbstractResource implements FilesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'files')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as FilesTypeResponse | null
  }

  list = async (config: FilesListConfig = {}) => {
    const validConfig =
      !!config &&
      config.filter &&
      (config.filter.project_id ||
        config.filter.task_id ||
        config.filter.discussion_id ||
        config.filter.comment_id)
    if (!validConfig) {
      console.log('File list requires at least one valid filter condition')
      return []
    }
    return (await this.baseList(config)) as FilesTypeResponse[]
  }

  // Does not work yet, needs multipart upload system
  create = async (data: FilesTypeCreate) => {
    return (await this.baseCreate(data)) as FilesTypeResponse | null
  }

  update = async (id: number, data: FilesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as FilesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
