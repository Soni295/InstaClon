export class InputElement {
  constructor(name, type ='text') {
    this.name = name
    this.placeholder = ''
    this.type = type
  }
} 

export const doInit = arr => arr.reduce((acc, cur) => 
  ({...acc, [cur.name]: ''}) , {})

