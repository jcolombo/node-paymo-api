import { AbstractResource, AbstractResourceInterface } from '../../abstract'
import { AuthInterface } from "../../types"
import { ExpensesListConfig, ExpensesTypeCreate, ExpensesTypeResponse, ExpensesTypeUpdate } from "./types"

export interface ExpensesHandler extends AbstractResourceInterface {
  get: (id: number) => Promise<ExpensesTypeResponse | null>
  list: (config?: ExpensesListConfig) => Promise<ExpensesTypeResponse[]>
  create: (d: ExpensesTypeCreate) => Promise<ExpensesTypeResponse | null>
  update: (id: number, data: ExpensesTypeUpdate) => Promise<ExpensesTypeResponse | null>
  delete: (id: number) => Promise<boolean>
}

export class Expenses extends AbstractResource implements ExpensesHandler {
  constructor(auth: AuthInterface) {
    super(auth, 'expenses')
  }

  get = async (id: number) => {
    return (await this.baseGet(id)) as ExpensesTypeResponse | null
  }

  list = async (config: ExpensesListConfig = {}) => {
    return (await this.baseList(config)) as ExpensesTypeResponse[]
  }

  create = async (data: ExpensesTypeCreate) => {
    return (await this.baseCreate(data)) as ExpensesTypeResponse | null
  }

  update = async (id: number, data: ExpensesTypeUpdate) => {
    return (await this.baseUpdate(id, data)) as ExpensesTypeResponse | null
  }

  delete = async (id: number) => {
    return await this.baseDelete(id)
  }

}
