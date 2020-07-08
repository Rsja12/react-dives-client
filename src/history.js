// create custom history obj to be able to call it directly from action creators
// otherwise I would have to pass down this history obj that comes from BrowserRouter as a prop every time I call an action creator

import { createBrowserHistory } from 'history'
export default createBrowserHistory()
