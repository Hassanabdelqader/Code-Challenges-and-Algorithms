// Write your test here

const {Node, checkTree} = require("./challenge02")


describe("test",()=>{

    it("test function", ()=>{
        let node1 = new Node(1)
        let node2 = new Node(2)
        let node3 = new Node(3)
        node1.left = node2;
        node1.right = node3;

        let node4 = new Node(1)
        let node5 = new Node(2)
        let node6 = new Node(3)
        node4.left = node5;
        node4.right = node6;

        let testNode = new Node(4);

        expect(checkTree(node1,node4)).toBeTruthy();
        node4.right.right = testNode
        expect(checkTree(node1,node4)).toBeFalsy();
  
    })

    it("test function", ()=>{
        let node1 = new Node(1)
        let node2 = new Node(2)
        let node3 = new Node(3)
        node1.left = node2;
        node1.right = node3;

        let node4 = new Node(1)
        let node5 = new Node(4)
        let node6 = new Node(3)
        node4.left = node5;
        node4.right = node6;

        expect(checkTree(node1,node4)).toBeFalsy();
  
    })


})

