import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { MilestonesListConfig, MilestonesTypeCreate, MilestonesTypeResponse, MilestonesTypeUpdate } from "./types"

export interface MilestonesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<MilestonesTypeResponse | null>
  list: (config?: MilestonesListConfig) => Promise<MilestonesTypeResponse[]>
  create: (d: MilestonesTypeCreate) => Promise<MilestonesTypeResponse | null>
  update: (id: number, data: MilestonesTypeUpdate) => Promise<MilestonesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Milestones extends AbstractResource implements MilestonesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'milestones')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as MilestonesTypeResponse | null
  }

  list = async (config: MilestonesListConfig = {}) => {
    return (await this.baseList(config)) as MilestonesTypeResponse[]
  }

  create = async (data: MilestonesTypeCreate) => {
    return (await this.baseCreate(data)) as MilestonesTypeResponse | null
  }

  update = async (id: number, data: MilestonesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as MilestonesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
