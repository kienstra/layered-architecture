import { getRoot } from './TestTools/TestCompositionRoot'
import { describe, expect, it, vi } from 'vitest';

describe('Checkbox App', () => {
  it('is initially unchecked', async () => {
    const { checkboxPresenter } = getRoot();
    expect(checkboxPresenter.isChecked).toBe(false)
  })

  it('chages from checked to unchecked and back', async () => {
    const { checkboxPresenter } = getRoot();

    checkboxPresenter.setIsChecked(true)
    expect(checkboxPresenter.isChecked).toBe(true)

    checkboxPresenter.setIsChecked(false)
    expect(checkboxPresenter.isChecked).toBe(false)

    checkboxPresenter.setIsChecked(true)
    expect(checkboxPresenter.isChecked).toBe(true)
  })

  it('makes an external request when checked', async () => {
    const { checkboxPresenter, httpGateway } = getRoot();
    httpGateway.post = vi.fn();
    httpGateway.post.mockImplementation(() => {
      return Promise.resolve({})
    });

    checkboxPresenter.setIsChecked(true)
    expect(httpGateway.post).toHaveBeenCalledWith('is-checked', {
      checked: true
    })
  })
})
