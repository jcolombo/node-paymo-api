import PaymoResourceHandler, { PaymoResourceHandlerInterface } from "./resources"

class Paymo {
  static instances: PaymoResourceHandlerInterface[] = []

  static connect = (
    userOrApi: string,
    password: string | null = null
  ): PaymoResourceHandlerInterface => {
    let handler:
      | PaymoResourceHandlerInterface
      | undefined = Paymo.instances.find(i => i.isApiUser(userOrApi))
    if (!handler) {
      handler = new PaymoResourceHandler(userOrApi, password)
      Paymo.instances.push(handler)
    }
    return handler
  }
}

export default Paymo


