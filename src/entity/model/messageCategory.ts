export const name = 'messageCategory'
export const rule: TableRule = {
  name: { type: 'string', required: true, only: true, max: 50, like: true }
}
