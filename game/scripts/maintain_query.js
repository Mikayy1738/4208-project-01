(() => {
  const anchors = document.querySelectorAll("a");
  for (anchor of anchors){
    console.log(`before: ${anchor.href}`)
    anchor.href += location.search
    console.log(`after: ${anchor.href}`)
  }
})()