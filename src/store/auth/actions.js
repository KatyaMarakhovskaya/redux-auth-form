export const AUTH_CHANGE_EMAIL_TXT = 'AUTH_CHANGE_EMAIL_TXT'
export const AUTH_CHANGE_PASS_TXT = 'AUTH_CHANGE_PASS_TXT'

export const setEmailTxt = (email) => ({
  type: AUTH_CHANGE_EMAIL_TXT,
  payload:email
})

export const setPassTxt = (password) => ({
  type: AUTH_CHANGE_PASS_TXT,
  payload:password
})
