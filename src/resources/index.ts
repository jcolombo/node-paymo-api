import { AuthInterface } from '../types'
import { Projects, ProjectsHandler } from './projects'
import { Clients, ClientsHandler } from './clients'
import { Users, UsersHandler } from "./users"
import { Bookings, BookingsHandler } from "./bookings"
import { ClientContacts, ClientContactsHandler } from "./clientcontacts"
import { Comments, CommentsHandler, Threads, ThreadsHandler } from "./comments"
import { Company, CompanyHandler } from "./company"
import { Discussions, DiscussionsHandler } from "./discussions"
import { EstimateTemplates, EstimateTemplatesHandler } from "./estimatetemplates"
import { Estimates, EstimatesHandler } from "./estimates"
import { Expenses, ExpensesHandler } from "./expenses"
import { Files, FilesHandler } from "./files"
import { InvoiceTemplates, InvoiceTemplatesHandler } from "./invoicetemplates"
import { Invoices, InvoicesHandler } from "./invoices"
import { Milestones, MilestonesHandler } from "./milestones"
import { ProjectTemplates, ProjectTemplatesHandler } from "./projecttemplates"
import { ProjectStatuses, ProjectStatusesHandler } from "./projectstatuses"
import { Reports, ReportsHandler } from "./reports"
import { Sessions, SessionsHandler } from "./sessions"
import { TaskLists, TaskListsHandler } from "./tasklists"
import { Tasks, TasksHandler } from "./tasks"
import { TimeEntries, TimeEntriesHandler } from "./entries"
import { UserTasks, UserTasksHandler } from "./usertasks"
import { Workflows, WorkflowsHandler } from "./workflows"
import { WorkflowStatuses, WorkflowStatusesHandler } from "./workflowstatuses"

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
  estimatetemplates?: EstimateTemplates
  estimates?: Estimates
  expenses?: Expenses
  files?: Files
  invoicetemplates?: InvoiceTemplates
  invoices?: Invoices
  milestones?: Milestones
  projecttemplates?: ProjectTemplates
  projectstatuses?: ProjectStatuses
  reports?: Reports
  sessions?: Sessions
  tasklists?: TaskLists
  tasks?: Tasks
  entries?: TimeEntries
  usertasks?: UserTasks
  workflows?: Workflows
  workflowstatuses?: WorkflowStatuses
}

export interface PaymoResourceHandlerInterface {
  isApiUser: (a: string) => boolean
  projects: () => ProjectsHandler
  clients: () => ClientsHandler
  users: () => UsersHandler
  bookings: () => BookingsHandler
  clientcontacts: () => ClientContactsHandler
  comments: () => CommentsHandler
  threads: () => ThreadsHandler
  company: () => CompanyHandler
  discussions: () => DiscussionsHandler
  estimatetemplates: () => EstimateTemplatesHandler
  estimates: () => EstimatesHandler
  expenses: () => ExpensesHandler
  files: () => FilesHandler
  invoicetemplates: () => InvoiceTemplatesHandler
  invoices: () => InvoicesHandler
  milestones: () => MilestonesHandler
  projecttemplates: ()=> ProjectTemplatesHandler
  projectstatuses: () => ProjectStatusesHandler
  reports: () => ReportsHandler
  sessions: () => SessionsHandler
  tasklists: ()=>TaskListsHandler
  tasks: ()=>TasksHandler
  entries: ()=>TimeEntriesHandler
  usertasks: ()=>UserTasksHandler
  workflows: ()=>WorkflowsHandler
  workflowstatuses: ()=>WorkflowStatusesHandler
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

  estimatetemplates = (): EstimateTemplatesHandler => {
    if (!this.handlers.estimatetemplates) {
      this.handlers.estimatetemplates = new EstimateTemplates(this.auth)
    }
    return this.handlers.estimatetemplates
  }

  estimates = (): EstimatesHandler => {
    if (!this.handlers.estimates) {
      this.handlers.estimates = new Estimates(this.auth)
    }
    return this.handlers.estimates
  }

  expenses = (): ExpensesHandler => {
    if (!this.handlers.expenses) {
      this.handlers.expenses = new Expenses(this.auth)
    }
    return this.handlers.expenses
  }

  files = (): FilesHandler => {
    if (!this.handlers.files) {
      this.handlers.files = new Files(this.auth)
    }
    return this.handlers.files
  }

  invoicetemplates = (): InvoiceTemplatesHandler => {
    if (!this.handlers.invoicetemplates) {
      this.handlers.invoicetemplates = new InvoiceTemplates(this.auth)
    }
    return this.handlers.invoicetemplates
  }

  invoices = (): InvoicesHandler => {
    if (!this.handlers.invoices) {
      this.handlers.invoices = new Invoices(this.auth)
    }
    return this.handlers.invoices
  }

  milestones = (): MilestonesHandler => {
    if (!this.handlers.milestones) {
      this.handlers.milestones = new Milestones(this.auth)
    }
    return this.handlers.milestones
  }

  projecttemplates = (): ProjectTemplatesHandler => {
    if (!this.handlers.projecttemplates) {
      this.handlers.projecttemplates = new ProjectTemplates(this.auth)
    }
    return this.handlers.projecttemplates
  }

  projectstatuses = (): ProjectStatusesHandler => {
    if (!this.handlers.projectstatuses) {
      this.handlers.projectstatuses = new ProjectStatuses(this.auth)
    }
    return this.handlers.projectstatuses
  }

  reports = (): ReportsHandler => {
    if (!this.handlers.reports) {
      this.handlers.reports = new Reports(this.auth)
    }
    return this.handlers.reports
  }

  sessions = (): SessionsHandler => {
    if (!this.handlers.sessions) {
      this.handlers.sessions = new Sessions(this.auth)
    }
    return this.handlers.sessions
  }

  tasklists = (): TaskListsHandler => {
    if (!this.handlers.tasklists) {
      this.handlers.tasklists = new TaskLists(this.auth)
    }
    return this.handlers.tasklists
  }

  tasks = (): TasksHandler => {
    if (!this.handlers.tasks) {
      this.handlers.tasks = new Tasks(this.auth)
    }
    return this.handlers.tasks
  }

  entries = (): TimeEntriesHandler => {
    if (!this.handlers.entries) {
      this.handlers.entries = new TimeEntries(this.auth)
    }
    return this.handlers.entries
  }

  usertasks = (): UserTasksHandler => {
    if (!this.handlers.usertasks) {
      this.handlers.usertasks = new UserTasks(this.auth)
    }
    return this.handlers.usertasks
  }

  workflows = (): WorkflowsHandler => {
    if (!this.handlers.workflows) {
      this.handlers.workflows = new Workflows(this.auth)
    }
    return this.handlers.workflows
  }

  workflowstatuses = (): WorkflowStatusesHandler => {
    if (!this.handlers.workflowstatuses) {
      this.handlers.workflowstatuses = new WorkflowStatuses(this.auth)
    }
    return this.handlers.workflowstatuses
  }
}

export default PaymoResourceHandler
