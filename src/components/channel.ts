import * as PIXI from 'pixi.js'
import { TEXT_STYLE } from '../constants/style'
import { Channel } from '../types'

const loadChannel = (
  resources: PIXI.IResourceDictionary,
  channelConfig: Channel,
  isAvailable: boolean,
) => {
  let channel = new PIXI.Container()

  let channelName = new PIXI.Text(
    channelConfig.name,
    isAvailable ? TEXT_STYLE.BODY_THAI : TEXT_STYLE.BODY_THAI_CHARCOAL,
  )
  let channelBg = isAvailable
    ? new PIXI.Sprite(resources['channels/avail-channel-bg'].texture)
    : new PIXI.Sprite(resources['channels/unavail-channel-bg'].texture)

  channelName.anchor.set(0.5, 0)
  channelName.position.set(channelBg.width / 2, 5)
  channel.addChild(channelName)

  channelBg.position.set(0, channelName.height + 8)
  channel.addChild(channelBg)

  let audioIcon = channelConfig.audio
    ? new PIXI.Sprite(resources['cards/avail-volume-big'].texture)
    : new PIXI.Sprite(resources['cards/not-avail-volume-big'].texture)
  audioIcon.width = 30
  audioIcon.height = 30
  audioIcon.position.set(17, channelBg.y + channelBg.height + 10)
  channel.addChild(audioIcon)

  let visualIcon = channelConfig.visual
    ? new PIXI.Sprite(resources['cards/avail-img-big'].texture)
    : new PIXI.Sprite(resources['cards/not-avail-img-big'].texture)
  visualIcon.width = 30
  visualIcon.height = 30
  visualIcon.position.set(audioIcon.x + audioIcon.width + 23, audioIcon.y)
  channel.addChild(visualIcon)

  let textIcon = channelConfig.text
    ? new PIXI.Sprite(resources['cards/avail-text-big'].texture)
    : new PIXI.Sprite(resources['cards/not-avail-volume-big'].texture)
  textIcon.width = 30
  textIcon.height = 30
  textIcon.position.set(visualIcon.x + visualIcon.width + 23, audioIcon.y)
  channel.addChild(textIcon)

  let percentageText = new PIXI.Text(
    channelConfig.percentage + '%',
    isAvailable ? TEXT_STYLE.BODY_THAI : TEXT_STYLE.BODY_THAI_CHARCOAL,
  )
  percentageText.anchor.set(0.5, 0)
  percentageText.position.set(channelBg.width / 2, channelBg.y + 20)
  channel.addChild(percentageText)

  return channel
}

export default loadChannel