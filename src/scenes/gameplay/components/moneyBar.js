import { TEXT_STYLE } from '../../../utils/style.js'
import { MONEY_CONFIG } from '../../../utils/gameConfig.js'

export const loadMoneyBar = (app, resources) => {
  const moneyBar = new PIXI.Container()
  moneyBar.position.set(1130,490)

  const coin = new PIXI.Sprite(resources.coin.texture)
  moneyBar.addChild(coin)

  const moneyBackground = new PIXI.Sprite(resources.moneyBackground.texture)
  moneyBackground.anchor.set(0,0.5)
  moneyBackground.position.set(250, 35)
  moneyBar.addChild(moneyBackground)

  const moneyText = new PIXI.Text('MONEY :', TEXT_STYLE.SUBHEADER_BLACK)
  moneyText.anchor.set(0,0.5)
  moneyText.position.set(87, 35)
  moneyBar.addChild(moneyText)

  const marbleText = new PIXI.Text('MARBLE', TEXT_STYLE.SUBHEADER_BLACK)
  marbleText.anchor.set(0,0.5)
  marbleText.position.set(561, 35)
  moneyBar.addChild(marbleText)

  const money = new PIXI.Text(MONEY_CONFIG.INIT, TEXT_STYLE.SUBHEADER_BLACK)
  money.anchor.set(0.5,0.5)
  money.position.set(393, 35)
  moneyBar.addChild(money)

  // set instance
  moneyBar.money = money

  // // set function
  moneyBar.setMoney = (money) => {
    moneyBar.money.text = money
  }

  app.stage.addChild(moneyBar)

  return moneyBar
}

export default loadMoneyBar