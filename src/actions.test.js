import { loadUserAgent } from './actions'

describe('test actions', () => {
    test('loadUserAgent', (done) => {
        const get = jest.fn()
        const data = {}
        get.mockReturnValue(Promise.resolve({data}))
        let callNumber = 0
        const dispatch = jest.fn( params => {
            if(callNumber === 0) {
                expect(params).toEqual( { type: 'LOAD_USER_AGENT_REQUEST'})
            }
            if(callNumber === 1) {
                expect(params).toEqual({ type: 'LOAD_USER_AGENT_SUCCESS', data: data})
                done()
            }
            callNumber++
        })

        const axiosMock = {
            get
        }
        loadUserAgent(axiosMock)(dispatch)
    })
})