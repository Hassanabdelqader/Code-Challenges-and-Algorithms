// Write your test here

const {BST} = require("./challenge03")


describe("test",()=>{

    it("test function", ()=>{
        const bst = BST([-10,-3,0,5,9]) ;
        expect(bst.value).toBe(0);
        expect(bst.left.value).toBe(-3);
        expect(bst.left.left.value).toBe(-10);
        expect(bst.right.value).toBe(9);
        expect(bst.right.left.value).toBe(5);
    })
    it("test function", ()=>{
        const bst = BST([1,3]) ;
        expect(bst.value).toBe(3);
    })


})

