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
        return this;
    }
    let cur = this.root;
    let last = null;
    while (cur !== null) {
        if (cur.val > val) {
            last = cur;
            cur = last.left;
            if (!cur) {
                last.left = new Node(val);
                return this;
            }
        }
        else if (cur.val < val) {
            last = cur;
            cur = last.right;
            if (!cur) {
                last.right = new Node(val);
                return this;
            }
        }
        else {
            return this;
        }
    }
    
}

/** insertRecursively(val): insert a new node into the BST with value val.
 * Returns the tree. Uses recursion. */

insertRecursively(val, cur = this.root) {
    if (this.root === null) {
        this.root = new Node(val);
        return this;
    };
    if (cur.val > val) {
        if (cur.left !== null) {
            this.insertRecursively(val, cur.left);
        }
        else {
            cur.left = new Node(val);
            return this;
        }
    }
    else if (cur.val < val) {
        if (cur.right !== null) {
            this.insertRecursively(val, cur.right);
        }
        else {
            cur.right = new Node(val);
            return this;
        }
    }
    return this;
}

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    }

    let cur = this.root;

    while (cur !== null) {
      if (cur.val === val) {
        return cur;
      }
      else if (cur.val > val) {
        cur = cur.left;
      }
      else {
        cur = cur.right
      }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, cur = this.root) {
    if (cur === null) {
      return undefined;
    }
    if (cur.val === val) {
      return cur;
    }
    else if (cur.val > val) {
      return this.findRecursively(val, cur.left);
    }
    else {
      return this.findRecursively(val, cur.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const resArr = [];
    let cur = this.root;

    function traverse(node) {
      resArr.push(node.val);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    
    traverse(cur);
    return resArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const resArr = [];
    let cur = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      resArr.push(node.val);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(cur);
    return resArr;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const resArr = [];
    let cur = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      resArr.push(node.val);
    }

    traverse(cur);
    return resArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const resArr = [];
    let cur;

    while (queue.length > 0) {
      cur = queue.shift();
      resArr.push(cur.val);

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    return resArr;
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
