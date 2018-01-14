import {describe, expect} from '@dxcli/dev-test'

import {errtermwidth, stdtermwidth} from '..'

describe('termwidth', () => {
  it('has errtermwidth > 1', () => {
    expect(errtermwidth).to.be.at.least(1)
  })
  it('has stdtermwidth > 1', () => {
    expect(stdtermwidth).to.be.at.least(1)
  })
})
