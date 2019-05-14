exports.onPostBuild = async function onPostBuild(nodeOptions, pluginOptions) {
  console.log(JSON.stringify({
    nodeOptions,
    pluginOptions
  }, null, 2))
}
