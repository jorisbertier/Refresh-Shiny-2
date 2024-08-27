import { ThemeProvider } from '../../utils/context'
import Card from './'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Card', ()=> {
    test('should be render without crash', ()=> {
        render(
            <ThemeProvider>
                <Card
                title="Marc"
                picture="profile.png"
                label=""
                />
            </ThemeProvider>
        )
        // const picturePropsCards = <Card picture="image"/>
        // expect(picturePropsCards).toBeTruthy()
        // const titlePropsCard = <Card title="title"/>
        // expect(titlePropsCard).toBeTruthy()
        // const cardTitle = screen.getByText('Marc')
        // expect(cardTitle.textContent).toBe(' Marc ')
        const img = screen.getByRole('img')
        expect(img.src).toBe('http://localhost/profile.png')
    })
    test('Should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card
                title="Marc"
                label="test"
                picture="profile.png"
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText('Marc')
        const parentNode = cardTitle.closest('div')

        fireEvent.click(parentNode)
        // await waitFor(() => {
            expect(cardTitle.textContent).toBe('⭐️ Marc ⭐️')
        // })


    })
})