const rewire = require('rewire');

describe('`groupById` function', () => {
    test('`groupById` exists', () => {
        const index = rewire('../index.js');
        const groupById = index.__get__('groupById');
        expect(groupById).toBeDefined()
    })

    test('`groupById` is a function', () => {
        const index = rewire('../index.js');
        const groupById = index.__get__('groupById');
        expect(typeof groupById).toBe('function')
    })

    test('function takes an array and creates object with property names from ids', () => {
        const index = rewire('../index.js');
        const groupById = index.__get__('groupById');

        const users = [
            { id: 'john', name: "John Smith", age: 20 },
            { id: 'ann', name: "Ann Smith", age: 24 },
            { id: 'pete', name: "Pete Peterson", age: 31 },
        ];
        expect(Object.keys(groupById(users))).toEqual([
            'john',
            'ann',
            'pete'
        ]);
    })

    test('function takes an array and creates an object with array items as values', () => {
        const index = rewire('../index.js');
        const groupById = index.__get__('groupById');

        const users = [
            { id: 'john', name: "John Smith", age: 20 },
            { id: 'ann', name: "Ann Smith", age: 24 },
            { id: 'pete', name: "Pete Peterson", age: 31 },
        ];
        expect(groupById(users)).toEqual({
            john: { id: 'john', name: 'John Smith', age: 20 },
            ann: { id: 'ann', name: 'Ann Smith', age: 24 },
            pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
        });
    })
})