export const isRequired: {
  value: boolean
  message: string
} = {
  value: true,
  message: 'This field is required'
}

export const passwordRegex: {
  value: RegExp
  message: string
} = {
  value:
    /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*[\d|@#$!%*?&])[\p{L}\d@#$!%*?&]{8,96}$/gmu,
  message:
    'Match uppercase, lowercase, digit or #$!%*?& and make sure the length is 8 to 96 in length'
}

export const maxLength = (value: number) => ({
  value,
  message: `please enter maximum ${value} character`
})
