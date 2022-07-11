module.exports = function () {
  return {
    visitor: {
      TaggedTemplateExpression (path) {
        if (path.node.tag.name === 'overrideCss') {
          path.node.tag.name = 'css'
          let quasisArray = path.node.quasi.quasis
          let initialRawValue = '&& {' + quasisArray[0].value.raw
          let initialCookedValue = '&& {' + quasisArray[0].value.cooked
          quasisArray[0].value.raw = initialRawValue
          quasisArray[0].value.cooked = initialCookedValue

          let lastRawValue = quasisArray[quasisArray.length - 1].value.raw + '}'
          let lastCookedValue =
            quasisArray[quasisArray.length - 1].value.cooked + '}'
          quasisArray[quasisArray.length - 1].value.raw = lastRawValue
          quasisArray[quasisArray.length - 1].value.cooked = lastCookedValue
        }
      }
    }
  }
}
