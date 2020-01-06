import { AuthInterface } from '../types'
import { Projects, ProjectsHandler } from './projects'
import { Clients, ClientsHandler } from './clients'
import { Users, UsersHandler } from "./users"
import { Bookings, BookingsHandler } from "./bookings"
import { ClientContacts, ClientContactsHandler } from "./clientcontacts"
import { Comments, CommentsHandler, Threads, ThreadsHandler } from "./comments"
import { Company, CompanyHandler } from "./company"
import { Discussions, DiscussionsHandler } from "./discussions"

export interface PaymoHandlersContainerInterface {
  projects?: ProjectsHandler
  clients?: ClientsHandler
  users?: UsersHandler
  bookings?: BookingsHandler
  clientcontacts?: ClientContacts
  comments?: Comments
  threads?: Threads
  company?: Company
  discussions?: Discussions
}

export interface PaymoResourceHandlerInterface {
  isApiUser: (a: string) => boolean
  projects: () => ProjectsHandler
  clients: () => ClientsHandler
  users: ()=> UsersHandler
  bookings: ()=>BookingsHandler
  clientcontacts: ()=>ClientContactsHandler
  comments: ()=>CommentsHandler
  threads: ()=>ThreadsHandler
  company: ()=>CompanyHandler
  discussions: ()=>DiscussionsHandler
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

  clientcontacts = (): ClientContactsHandler => {
    if (!this.handlers.clientcontacts) {
      this.handlers.clientcontacts = new ClientContacts(this.auth)
    }
    return this.handlers.clientcontacts
  }

  comments = (): CommentsHandler => {
    if (!this.handlers.comments) {
      this.handlers.comments = new Comments(this.auth)
    }
    return this.handlers.comments
  }

  threads = (): ThreadsHandler => {
    if (!this.handlers.threads) {
      this.handlers.threads = new Threads(this.auth)
    }
    return this.handlers.threads
  }

  company = (): CompanyHandler => {
    if (!this.handlers.company) {
      this.handlers.company = new Company(this.auth)
    }
    return this.handlers.company
  }

  discussions = (): DiscussionsHandler => {
    if (!this.handlers.discussions) {
      this.handlers.discussions = new Discussions(this.auth)
    }
    return this.handlers.discussions
  }
}

export default PaymoResourceHandler
