class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
        this.root = new Node(val);
        return this.root;
    }
    let cur = this.root;
    let last = null;
    while (cur !== null) {
        if (cur.val > val) {
            last = cur;
            cur = last.left;
            if (!cur) {
                last.left = new Node(val);
                return this.root;
            }
        }
        else if (cur.val < val) {
            last = cur;
            cur = last.right;
            if (!cur) {
                last.right = new Node(val);
                return this.root;
            }
        }
        else {
            return this.root;
        }
    }
    
}

/** insertRecursively(val): insert a new node into the BST with value val.
 * Returns the tree. Uses recursion. */

insertRecursively(val, cur) {
    if (this.root === null) {
        this.root = new Node(val);
        return this.root;
    };
    if (cur.val > val) {
        if (cur.left !== null) {
            this.insertRecursively(val, cur.left);
        }
        else {
            cur.left = new Node(val);
            return;
        }
    }
    else if (cur.val < val) {
        if (cur.right !== null) {
            this.insertRecursively(val, cur.right);
        }
        else {
            cur.right = new Node(val);
            return;
        }
    }
    return this.root;
}

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
