<script lang="ts">
  let {
    path,
    size = 24,
    color = 'currentColor',
    className = '',
    spin = false,
    pulse = false,
    bounce = false,
    shake = false,
    flip = false,
    wobble = false,
    ariaLabel = '',
  }: {
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
  } = $props()

  let cls = $derived([className, spin && 'abs-spin', pulse && 'abs-pulse', bounce && 'abs-bounce', shake && 'abs-shake', flip && 'abs-flip', wobble && 'abs-wobble'].filter(Boolean).join(' '))
  let ariaHidden = $derived(ariaLabel ? undefined : 'true')
</script>

<span style="display: inline-flex; vertical-align: middle;" aria-hidden={ariaHidden}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
    class={cls}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel || undefined}
    focusable="false"
  >
    <path d={path} />
  </svg>
</span>
