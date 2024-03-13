import cn from 'classnames'

export default function Container({ children, className }) {
  return <div className={cn('container sm:mx-auto px-8 xl:px-24', className)}>{children}</div>
}
