import next from 'next'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'

const nextApp = next({ dev: isDevelopment })
export const nextHandleRequest = nextApp.getRequestHandler()
nextApp.prepare()

function renderPageWithNext(req, res, next) {
  if (req.path.startsWith('/_next') && !req.path.startsWith('/_next/data')) {
    return nextHandleRequest(req, res)
  }

  return next()
}

export default renderPageWithNext
