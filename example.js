window.onload = function() {
  if (fetch) {
    fetch('https://api.github.com/repos/ForsakenNydoseth/bruhh.js/stats/contributors')
      .then(d => d.json())
      .then(data => {
        if (!data) return
        const contributors = data.filter(
          d => d.author.login !== 'bplouzennec' && d.author.login !== 'ForsakenNydoseth'
        )
        const contributor =
          contributors[Math.floor(Math.random() * contributors.length)].author
        document.getElementById('shout').innerHTML = `
        <div class="thanks">Thanks for your contribution !</div>
        <img class="contributor-avatar" src="${contributor.avatar_url}" />
        <div class="contributor-login"><a class="contributor-login-link" href="${contributor.html_url}">${contributor.login}</a></div>
      `
      })
  }

  var bruhh = new bruhh()
  var audio = document.getElementById('audio')

  bruhh.addbruhh('pulse1', 'pulse', 0, 10)
  bruhh.addbruhh('pulse2', 'pulse', 0, 10, { min: 0.1, max: 1 })
  bruhh.addbruhh('pulse3', 'pulse', 0, 10, { min: 1, max: 1.75 })
  bruhh.addbruhh('jump1', 'jump', 0, 10)
  bruhh.addbruhh('jump2', 'jump', 150, 40, { min: -20, max: 20 })
  bruhh.addbruhh('shake1', 'shake', 0, 10)
  bruhh.addbruhh('shake2', 'shake', 0, 10, { min: 0, max: 20 })
  bruhh.addbruhh('shake3', 'shake', 0, 10, { direction: 'left' })
  bruhh.addbruhh('twist1', 'twist', 0, 10)
  bruhh.addbruhh('twist2', 'twist', 0, 10, { min: 20, max: 180 })
  bruhh.addbruhh('twist3', 'twist', 0, 10, { direction: 'left' })
  bruhh.addbruhh('vanish1', 'vanish', 0, 10)
  bruhh.addbruhh('vanish2', 'vanish', 0, 10, { reverse: true })
  bruhh.addbruhh('color1', 'color', 0, 10)
  bruhh.addbruhh('color2', 'color', 0, 10, {
    from: [0, 0, 255],
    to: [255, 0, 255],
  })
  bruhh.addbruhh('color3', 'color', 0, 10, {
    from: [255, 255, 0],
    to: [255, 0, 0],
  })
  bruhh.addbruhh('borderColor1', 'borderColor', 0, 10)
  bruhh.addbruhh('borderColor2', 'borderColor', 0, 10, {
    from: [0, 0, 255],
    to: [255, 0, 255],
  })
  bruhh.addbruhh('borderColor3', 'borderColor', 0, 10, {
    from: [255, 255, 0],
    to: [255, 0, 0],
  })
  bruhh.addbruhh('borderWidth1', 'borderWidth', 0, 2)
  bruhh.addbruhh('borderWidth2', 'borderWidth', 0, 2, { min: 2, max: 9 })
  bruhh.addbruhh('fontSize1', 'fontSize', 0, 2)
  bruhh.addbruhh('fontSize2', 'fontSize', 0, 2, { min: 0.9, max: 1.1 })
  bruhh.addbruhh('radius1', 'radius', 0, 10, { min: 0, max: 30 })
  bruhh.addbruhh('radius2', 'radius', 0, 10, { reverse: true, min: 0, max: 30 })
  bruhh.addbruhh('blur1', 'blur', 0, 10)
  bruhh.addbruhh('blur2', 'blur', 0, 10, { reverse: true })
  bruhh.addbruhh('blur3', 'blur', 0, 10, { max: 16 })
  bruhh.addbruhh('swing1', 'swing', 0, 10)
  bruhh.addbruhh('swing2', 'swing', 0, 10, { curve: 'up' })
  bruhh.addbruhh('swing3', 'swing', 0, 10, { direction: 'left' })
  bruhh.addbruhh('swing4', 'swing', 0, 10, { radius: 10 })
  bruhh.addbruhh('neon1', 'neon', 0, 10)
  bruhh.addbruhh('neon2', 'neon', 0, 10, {
    from: [0, 0, 255],
    to: [255, 0, 255],
  })
  bruhh.addbruhh('neon3', 'neon', 0, 10, {
    from: [255, 255, 0],
    to: [255, 0, 0],
  })
  bruhh.addbruhh('kern1', 'kern', 0, 10, { min: -5, max: 5 })
  bruhh.addbruhh('kern2', 'kern', 0, 10, { min: -5, max: 5, reverse: true })
  bruhh.addbruhh('thanks', 'shake', 0, 10, { min: -10, max: 10 })
  bruhh.addbruhh('contributor-avatar', 'pulse', 0, 10, { min: 0.5, max: 1.1 })
  bruhh.addbruhh('contributor-login-link', 'kern', 0, 10, { min: 0, max: 5 })
  bruhh.addbruhh('tilt1', 'tilt', 0, 10)
  bruhh.addbruhh('tilt2', 'tilt', 0, 10, { reverse: true })
  bruhh.addbruhh('fontColor1', 'fontColor', 0, 10)
  bruhh.addbruhh('fontColor2', 'fontColor', 0, 10, {
    from: [0, 0, 255],
    to: [255, 0, 255],
  })

  var onMicClick = function() {
    if (bruhh.stopped === false) {
      bruhh.stop()
    }
    bruhh.plugMicrophone().then(function() {
      bruhh.start()
    })
  }

  var onStartClick = function() {
    if (bruhh.stopped === false) {
      bruhh.stop()
    }
    // bruhh.connectExternalAudioElement(audio)
    bruhh.setMusic('./samples/bruhhC.mp3')
    bruhh.setGain(0.1)
    bruhh.start()
  }

  var onStopClick = function() {
    if (bruhh.stopped === false) {
      bruhh.stop()
    }
  }

  var onStopResetClick = function() {
    if (bruhh.stopped === false) {
      bruhh.stop(true)
    }
  }

  document.getElementById('mic').addEventListener('click', onMicClick)
  document.getElementById('micBottom').addEventListener('click', onMicClick)
  document.getElementById('start').addEventListener('click', onStartClick)
  document.getElementById('startBottom').addEventListener('click', onStartClick)
  document.getElementById('stop').addEventListener('click', onStopClick)
  document.getElementById('stopBottom').addEventListener('click', onStopClick)

  var bottomPlayerShow = false
  var showPoint = 300
  var onScroll = function() {
    var scrollPos = window.scrollY
    var bottomPlayer = document.getElementById('playerBottom')
    var shouldShow = !bottomPlayerShow && scrollPos > showPoint
    var shouldHide = bottomPlayerShow && scrollPos <= showPoint
    if (shouldShow) {
      bottomPlayerShow = true
      bottomPlayer.className = 'show'
    } else if (shouldHide) {
      bottomPlayerShow = false
      bottomPlayer.className = ''
    }
  }
  onScroll()
  document.addEventListener('scroll', onScroll)
}
