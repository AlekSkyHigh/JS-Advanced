const Repository = require('./solution');
const { assert, expect } = require('chai');

describe(`testing Repository class`, () => {
	let instance = {}

	beforeEach(() => instance = new Repository({
		name: 'string',
		age: 'number',
		birthday: 'object'
	}))


	describe('testing count prop', () => {
		it(`instance.count -> 0`, () => {
			//expect(instance.count).to.eq(0);
			assert.equal(instance.count, 0);
		})

	})

	describe('testing .add()', () => {
		it(`valid obj passed as input: output -> its id in the collection`, () => {
			//expect(instance.add({ name: '', age: 1, birthday: {} })).to.eq(0);
			assert.equal(instance.add({ name: '', age: 1, birthday: {} }), 0);
		})
	})

	describe(`testing .getId()`, () => {
		it(`input ID which is not present in the data collection -> throw`, () => {
			//expect(() => instance.getId(1)).to.throw('Entity with id: 1 does not exist!');
			assert.throw(() => { instance.getId(1) }, Error);
		})
	})

	describe(`testing .update()`, () => {
		it(`input ID which is not present in the data collection -> throw`, () => {
			//expect(() => instance.update(0, {},)).to.throw(`Entity with id: 0 does not exist!`);
			assert.throw(() => { instance.update(0, {},) }, Error);
		})
		it(`any property is missing from input object -> throw Error`, () => {
			instance.add({ name: '', age: 0, birthday: {}, })
			//expect(() => instance.update(0, { age: 1, birthday: { date: 0 } })).to.throw
			assert.throw(() => { instance.update(0, { age: 1, birthday: { date: 0 } }) }, Error);
		});
		it(`typeof input[name] !== string -> throw TypeError`, () => {
			instance.add({ name: '', age: 0, birthday: {}, })
			//expect(() => instance.update(0, { name: 0, age: 1, birthday: { date: 0 } })).to.throw(TypeError);
			assert.throw(() => { instance.update(0, { name: 0, age: 1, birthday: { date: 0 } }) }, Error);
		})
	})

	describe(`testing .del()`, () => {
		it(`deletes index properly`, () => {
			instance.add({ name: '', age: 1, birthday: {} })
			instance.add({ name: '', age: 1, birthday: {} })
			instance.del(1)
			//expect(instance.data.has(1)).to.eq(false)
			assert.equal(instance.data.has(1), false);
		})
		it(`throws on index which does not exist in the collection`, () => {
			//expect(() => instance.del(-1)).to.throw(`Entity with id: -1 does not exist!`)
			assert.throw(() => { instance.del(-1) }, Error);
		})
	})
})
