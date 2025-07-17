// src/utils/loadConvaiWidget.js

let isLoaded = false

export function loadConvaiWidget() {
  if (isLoaded) return

  const script = document.createElement('script')
  script.src = 'https://elevenlabs.io/convai-widget/index.js'
  script.async = true
  script.type = 'text/javascript'
  document.body.appendChild(script)

  isLoaded = true
}
