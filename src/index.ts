/**
 * 二元樹結構
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * 反轉二元樹
 * 
 * @param root 需要反轉的二元樹
 * @returns 左右反轉過的二元樹 or null
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;

    const queue: TreeNode[] = [root];
    while (queue.length > 0) {
        const node = queue.shift()!;
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }

    return root;
}

/**
 * 建立二元樹
 * 
 * @param nums 要建立為二元樹結構的數字陣列
 * @returns 結構化後的二元樹
 */
function buildTree(nums: number[]) {
    if (nums.length === 0) return null;

    const root = new TreeNode(nums[0]);
    const queue: TreeNode[] = [root];

    let i = 1;
    while (i < nums.length) {
        let curr = queue.shift();
        if (i < nums.length) {
            curr!.left = new TreeNode(nums[i++]);
            queue.push(curr!.left);
        }
        if (i < nums.length) {
            curr!.right = new TreeNode(nums[i++]);
            queue.push(curr!.right);
        }
    }
    return root;
}

/**
 * 把二元樹轉換為陣列
 * 
 * @param root 二元樹
 * @returns 陣列化的二元樹
 */
function treeToArray(root: TreeNode | null): (number | null)[] {
    if (root === null) return []; 

    const queue: (TreeNode | null)[] = [root];
    const decodedTree: (number | null)[] = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node !== null) {
            decodedTree.push(node!.val);
            queue.push(node!.left, node!.right);
        } else {
            decodedTree.push(null);
        }
    }

    // 去除陣列尾部多餘的 null
    while (decodedTree.length > 0 && decodedTree[decodedTree.length - 1] === null) {
        decodedTree.pop();
    }

    return decodedTree;
}

// Test cases
const input1 = [5, 3, 8, 1, 7, 2, 6];
const input2 = [6, 8, 9];
const input3 = [5, 3, 8, 1, 7, 2, 6, 100, 3, -1];
const input4: number[] = [];

const root1 = buildTree(input1);
const root2 = buildTree(input2);
const root3 = buildTree(input3);
const root4 = buildTree(input4);

const invert1 = invertTree(root1);
const invert2 = invertTree(root2);
const invert3 = invertTree(root3);
const invert4 = invertTree(root4);

console.log(treeToArray(invert1));
console.log(treeToArray(invert2));
console.log(treeToArray(invert3));
console.log(treeToArray(invert4));