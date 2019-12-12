import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { _Template_ListConfig, _Template_TypeCreate, _Template_TypeResponse, _Template_TypeUpdate } from "./types"

export interface _Template_Handler extends AbstractResourceInterface {
  get: (id: number) => Promise<_Template_TypeResponse | null>
  list: (config?: _Template_ListConfig) => Promise<_Template_TypeResponse[]>
  create: (d: _Template_TypeCreate) => Promise<_Template_TypeResponse | null>
  update: (id: number, data: _Template_TypeUpdate) => Promise<_Template_TypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class _Template_ extends AbstractResource implements _Template_Handler {
  constructor(auth: AuthInterface) {
    super(auth, '_template_')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as _Template_TypeResponse | null
  }

  list = async (config: _Template_ListConfig = {}) => {
    return (await this.baseList(config)) as _Template_TypeResponse[]
  }

  create = async (data: _Template_TypeCreate) => {
    return (await this.baseCreate(data)) as _Template_TypeResponse | null
  }

  update = async (id: number, data: _Template_TypeUpdate) => {
    return (await this.baseUpdate(id, data)) as _Template_TypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
