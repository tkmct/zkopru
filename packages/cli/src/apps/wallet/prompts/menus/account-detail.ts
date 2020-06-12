import { Balance } from '@zkopru/zk-wizard'
import { fromWei } from 'web3-utils'
import App, { AppMenu, Context } from '..'

export default class AccountDetail extends App {
  static code = AppMenu.ACCOUNT_DETAIL

  // eslint-disable-next-line class-methods-use-this
  async run(context: Context): Promise<{ context: Context; next: number }> {
    if (!context.account) throw Error('Acocunt is not set')
    const balance: Balance = await this.base.getLayer1Assets(context.account)
    const spendables = await this.base.getSpendables(context.account)
    const messages: string[] = []
    const { eth, erc20, erc721 } = balance
    messages.push(`Layer 1`)
    messages.push(`   Ether: ${fromWei(eth, 'ether')}`)
    messages.push(`   ERC20: ${Object.keys(erc20).length === 0 ? 'N/A' : ''}`)
    messages.push(
      ...Object.keys(erc20).map(addr => `      ${addr}: ${erc20[addr]}`),
    )
    messages.push(`   ERC721: ${Object.keys(erc721).length === 0 ? 'N/A' : ''}`)
    messages.push(
      ...Object.keys(erc721).map(addr => `      ${addr}: ${erc721[addr]}`),
    )
    messages.push(`Layer 2`)
    messages.push(`   Ether: ${fromWei(eth, 'ether')}`)
    messages.push(
      `   ERC20: ${Object.keys(spendables.erc20).length === 0 ? 'N/A' : ''}`,
    )
    messages.push(
      ...Object.keys(spendables.erc20).map(
        addr => `    ${addr} : ${spendables.erc20[addr]}`,
      ),
    )
    messages.push(
      `   ERC721: ${Object.keys(spendables.erc721).length === 0 ? 'N/A' : ''}`,
    )
    messages.push(
      ...Object.keys(spendables.erc721).map(
        addr => `    ${addr} : ${spendables.erc721[addr]}`,
      ),
    )
    this.print(messages.join('\n'))
    const { choice } = await this.ask({
      type: 'select',
      name: 'choice',
      initial: 0,
      message: 'What do you want to do?',
      choices: [
        { title: 'Go to top menu', value: AppMenu.TOP_MENU },
        { title: 'Deposit', value: AppMenu.DEPOSIT },
        { title: 'Transfer', value: AppMenu.TRANSFER },
        { title: 'Withdraw', value: AppMenu.WITHDRAW },
      ],
    })
    return { next: choice, context: { ...context, balance, spendables } }
  }
}