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
 * @returns 左右反轉過的二元樹
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;

    const queue: TreeNode[] = [];
    queue.push(root);
    console.log(queue.length);
    while (queue.length > 0) {
        const node = queue.shift()!;
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
        console.log(queue.length);
    }

    return root;
}

/**
 * 建立二元樹
 * 
 * @param nums 要建立為二元樹的數字陣列
 * @returns 結構化後的二元樹
 */
function buildTree(nums: Array<number>) {
    if (nums.length === 0) {
        return null;
    }
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

// Test cases
const input1 = [5, 3, 8, 1, 7, 2, 6];
const input2 = [6, 8, 9];
const input3 = [5, 3, 8, 1, 7, 2, 6, 100, 3, -1];
const input4 = [];





// const root1 = new TreeNode(5);
// root1.left = new TreeNode(3);
// root1.right = new TreeNode(8);
// root1.left.left = new TreeNode(1);
// root1.left.right = new TreeNode(7);
// root1.right.left = new TreeNode(2);
// root1.right.right = new TreeNode(6);
const root1 = buildTree(input1);

console.log(invertTree(root1)); // Output: [5, 8, 3, 6, 2, 7, 1]

// const root2 = new TreeNode(6);
// root2.left = new TreeNode(8);
// root2.right = new TreeNode(9);

// console.log(invertTree(root2)); // Output: [6, 9, 8]

// console.log('qwe');
// let qwe = buildTree(tree3);

