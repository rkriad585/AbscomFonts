import React from 'react'

export interface AbsIconProps {
  path: string
  size?: number
  color?: string
  className?: string
  spin?: boolean
  pulse?: boolean
  bounce?: boolean
  shake?: boolean
  flip?: boolean
  wobble?: boolean
  ariaLabel?: string
}

function modifiers(
  spin?: boolean, pulse?: boolean, bounce?: boolean,
  shake?: boolean, flip?: boolean, wobble?: boolean,
): string {
  return [
    spin && 'abs-spin',
    pulse && 'abs-pulse',
    bounce && 'abs-bounce',
    shake && 'abs-shake',
    flip && 'abs-flip',
    wobble && 'abs-wobble',
  ].filter(Boolean).join(' ')
}

export function AbsIcon({
  path,
  size = 24,
  color = 'currentColor',
  className = '',
  spin,
  pulse,
  bounce,
  shake,
  flip,
  wobble,
  ariaLabel,
  ...rest
}: AbsIconProps): React.ReactElement {
  const cls = [className, modifiers(spin, pulse, bounce, shake, flip, wobble)].filter(Boolean).join(' ') || undefined
  const ariaHidden = ariaLabel ? undefined : true

  return (
    <span {...rest} style={{ display: 'inline-flex', verticalAlign: 'middle' }} aria-hidden={ariaHidden}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill={color}
        className={cls}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        focusable="false"
      >
        <path d={path} />
      </svg>
    </span>
  )
}
