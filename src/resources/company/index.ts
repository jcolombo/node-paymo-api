import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { CompanyTypeResponse, CompanyTypeUpdate } from "./types"

export interface CompanyHandler extends AbstractResourceInterface {
  get: () => Promise<CompanyTypeResponse | null>
  update: (data: CompanyTypeUpdate) => Promise<CompanyTypeResponse | null>
}

export class Company extends AbstractResource implements CompanyHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'company')
  }

  get = async () => {
    return (await this.baseGet(null)) as CompanyTypeResponse | null
  }

  update = async (data: CompanyTypeUpdate) => {
    return (await this.baseUpdate(null, data)) as CompanyTypeResponse | null
  }

}
