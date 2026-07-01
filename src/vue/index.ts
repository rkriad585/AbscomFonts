import { defineComponent, h } from 'vue'

export const AbsIcon = defineComponent({
  name: 'AbsIcon',
  props: {
    path: { type: String, required: true },
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    className: { type: String, default: '' },
    spin: Boolean,
    pulse: Boolean,
    bounce: Boolean,
    shake: Boolean,
    flip: Boolean,
    wobble: Boolean,
    ariaLabel: { type: String, default: '' },
  },
  setup(props) {
    return () => {
      const cls = [
        props.className,
        props.spin && 'abs-spin',
        props.pulse && 'abs-pulse',
        props.bounce && 'abs-bounce',
        props.shake && 'abs-shake',
        props.flip && 'abs-flip',
        props.wobble && 'abs-wobble',
      ]
        .filter(Boolean)
        .join(' ')

      const ariaHidden = props.ariaLabel ? undefined : 'true'

      return h(
        'span',
        { style: { display: 'inline-flex', verticalAlign: 'middle' }, 'aria-hidden': ariaHidden },
        [
          h(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 512 512',
              width: props.size,
              height: props.size,
              fill: props.color,
              class: cls || undefined,
              role: props.ariaLabel ? 'img' : undefined,
              'aria-label': props.ariaLabel || undefined,
              focusable: 'false',
            },
            [h('path', { d: props.path })],
          ),
        ],
      )
    }
  },
})
