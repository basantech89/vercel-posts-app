'use client'

import type { FC, ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'button'> & {
  onClick?: () => Promise<void> | void
}

const Button: FC<Props> = props => {
  return (
    <button {...props} onClick={async () => await props.onClick?.()}>
      button
    </button>
  )
}

export default Button
