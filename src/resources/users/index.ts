import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { UsersListConfig, UserTypeCreate, UserTypeResponse, UserTypeUpdate } from "./types"

export interface UsersHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<UserTypeResponse | null>
  list: (config?: UsersListConfig) => Promise<UserTypeResponse[]>
  create: (d: UserTypeCreate) => Promise<UserTypeResponse | null>
  update: (id: number, data: UserTypeUpdate) => Promise<UserTypeResponse | null>
  delete: (id: number) => Promise<boolean>
  retire: (id: number) => Promise<UserTypeResponse | null>
  activate: (id: number) => Promise<UserTypeResponse | null>
}

export class Users extends AbstractResource implements UsersHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'users')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as UserTypeResponse | null
  }

  list = async (config: UsersListConfig = {}) => {
    return (await this.baseList(config)) as UserTypeResponse[]
  }

  create = async (data: UserTypeCreate) => {
    return (await this.baseCreate(data)) as UserTypeResponse | null
  }

  update = async (id: number, data: UserTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as UserTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

  retire = async (id: number) => {
    return await this.update(id, {active:false})
  }

  activate = async (id: number) => {
    return await this.update(id, {active:true})
  }

}
