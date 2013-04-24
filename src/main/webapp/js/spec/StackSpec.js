describe("A Simple Stack Exercise", function() {
  var stack=null;

  beforeEach(function() {
    stack = new Stack();
  });
  it("should be empty on construction", function() {
	  expect(stack.isEmpty()).toBe(true);
  });
  it("should have 0 size on construction", function(){
	 expect(stack.getSize()).toBe(0); 
  });
  it("should NOT be empty after push", function(){
	  stack.push(23);
	 expect(stack.isEmpty()).toBe(false); 
  });
  it("size should increment after push", function(){
	  stack.push(23);
	  expect(stack.getSize()).toBe(1);
  });
  it("value pushed should be on top", function() {
	  stack.push(24);
	  expect(stack.getTop()).toBe(24);
  });
  it("size should decrement after pop", function(){
	  stack.push(23);
	  stack.push(23);
	  stack.push(23);
	  stack.pop();
	  expect(stack.getSize()).toBe(2);
  });
  it("value underneath should be on top after pop", function(){
	  stack.push(11);
	  stack.push(22);
	  stack.pop();
	  expect(stack.getTop()).toBe(11);
  });
  it("should be empty after popping last item", function(){
	 stack.push(23);
	 stack.pop();
	 expect(stack.isEmpty()).toBe(true);
  });
});
