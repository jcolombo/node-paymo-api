
interface xx {
  a:number
}

const xxx = (a:xx) : number=>{
  return a.a * 100
}

const paymoApp = {
  x: 3,
  y: xxx({a:5})
}



export default paymoApp
