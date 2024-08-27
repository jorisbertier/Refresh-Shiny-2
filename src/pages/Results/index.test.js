import { formatJobList, formatQueryParams } from './'

describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })

    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('The formatQueryParams function', ()=> {
    it('should concatenate params with an &', ()=> {
        const answers = { 1: 'yes', 2: 'no' };
        const string = "a1=yes&a2=no"
        expect(formatQueryParams(answers)).toBe(string)
        
    })
    it('should use the right format for param', ()=> {
        const answers = { 1: "yes"}
        const string = "a1=yes"
        expect(formatQueryParams(answers)).toEqual(string)
    })
})