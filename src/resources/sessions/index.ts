import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { SessionsListConfig, SessionsTypeCreate, SessionsTypeResponse, SessionsTypeUpdate } from "./types"

export interface SessionsHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<SessionsTypeResponse | null>
  list: (config?: SessionsListConfig) => Promise<SessionsTypeResponse[]>
  create: (d: SessionsTypeCreate) => Promise<SessionsTypeResponse | null>
  update: (id: number, data: SessionsTypeUpdate) => Promise<SessionsTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Sessions extends AbstractResource implements SessionsHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'sessions')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as SessionsTypeResponse | null
  }

  list = async (config: SessionsListConfig = {}) => {
    return (await this.baseList(config)) as SessionsTypeResponse[]
  }

  create = async (data: SessionsTypeCreate) => {
    return (await this.baseCreate(data)) as SessionsTypeResponse | null
  }

  // There is no update method for sessions. Create, List, Get, or Delete only
  update = async (id: number, data: SessionsTypeUpdate) => {
    return null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
