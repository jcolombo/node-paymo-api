import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ThreadsListConfig, ThreadsTypeResponse } from "./types"

export interface ThreadsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ThreadsTypeResponse | null>
  list: (config?: ThreadsListConfig) => Promise<ThreadsTypeResponse[]>
  //delete: (id: number) => Promise<boolean>
}

export class Threads extends AbstractResource implements ThreadsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'threads')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ThreadsTypeResponse | null
  }

  list = async (config: ThreadsListConfig = {}) => {
    return (await this.baseList(config)) as ThreadsTypeResponse[]
  }

  // delete = async (id: number) => {
  //   return await this.baseDelete(id)
  // }

}
