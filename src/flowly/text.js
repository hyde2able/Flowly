export default class FlowlyText {
  constructor(text, options) {
    this.opts = options
    this.elem = this._createText(text)
  }

  _createText(text) {
    const color  = text.color  || this.opts.text.color
    const shadow = text.shadow || this.opts.text.shadow
    const size   = text.size   || this.opts.text.size
    const weight = text.weight || this.opts.text.weight
    const t = document.createElement('span')

    t.className        = text.className || this.opts.text.className
    t.style.position   = 'absolute'
    t.style.fontSize   = size + 'px'
    t.style.fontWeight = weight
    t.style.color      = color
    t.style.textShadow = `-2px -2px 0px ${shadow}, -2px 2px 0px ${shadow}, 2px -2px 0px ${shadow}, 2px 2px 0px ${shadow}`
    t.style.whiteSpace = this.opts.text.whiteSpace
    t.style.zIndex     = this.opts.text.zIndex

    t.innerText = text.body

    return t
  }

  addAnimation(effect, timing, cb) {
    this.elem.animate(effect, timing).onfinish = () => {
      cb()
    }
  }

  elem() {
    return this.elem
  }

  hide() {
    this.text.style.display = 'none'
  }

  show() {
    this.text.style.display = 'block'
  }
}
