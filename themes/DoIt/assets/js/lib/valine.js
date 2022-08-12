/* eslint-disable no-new */
import Valine from 'js/lib/valine'

if (window.config?.comment?.valine) {
  new Valine(window.config.comment.valine)
}
