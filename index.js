import 'dotenv/config'
import util from 'util'
import childProcess from 'child_process'
import { Gpio } from 'onoff'

const exec = util.promisify(childProcess.exec)
const button = new Gpio(3, 'in', 'falling', { debounceTimeout: 200 })

button.watch(async () => {
  const { stdout, stderr } = await exec(process.env.COMMAND)
  console.log({ stdout, stderr })
})
