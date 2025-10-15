const controller = require('../transactionController')

jest.mock('uuid',  () => ({
    uuidv4: jest.fn().mockReturnValue('333')
}))
describe('transactions', () => {

    it('Should create transaction with uuid', () => {
        controller.createTransaction({description: 'test1', amount: 10})
        expect(controller.transactions).toBe([{id: '333', description: 'test1', amount: 10}])
    })
})