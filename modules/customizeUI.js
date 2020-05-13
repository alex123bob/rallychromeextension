chrome.storage.sync.get(['color'], result => {
    let css = `#root .chr-Site .alm-header-container .alm-header { background: ${result.color}; }`
    const head = document.head || document.getElementsByTagName('head')[0]
    let style = document.createElement('style')

    head.appendChild(style)

    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
})