import utils from './lib/utils'

/** 获取title的文字
* @param {string} tab TAB分类
*/
exports.getTitleStr = tab => {
  let str = ''
  switch (tab) {
    case 'share':
      str = '分享'
      break
    case 'ask':
      str = '问答'
      break
    case 'job':
      str = '招聘'
      break
    case 'good':
      str = '精华'
      break
    default:
      str = '全部'
      break
  }
  return str
}

/** 获取标签样式
* @param {string} TAB分类
* @param {bool} good 是否为精华帖
* @param {bool} top 是否为置顶帖
*/
exports.getTabClassName = (tab, good, top) => {
  let className = ''

  if (top) {
    className = 'top'
  } else if (good) {
    className = 'good'
  } else {
    switch (tab) {
      case 'share':
        className = 'share'
        break
      case 'ask':
        className = 'ask'
        break
      case 'job':
        className = 'job'
        break
      default:
        className = 'default'
        break
    }
  }

  return className
}

/** 获取文字标签
* @param {string} TAB分类
* @param {bool} good 是否为精华帖
* @param {bool} top 是否为置顶帖
*/
exports.getTabStr = (tab, good, top) => {
  let str = ''

  if (top) {
    str = '置顶'
  } else if (good) {
    str = '精华'
  } else {
    switch (tab) {
      case 'share':
        str = '分享'
        break
      case 'aks':
        str = '问答'
        break
      case 'job':
        str = '招聘'
        break
      default:
        str = '暂无'
        break
    }
  }

  return str
}

/**
* 格式化时间
* @param {string} time 需要格式化的时间
* @param {bool} friendly 是否为fromnow
*/
exports.getLastTitmeStr = (time, friendly) => {
  if (friendly) {
    return utils.MillisecondToDate(new Date() - new Date(time))
  } else {
    return utils.fmtDate(new Date(time), 'yyyy-MM-dd hh:mm')
  }
}
