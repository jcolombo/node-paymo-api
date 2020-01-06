import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { DiscussionsListConfig, DiscussionsTypeCreate, DiscussionsTypeResponse, DiscussionsTypeUpdate } from "./types"

export interface DiscussionsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<DiscussionsTypeResponse | null>
  list: (config?: DiscussionsListConfig) => Promise<DiscussionsTypeResponse[]>
  create: (d: DiscussionsTypeCreate) => Promise<DiscussionsTypeResponse | null>
  update: (id: number, data: DiscussionsTypeUpdate) => Promise<DiscussionsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Discussions extends AbstractResource implements DiscussionsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'discussions')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as DiscussionsTypeResponse | null
  }

  list = async (config: DiscussionsListConfig = {}) => {
    return (await this.baseList(config)) as DiscussionsTypeResponse[]
  }

  create = async (data: DiscussionsTypeCreate) => {
    return (await this.baseCreate(data)) as DiscussionsTypeResponse | null
  }

  update = async (id: number, data: DiscussionsTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as DiscussionsTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
