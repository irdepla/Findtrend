const burgerBtn = document.getElementById("burger-btn");
const navModal = document.getElementById("nav-modal");
const overlay = document.querySelector(".nav__overlay");

burgerBtn.addEventListener("click", () => {
  navModal.classList.toggle("nav__modal--active");
  overlay.classList.toggle("nav__overlay--active");
});

overlay.addEventListener("click", () => {
  navModal.classList.remove("nav__modal--active");
  overlay.classList.remove("nav__overlay--active");
});

const closeBtn = document.getElementById("close-btn")


closeBtn.addEventListener("click", () => {
  navModal.classList.remove("nav__modal--active")
  overlay.classList.remove("nav__overlay--active")
});






// Example 5


// function createCounter() {
//   let count = 0;  // Initial value

//   return {
//       increment: function() {
//           count++;  // Increment the count
//           return count;  // Return the updated count
//       },
//       decrement: function() {
//           count--;  // Decrement the count
//           return count;  // Return the updated count
//       }
//   };
// }

function createCounter() {
  let count = 0;  

  return {
      increment: function() {
          count++;  
          return count;  
      },
      decrement: function() {
          count--;  
          return count; 
      }
  };
}






const counter = createCounter();

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.decrement()); 
