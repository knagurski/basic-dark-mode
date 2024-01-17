import {
  Event as FFEvent,
  initialize
} from '@harnessio/ff-javascript-client-sdk'

const ffClient = initialize('4cf9b608-ac77-491f-aa6c-473a88cab25c', {
  name: 'Test user',
  identifier: 'test_user'
})

const bodyEl = document.querySelector('body') as HTMLBodyElement

function setDarkMode(isDark: boolean): void {
  if (isDark) {
    bodyEl.classList.add('darkMode')
  } else {
    bodyEl.classList.remove('darkMode')
  }
}

ffClient.on(FFEvent.READY, () => {
  console.log('The FF SDK is ready')
})

ffClient.on(FFEvent.CHANGED, ({ flag }) => {
  if (flag === 'dark_mode') {
    setDarkMode(!!ffClient.variation(flag, false))
  }
})
