require('dotenv').config()
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { Gpio } = require('onoff')
const button = new Gpio(3, 'in', 'falling', { debounceTimeout: 200 })

button.watch(async () => {
  const { stdout, stderr } = await exec(process.env.COMMAND)
  console.log({ stdout, stderr })
})
