import axios, { AxiosResponse } from "axios"
// export interface XhrWrapperInterface {
//   get:()=>void
//   post:()=>void
//   put:()=>void
//   delete:()=>void
// }

const paymoAxios = axios.create({
  baseURL: 'https://app.paymoapp.com/api/',
  headers: { Accept: 'application/json' },
})

class XhrWrapper {
  static get = async (d: any): Promise<AxiosResponse | null> => {
    console.log('AXIOS GET CALL', d)
    return await paymoAxios.get(d.url, d.config).catch((e: Error) => {
      throw new Error('PAYMO GET FAILED :' + e)
    })
  }

  static post = async (d: any) => {
    console.log('AXIOS POST CALL', d)
    return await paymoAxios.post(d.url, d.data, d.config).catch((e: Error) => {
      throw new Error('PAYMO POST FAILED :' + e)
    })
  }

  static put = async (d: any) => {
    console.log('AXIOS PUT CALL', d)
    return await paymoAxios.put(d.url, d.data, d.config).catch((e: Error) => {
      throw new Error('PAYMO PUT FAILED :' + e)
    })
  }

  static delete = async (d: any): Promise<AxiosResponse | null> => {
    console.log('AXIOS DELETE CALL', d)
    return await paymoAxios.delete(d.url, d.config).catch((e: Error) => {
      throw new Error('PAYMO DELETE FAILED :' + e)
    })
  }

  static test = async () => {
    const PAYMOAPI = 'aa7498337ab7407e579ad01a08d1868b'
    const url = 'projects?include=client,tasks.entries'

    const d = {
      auth: {
        username: PAYMOAPI,
        password: 'abc123',
      },
      headers: {
        Accept: 'application/json',
      },
    }

    const instance = axios.create()
    instance.defaults.headers.common = {}
    instance.defaults.headers.common.accept = 'application/json'

    //const { data } = await instance.get(generatedUrl);

    console.log('AXIOS DEL CALL', d)

    const response = await instance.get(url, d).catch((e: Error) => {
      throw new Error('GET PAYMO FAILED :' + e)
    })

    console.log('DEL PAYMO RESPONSE', response)
  }
}

export default XhrWrapper
