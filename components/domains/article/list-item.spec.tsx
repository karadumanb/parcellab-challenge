import { render, screen } from '@testing-library/react'
import { ArticleListItem } from './list-item'
import { testData } from '@/mocks/test-mocks'

const { article } = testData

describe('Article List Item', () => {
  function renderComponent() {
    render(<ArticleListItem article={article} />)
  }

  it('Shows the name of the given article', () => {
    renderComponent()

    screen.getByText(article.articleName)
  })

  it('Shows the number of the given article', () => {
    renderComponent()

    screen.getByText(article.articleNo, { exact: false })
  })

  it('Shows the image of the given article', () => {
    renderComponent()

    expect(screen.getByAltText('article').getAttribute('src')).toContain('images.unsplash.com')
  })

  it('Shows the formatted price of the given article', () => {
    renderComponent()

    screen.getByText('4.199,00', { exact: false })
  })
})
