greet = require("..")

describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("name")).to.eql "hello, name"
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(greet("name", true)).to.eql "hello name, you look sexy today"
    return

  return


