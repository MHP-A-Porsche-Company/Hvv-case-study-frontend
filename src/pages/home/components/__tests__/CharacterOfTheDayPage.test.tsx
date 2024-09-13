import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CharacterInfo from '../../components/characterInfo'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}))

describe('StarWarsCharacter', () => {
  const mockCharacter = {
    name: 'Luke Skywalker',
    gender: 'male',
    height: '172',
    mass: '77',
    birth_year: '19 BBY'
  }

  it('renders character information correctly', () => {
    render(<CharacterInfo character={mockCharacter} />)

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
    expect(screen.getByText('male')).toBeInTheDocument()
    expect(screen.getByText('77')).toBeInTheDocument()
    expect(screen.getByText('172')).toBeInTheDocument()
    expect(screen.getByText('19 BBY')).toBeInTheDocument()
  })
})