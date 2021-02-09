const Separator = ({children, ...rest}) => {
  return(
    <div className="Separator" {...rest}>

      <div></div>

      <div>{children}</div>

      <div></div>

    </div>
  )
}
export default Separator
