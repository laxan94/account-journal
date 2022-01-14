import classNames from "classnames"

const className = "font-bold"

const Button = (props) => {
  const { ...otherProps } = props

  return <button {...otherProps} className={classNames(className)} />
}

export default Button
