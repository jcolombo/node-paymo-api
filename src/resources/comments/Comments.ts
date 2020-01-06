import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { CommentsListConfig, CommentsTypeCreate, CommentsTypeResponse, CommentsTypeUpdate } from "./types"

export interface CommentsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<CommentsTypeResponse | null>
  list: (config?: CommentsListConfig) => Promise<CommentsTypeResponse[]>
  create: (d: CommentsTypeCreate) => Promise<CommentsTypeResponse | null>
  update: (id: number, data: CommentsTypeUpdate) => Promise<CommentsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Comments extends AbstractResource implements CommentsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'comments')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as CommentsTypeResponse | null
  }

  list = async (config: CommentsListConfig = {}) => {
    return (await this.baseList(config)) as CommentsTypeResponse[]
  }

  create = async (data: CommentsTypeCreate) => {
    return (await this.baseCreate(data)) as CommentsTypeResponse | null
  }

  update = async (id: number, data: CommentsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as CommentsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
