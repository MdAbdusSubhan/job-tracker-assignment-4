1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


  Here is the comparison of the given selectors:

  (i)getElementById = An selector of single element which is define by an HTML attribute (ID). Return type is object or null.

  (ii)getElementsByClassName = It can select one or multiple items by using CSS class. Return a HTML collection. It updates automatically.

  (iii)querySelector = It select first element that matches the criteria. It takes snapshot of DOM. Return a nodeList.

  (iv)querySelectorAll = Same as querySelector but it select all that matches the criteria.



2. How do you create and insert a new element into the DOM?

    The most common way of insert a new element is using document.createElement().
    Example = const newDiv = document.createElement("div");

    There are other ways. One the other method is appendChild()


3. What is Event Bubbling? And how does it work?

    In the DOM, when I click an element (A <button> for example), that click "event" doesn't just stop there. It starts at the specific item I clicked and then bubbles up through all of its parent elements until it hits the very top.

    Example: button - parent element: div - parent element: section - parent element: body.

4. What is Event Delegation in JavaScript? Why is it useful?

    Instead of capture a single element we can use parent element by event delegation. Event Delegation works by event bubbling.

    It keeps the code short and increase readability.

    Example from this project:  
    
    document.addEventListener("click", function(event){

    if(event.target.classList.contains("fa-trash-can")){

        const card = event.target.parentNode.parentNode.parentNode;

        card.remove();

        
        updateCounts()
        updateEmpty()
    }

    });


5. What is the difference between preventDefault() and stopPropagation() methods?

    preventDefault() stops the action the browser usually takes (like opening a link).

    stopPropagation() stops the event from traveling up to parent elements.