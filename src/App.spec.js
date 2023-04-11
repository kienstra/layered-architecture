import { AppTestHarness } from './TestTools/AppTestHarness'
import { beforeEach, describe, expect, spy, it, vi } from 'vitest';

let appTestHarness = null
let dataGateway = null
let checkboxPresenter = null

describe('Checkbox App', () => {
  beforeEach(async () => {
    appTestHarness = new AppTestHarness()
    appTestHarness.init()
    dataGateway = appTestHarness.dataGateway
    checkboxPresenter = appTestHarness.checkboxPresenter

    dataGateway.post = vi.fn();
    dataGateway.post.mockImplementation(() => {
      return Promise.resolve({})
    })
  })

  it('is initially unchecked', async () => {
    expect(checkboxPresenter.isChecked).toBe(false)
  })

  it('chages from checked to unchecked and back', async () => {
    checkboxPresenter.setIsChecked(true)
    expect(checkboxPresenter.isChecked).toBe(true)

    checkboxPresenter.setIsChecked(false)
    expect(checkboxPresenter.isChecked).toBe(false)

    checkboxPresenter.setIsChecked(true)
    expect(checkboxPresenter.isChecked).toBe(true)
  })

  it('makes an external request when checked', async () => {
    checkboxPresenter.setIsChecked(true)
    expect(dataGateway.post).toHaveBeenCalledWith('is-checked', {
      checked: true
    })
  })
})
