import React, {PureComponent} from 'react'
import classNames from 'classnames'

import {TemplateValue} from 'src/types'

interface Props {
  item: TemplateValue
  onClick: (item: TemplateValue) => void
}

const LI_HEIGHT = 28
const LI_MARGIN_BOTTOM = 2

class TemplatePreviewListItem extends PureComponent<Props> {
  public render() {
    const {item} = this.props

    return (
      <li
        onClick={this.handleClick}
        style={{
          height: `${LI_HEIGHT}px`,
          marginBottom: `${LI_MARGIN_BOTTOM}px`,
        }}
        className={classNames('temp-builder--results-item', {
          active: this.isDefault,
        })}
      >
        {item.value}
        {this.renderIndicator()}
      </li>
    )
  }

  private get isDefault(): boolean {
    return this.props.item.selected
  }

  private renderIndicator(): JSX.Element {
    if (this.isDefault) {
      return <div>{' default'}</div>
    }
  }

  private handleClick = (): void => {
    if (this.isDefault) {
      return
    }

    this.props.onClick(this.props.item)
  }
}

export default TemplatePreviewListItem
