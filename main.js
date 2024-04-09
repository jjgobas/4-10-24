gsap.fromTo(".loading-page", {opacity:1}, {
    opacity: 0,
    duration: 1.5,
    delay: 7,
    display: "none"
}
)

const canvas = document.getElementById('custom_canvas')
const button = document.getElementById('btn')

const jsConfetti = new JSConfetti({ canvas })

setTimeout(() => {
  jsConfetti.addConfetti({
    emojis: ['❤️'],
 })
}, 8500)

button.addEventListener('click', () => {
  jsConfetti.addConfetti({
    emojis: ['❤️'],
 })
})

