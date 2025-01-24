// Selecting any class from html doc (now, panels)

const panels = document.querySelectorAll('.panel')

// Try working with the panels selected before

console.log(panels[1]) //Print second panel in the console

panels.forEach((panel) => {
  console.log(panel) //This print all the panels in const panels
})

// The function we want: change class for the cliked panel

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
