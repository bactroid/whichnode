const {fromPromise} = require('folktale/concurrency/future')
const rp = require('request-promise-native')
const Maybe = require('folktale/maybe')

// url :: String
// Insert the ONE.UF API URL for whoami here.
const url = ''

// cancelMsg :: String
const cancelMsg = 'Request has been cancelled.'

// rejectMsg :: String
const rejectMsg = 'I\'m having trouble connecting to the server.'

// maybeIndexOf :: String -> String -> Maybe Number
const maybeIndexOf = needle => haystack => {
  const index = haystack.indexOf(needle)
  return index !== -1 ? Maybe.Just(index) : Maybe.Nothing()
}

// findProdStr :: String -> Maybe Number
const findProdStr = maybeIndexOf('prod')

// getServerNode :: String -> Maybe String
const getServerNode = s =>
  findProdStr(s)
    .map(i => s.substr(i, 6))

// safePrint :: Maybe a -> IO ()
const safePrint = x => {
  console.log(x.matchWith({
    Just: ({value}) => `You're currently on ${value}.`,
    Nothing: () => 'Cannot find server node.'
  }))
  return undefined
}

fromPromise(rp(url))
  .map(getServerNode)
  .listen({
    onCancelled: () => console.error(cancelMsg),
    onRejected: () => console.error(rejectMsg),
    onResolved: safePrint
  })
