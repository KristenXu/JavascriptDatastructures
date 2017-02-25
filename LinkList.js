function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
}

/**
 * 3.双向链表的 insert() 方法和单向链表的类似，
 * 但是需要设置新节点的 previous 属性， 使其指向该节点的前驱节点
 * */
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

/**
 * 4.双向链表的 remove() 方法比单向链表的效率更高
 * 首先需要在链表中找出存储待删除数据的节点， 然后设置该节点前驱的 next 属性， 使其指向待删
 * 除节点的后继； 设置该节点后继的 previous 属性， 使其指向待删除节点的前驱
 * */
function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

/**
 * 5. findLast()
 * 为了完成以反序显示链表中元素这类任务， 需要给双向链表增加一个工具方法， 用来查找
 * 最后的节点。 findLast() 方法找出了链表中的最后一个节点， 同时免除了从前往后遍历链
 * 表之苦
 * */
function findLast() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}

/**
 * 6. dispReverse() 反序显示双向链表中的元素
 * */
function dispReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.previous == null)) {
    print(currNode.element);
    currNode = currNode.previous;
  }
}

/**
 * 7.原来的display(),find(),insert()进行相应的修改
 * */
function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}