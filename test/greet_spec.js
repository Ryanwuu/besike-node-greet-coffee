var greet = require("../lib/index.js");
describe('greet',function(){
	it("should greet a person by name",function(){
		expect(greet('name')).to.eql('hello, name');
	})
	it ("should greet a person flirtatiously if drunk",function(){
		expect(greet('name',true)).to.eql('hello name, you look sexy today')
	})
})