export const handleChange = (event, set) => {
  const {name, value} = event.target
  set({name, value})
}

export const reducer = (state, event) =>
  ({...state, [event.name]: event.value})
