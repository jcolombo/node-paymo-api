import { AuthInterface } from '../types'
import { Projects, ProjectsHandler } from './projects'
import { Clients, ClientsHandler } from './clients'
import { Users, UsersHandler } from "./users"
import { Bookings, BookingsHandler } from "./bookings"

export interface PaymoHandlersContainerInterface {
  projects?: ProjectsHandler
  clients?: ClientsHandler
  users?: UsersHandler
  bookings?: BookingsHandler
}

export interface PaymoResourceHandlerInterface {
  isApiUser: (a: string) => boolean
  projects: () => ProjectsHandler
  clients: () => ClientsHandler
  users: ()=> UsersHandler
  bookings: ()=>BookingsHandler
}

const PaymoResourceHandler = class implements PaymoResourceHandlerInterface {
  auth: AuthInterface = {
    userApi: '',
    password: '',
  }

  handlers: PaymoHandlersContainerInterface = {}

  constructor(u: string, p: string | null) {
    this.auth = {
      userApi: u,
      password: p || 'paymoApi',
    }
  }

  isApiUser = (apiUser: string) => {
    return this.auth.userApi === apiUser
  }

  projects = (): ProjectsHandler => {
    if (!this.handlers.projects) {
      this.handlers.projects = new Projects(this.auth)
    }
    return this.handlers.projects
  }

  clients = (): ClientsHandler => {
    if (!this.handlers.clients) {
      this.handlers.clients = new Clients(this.auth)
    }
    return this.handlers.clients
  }

  users = (): UsersHandler => {
    if (!this.handlers.users) {
      this.handlers.users = new Users(this.auth)
    }
    return this.handlers.users
  }

  bookings = (): BookingsHandler => {
    if (!this.handlers.bookings) {
      this.handlers.bookings = new Bookings(this.auth)
    }
    return this.handlers.bookings
  }
}

export default PaymoResourceHandler
