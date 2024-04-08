import { program } from ".."
import { sleep } from "../helpers/utils"

/**
 * An interface for the modal button
 */
export interface ModalButton {
  text: string
  active?: boolean

  callback?(): void
}

export interface ModalOptions {
  imageURL?: string
  heading?: (HTMLElement | string)[]
  headingStyle?: string
  body?: (HTMLElement | string)[]
  bodyStyle?: string
  buttonList?: ModalButton[]
  callback?(arg0: Modal, arg1: HTMLElement): void
}

export class Modal {
  public imageURL?: string
  public heading?: (HTMLElement | string)[]
  public headingStyle?: string
  public body?: (HTMLElement | string)[]
  public bodyStyle?: string
  public buttonList?: ModalButton[]
  public callback?(arg0: Modal, arg1: HTMLElement): void

  private modal: HTMLDivElement | null = null

  public constructor(modalOptions?: ModalOptions) {
    this.imageURL = modalOptions?.imageURL || ''
    this.heading = modalOptions?.heading || ['']
    this.headingStyle = modalOptions?.headingStyle || ''
    this.body = modalOptions?.body || ['']
    this.bodyStyle = modalOptions?.bodyStyle || ''
    this.buttonList = modalOptions?.buttonList || []
    this.callback = modalOptions?.callback || null

    let element = document.getElementById(program.NAME + '-modal')
    if (element == null) {
      var style = document.createElement('style')
      style.id = program.NAME + '-modal'
      style.innerHTML = `.${program.NAME}-modal-overlay{display:none!important;opacity:0!important;transition:all ease .1s!important;position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1000!important;background:rgba(0,0,0,.65)!important;justify-content:center!important;align-items:center!important}.${program.NAME}-modal{transition:width ease-in-out .1s!important;display:inline-block!important;width:400px!important;padding:1.6px!important;z-index:1001!important}.${program.NAME}-modal select{margin-left:.8px!important;border:solid 1px #dbdbdb!important;border-radius:3px!important;color:#262626!important;outline:0!important;padding:3px!important;text-align:center!important}@media (min-width:736px){.${program.NAME}-modal{width:500px!important}}.${program.NAME}-modal-content{position:relative;display:flex;flex-direction:column;width:100%!important;pointer-events:auto!important;background-clip:padding-box!important;outline:0!important}.${program.NAME}-modal-header{color:#fff!important;background-color:#fd1d1d!important;background-image:linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)!important;border-top-left-radius:12px!important;border-top-right-radius:12px!important;padding:0 16px 0 16px!important}.${program.NAME}-modal-header h5{color:#fff!important;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif!important;font-size:16px!important;margin:revert!important}.${program.NAME}-modal-header h5:nth-child(2){margin-top:-15px!important;margin-bottom:20px!important}.${program.NAME}-modal-body{background:#fff!important;color:black!important;position:relative!important;-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important;padding:16px!important}.${program.NAME}-modal-body > img{background: black;object-fit:scale-down}.${program.NAME}-modal-body p{display:block!important;margin:revert!important;margin-block-start:1em!important;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif!important;font-size:16px!important}.${program.NAME}-modal-footer{background-color:#fff!important;border-top:1px solid #dbdbdb!important;border-left:0!important;border-right:0!important;border-bottom-left-radius:12px!important;border-bottom-right-radius:12px!important;line-height:1.5!important;min-height:48px!important;padding:4px 8px!important;user-select:none!important;display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important;-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:center!important}.${program.NAME}-modal-footer button{width:100%!important;min-height:39px!important;background-color:transparent!important;border:0!important;outline:0!important;cursor:pointer!important;font-family:"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif!important;font-size:16px!important}.${program.NAME}-modal-footer button.active{color:#0095e2!important}.${program.NAME}-modal-show{opacity:1!important}.${program.NAME}-modal-visible{display:flex!important}#${program.NAME}-bulk-download-indicator{text-align:center!important}.${program.NAME}-modal-db {
    color: #fff!important;
    background: linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d)!important;
    display: block;
    padding: 0.8rem;
    width: 100%;
    border: none;
    cursor: pointer;
}
.${program.NAME}-modal-db:focus {
  outline: none;
  background: linear-gradient(45deg, rgba(64, 93, 230, 0.5), rgba(88, 81, 219, 0.5), rgba(131, 58, 180, 0.5), rgba(193, 53, 132, 0.5), rgba(225, 48, 108, 0.5), rgba(253, 29, 29, 0.5))!important;
}
.${program.NAME}-modal-header {
  text-align: center;
}
.${program.NAME}-modal-header h5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-text-left {
  margin-right: auto;
}
.header-text-right {
  margin-left: auto;
}
.header-text-middle {
  margin: 0;
}
.header-text-right:last-child {
  margin-right: 30px;
}
.${program.NAME}-settings {
  cursor: pointer;
  display: inline-block;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.3rem;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s;
  width: 40px;
  height: 40px;
  top: 16px;
  right: 16px;
  position: absolute;
}
.${program.NAME}-settings:hover {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}
.${program.NAME}-modal-body input {
  color: black!important;
}
.${program.NAME}-modal-body button:not([data-index]) {
  border-top-left-radius:0!important;
  border-bottom-left-radius:0!important;
}`
      document.head.appendChild(style)
    }
  }

