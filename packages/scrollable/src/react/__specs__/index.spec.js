import { render } from '@testing-library/react'
import React from 'react'

import Scrollable from '../index.js'

describe('Scrollable', () => {
  it('renders', () => {
    const { getByTestId } = render(<Scrollable data-testid="undertest" />)

    expect(getByTestId('undertest')).toBeInTheDocument()
  })

  it('forwards refs', () => {
    const ref = React.createRef()

    render(<Scrollable ref={ref} />)

    expect(ref.current).not.toBeNull()
  })
})
