import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import ChatBot from './ChatBot'

describe('ChatBot', () => {
  it('Renders the ChatBot Component', () => {
    render(<ChatBot />)
  })

  it('Icon Button Existed in the Document', () => {
    render(<ChatBot />)
    const chatBotButton = screen.getByTestId('icon-button')
    expect(chatBotButton).toBeInTheDocument()
  })

  it('ChatBox Existed in the Document', async () => {
    render(<ChatBot />)
    const chatBotButton = screen.getByTestId('icon-button')
    await fireEvent.click(chatBotButton)
    const chatBotDialog = screen.getByTestId('chatbot-dialog')
    expect(chatBotDialog).toBeInTheDocument()
  })
})
