import { ThemeProvider } from '../../utils/context'
import Card from './'
import { render } from '@testing-library/react'

describe('Card', ()=> {
    test('should be render without crash', ()=> {
        render(
            <ThemeProvider>
                <Card/>
            </ThemeProvider>
        )
        const cards = <Card picture="image"/>
        expect(cards).toBeTruthy()
    })
})