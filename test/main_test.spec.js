import { assert as _assert, config } from "chai";
import grow from "../main.js"
import { describe, it } from "mocha";

const assert = _assert;
config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {  
    assert.strictEqual(grow([1, 2, 3]), 6);
    assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
    assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
  });
})
