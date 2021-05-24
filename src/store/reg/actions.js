export const REG_CHANGE_EMAIL_TXT = 'REG_CHANGE_EMAIL_TXT'
export const REG_CHANGE_PASS_TXT = 'REGH_CHANGE_PASS_TXT'
export const REG_CHANGE_REPEAT_PASS_TXT = 'REG_CHANGE_REPEAT_PASS_TXT'

export const setEmailTxt = (email) => ({
  type: REG_CHANGE_EMAIL_TXT,
  payload:email
})

export const setPassTxt = (password) => ({
  type: REG_CHANGE_PASS_TXT,
  payload:password
})

export const setRepeatPassTxt = (repeatPassword) => ({
  type: REG_CHANGE_REPEAT_PASS_TXT,
  payload:repeatPassword
})
