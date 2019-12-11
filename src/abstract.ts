import { AuthInterface, GenericCustomFilterType, GenericFilterType, GenericListConfig } from "./types"
import XhrWrapper from './remote'

export interface AbstractResourceInterface {}

export class AbstractResource {
  protected auth: AuthInterface = { userApi: '', password: '' }
  protected resourceKey: string | null = null

  constructor(auth: AuthInterface, resourceKey: string) {
    this.auth = auth
    this.resourceKey = resourceKey
  }

  private constructUrl = (id?: number) => {
    return this.resourceKey + (id ? '/' + id : '')
  }

  private constructAuth = () => {
    return {
      username: this.auth.userApi,
      password: this.auth.password || 'apiKey',
    }
  }

  private constructHeaders = () => {
    return {
      Accept: 'application/json',
    }
  }

  private isTimestampKey = (k:string) => {
    return ['created_on', 'updated_on'].findIndex(i=>k===i) > -1
  }

  private toTimestamp = (dt:string) => {
    return Math.round((new Date(dt)).getTime() / 1000);
  }

  private processCustomFilters = (filters:GenericCustomFilterType) => {
    const whereVar = Object.keys(filters).map(k=>{
      const f = filters[k]
      const fVal = f.value
      const rKey = f.key ? f.key : k
      const rOp = f.operator ? f.operator : '='
      const rVal =
        this.isTimestampKey(rKey) && typeof fVal === 'string'
          ? this.toTimestamp(fVal)
          : fVal
      switch (f.operator) {
        case 'in':
        case 'not in':
          const v = Array.isArray(rVal) ? rVal : [rVal]
          return rKey + ' ' + rOp + ' (' + v.join(',') + ')'
          break
        case 'like':
        case 'not like':
          return rKey + ' ' + rOp + ' "' + rVal + '"'
          break
        default:
          return rKey + rOp + rVal
      }
    }).filter(s=>s!=='').join(' and ')
    return whereVar.trim()
  }

  private constructFilter = (
    filters: GenericFilterType
  ): string | null => {
    const whereVar = Object.keys(filters).map(k=>{
      const f = filters[k]
      if (k==='_custom') {
        return this.processCustomFilters(f)
      } else if (Array.isArray(f)) {
        return (k+' in ('+f.join(',')+')')
      } else if (f === null || typeof f === 'string' || typeof f === 'number' || typeof f === 'boolean') {
        const v = this.isTimestampKey(k) && typeof f === 'string' ? this.toTimestamp(f) : f
        return (k+'='+f).trim()
      }
      return ''
    }).filter(s=>s!=='').join(' and ')
    return whereVar.trim()
  }

  private constructInclude = (includes: string[]): string | null => {
    if (!includes.length) {
      return null
    }
    return includes.join(',')
  }

  baseGet = async (id: number): Promise<object | null> => {
    const response = await XhrWrapper.get({
      url: this.constructUrl(id),
      config: {
        auth: this.constructAuth(),
        headers: this.constructHeaders(),
      },
    })
    if (
      this.resourceKey &&
      response &&
      response.status >= 200 &&
      response.status < 300 &&
      response.data.hasOwnProperty(this.resourceKey)
    ) {
      const data = response.data[this.resourceKey]
      if (data.length > 0) {
        console.log('AXIOS RESPONSE', data[0])
        return data[0]
      }
    }
    return null
  }

  baseList = async (config: GenericListConfig = {}): Promise<object[]> => {
    const filter = this.constructFilter(config.filter ? config.filter : {})
    const include = this.constructInclude(config.include ? config.include : [])
    const response = await XhrWrapper.get({
      url: this.constructUrl(),
      config: {
        auth: this.constructAuth(),
        headers: this.constructHeaders(),
        params:
          filter || include
            ? {
                where: filter || undefined,
                include: include || undefined,
              }
            : undefined,
      },
    })
    if (
      this.resourceKey &&
      response &&
      response.status >= 200 &&
      response.status < 300 &&
      response.data.hasOwnProperty(this.resourceKey)
    ) {
      const data = response.data[this.resourceKey]
      console.log('AXIOS RESPONSE', data)
      return data
    }
    return []
  }

  baseCreate = async (data: object) => {
    const response = await XhrWrapper.post({
      url: this.constructUrl(),
      config: {
        auth: this.constructAuth(),
        headers: this.constructHeaders(),
      },
      data: data,
    })
    if (
      this.resourceKey &&
      response &&
      response.status >= 200 &&
      response.status < 300 &&
      response.data.hasOwnProperty(this.resourceKey)
    ) {
      const data = response.data[this.resourceKey]
      if (data.length > 0) {
        console.log('AXIOS RESPONSE', data[0])
        return data[0]
      }
    }
    return null
  }

  baseUpdate = async (id: number, data: object) => {
    const response = await XhrWrapper.put({
      url: this.constructUrl(id),
      config: {
        auth: this.constructAuth(),
        headers: this.constructHeaders(),
      },
      data: data,
    })
    if (
      this.resourceKey &&
      response &&
      response.status >= 200 &&
      response.status < 300 &&
      response.data.hasOwnProperty(this.resourceKey)
    ) {
      const data = response.data[this.resourceKey]
      if (data.length > 0) {
        console.log('AXIOS RESPONSE', data[0])
        return data[0]
      }
    }
    return null
  }

  baseDelete = async (id: number): Promise<boolean> => {
    const response = await XhrWrapper.delete({
      url: this.constructUrl(id),
      config: {
        auth: this.constructAuth(),
        headers: this.constructHeaders(),
      },
    })
    if (response && response.status >= 200 && response.status < 300) {
      return true
    }
    return false
  }
}
