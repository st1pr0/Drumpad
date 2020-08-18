const keysArray = ['q', 'w', 'e', 'r', 'i', 'o', 'a', 's', 'd', 'f', 'k', 'l', 'z', 'x', 'c', 'v']

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const keysIndex = keysArray.indexOf(key) 

    if (keysIndex > -1) playNote(keys[keysIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}