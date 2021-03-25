export const Btn = ({className, disable=false, value='btn', type='submit'}) => {
  return(
    <input
      disabled={disable}
      className={'btn ' + className}
      type={type} value={value}
    />
  )
}