  public get element(): HTMLDivElement | null {
    return this.modal
  }

  private createModal(): HTMLDivElement {
    const modalElement = document.createElement('div')
    modalElement.classList.add(program.NAME + '-modal-overlay')

    const modal = document.createElement('div')
    modal.classList.add(program.NAME + '-modal')
    modalElement.appendChild(modal)

    const modalContent = document.createElement('div')
    modalContent.classList.add(program.NAME + '-modal-content')
    modal.appendChild(modalContent)

    const modalHeader = document.createElement('div')
    modalHeader.classList.add(program.NAME + '-modal-header')
    if (this.headingStyle.length > 0) {
      modalHeader.setAttribute('style', this.headingStyle)
    }
    modalContent.appendChild(modalHeader)

    this.heading.forEach(heading => {
      if (typeof heading === 'string' && !/<\/?[a-z][\s\S]*>/i.test(heading)) {
        const modalTitle = document.createElement('h5')
        modalTitle.innerHTML = heading
        modalHeader.appendChild(modalTitle)
      } else {
        if (/<\/?[a-z][\s\S]*>/i.test(heading as string)) {
          let i
          let a = document.createElement('div')
          let b = document.createDocumentFragment()
          a.innerHTML = heading as string
          while (i = a.firstChild) {
            b.appendChild(i)
          }
          modalHeader.appendChild(b)
        } else {
          modalHeader.appendChild(heading as HTMLElement)
        }
      }
    })

    const modalBody = document.createElement('div')
    modalBody.classList.add(program.NAME + '-modal-body')
    if (this.bodyStyle.length > 0) {
      modalBody.setAttribute('style', this.bodyStyle)
    }
    modalContent.appendChild(modalBody)

    if (this.imageURL.length > 0) {
      const imageWrapper = document.createElement('div')
      modalContent.appendChild(imageWrapper)

      const image = document.createElement('img')
      image.setAttribute('height', '76px')
      image.setAttribute('width', '76px')
      image.style.margin = 'auto'
      image.style.paddingBottom = '20px'
      image.setAttribute('src', this.imageURL)
      imageWrapper.appendChild(image)
    }

    this.body.forEach(content => {
      if (typeof content === 'string' && !/<\/?[a-z][\s\S]*>/i.test(content)) {
        const modalText = document.createElement('p')
        modalText.innerText = content
        modalBody.appendChild(modalText)
      } else {
        if (/<\/?[a-z][\s\S]*>/i.test(content as string)) {
          let i
          let a = document.createElement('div')
          let b = document.createDocumentFragment()
          a.innerHTML = content as string
          while (i = a.firstChild) {
            b.appendChild(i)
          }
          modalBody.appendChild(b)
        } else {
          modalBody.appendChild(content as HTMLElement)
        }
      }
    })

    if (this.buttonList.length > 0) {
      const modalFooter = document.createElement('div')
      modalFooter.classList.add(program.NAME + '-modal-footer')
      modalContent.appendChild(modalFooter)

      this.buttonList.forEach((button: ModalButton) => {
        const modalButton = document.createElement('button')
        modalButton.classList.add(program.NAME + '-modal-button')
        modalButton.innerText = button.text

        if (button.active) {
          modalButton.classList.add('active')
        }

        modalButton.onclick = () => {
          if (button && button.callback) {
            button.callback()
          }

          this.close.bind(this)()
        }
        modalFooter.appendChild(modalButton)
      })
    } else {
      modalContent.style.paddingBottom = '4px;'
    }

    return modalElement
  }

  public async open(): Promise<void> {
    if (this.modal) {
      await this.close()
    }

    this.modal = this.createModal()
    document.body.appendChild(this.modal)
    this.modal.classList.add(program.NAME + '-modal-visible')
    setTimeout(() => {
      this.modal.classList.add(program.NAME + '-modal-show')
    })

    // Re-trigger the callback function if it exists
    if (this?.callback) {
      this.callback(this, this.modal)
    }
  }

  public async close(): Promise<void> {
    if (!this.modal) {
      return
    }

    this.modal.classList.remove(program.NAME + '-modal-show')
    await sleep(100)
    this.modal.classList.remove(program.NAME + '-modal-visible')
    this.modal.parentNode.removeChild(this.modal)
    this.modal = null

    // Remove previous executed bookmarklet stuff
    const idsToRemove = [
      program.NAME + '-cssGeneral',
      program.NAME + '-cssSlideOn',
      program.NAME + '-cssCarouselSlider'
    ]
    // Remove <style> tags from the entire DOM
    const styleTags = document.querySelectorAll("style[id]")
    styleTags.forEach(styleTag => {
      if (idsToRemove.includes(styleTag.id)) {
        styleTag.parentNode.removeChild(styleTag)
      }
    })
  }

  public async refresh(): Promise<void> {
    if (this.modal) {
      this.modal.parentNode.removeChild(this.modal)
      this.modal = null
    }
    await this.open()

    // Re-trigger the callback function if it exists
    if (this?.callback) {
      this.callback(this, this.modal.querySelector('.' + program.NAME + '-modal-body')!)
    }
  }
}