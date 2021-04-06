import { TEXT_STYLE } from '../../../utils/style.js'
import { CHANNEL } from '../../../utils/channel.js'
import { CARD } from '../../../utils/card.js'
import loadCard from '../../../components/Card.js'

const loadDuelChannel = (resources, channel, isButtom) => {
  const duelChannel = new PIXI.Container()

  const duelChannelBg = new PIXI.Sprite(resources.duelChannelBg.texture)
  const channelText = new PIXI.Text(channel.name, TEXT_STYLE.SUBHEADER_THAI)
  const padding = 20
  channelText.anchor.set(0.5,0)
  channelText.x = duelChannelBg.width/2
  if (isButtom) {
    channelText.y = duelChannelBg.y+duelChannelBg.height+padding
  } else {
    duelChannelBg.y = channelText.y+channelText.height+padding
  }
  duelChannel.addChild(duelChannelBg)
  duelChannel.addChild(channelText)

  duelChannel.bg = duelChannelBg
  
  return duelChannel
}

export const loadChannelContainer = ({resources, cardList , isButtom}) => {
  // have to set position outside
  const channelPadding = 25
  const channelContainer = new PIXI.Container()

  const channelList = []

  const channel0 = loadDuelChannel(resources,CHANNEL[0], isButtom)
  channel0.position.set(0,0)
  channelList.push(channel0)
  channelContainer.addChild(channel0)

  const channel1 = loadDuelChannel(resources,CHANNEL[1], isButtom)
  channel1.position.set(channel0.x+channel0.width+channelPadding,channel0.y)
  channelList.push(channel1)
  channelContainer.addChild(channel1)

  const channel2 = loadDuelChannel(resources,CHANNEL[2], isButtom)
  channel2.position.set(channel1.x+channel0.width+channelPadding,channel0.y)
  channelList.push(channel2)
  channelContainer.addChild(channel2)

  const channel3 = loadDuelChannel(resources,CHANNEL[3], isButtom)
  channel3.position.set(channel2.x+channel0.width+channelPadding,channel0.y)
  channelList.push(channel3)
  channelContainer.addChild(channel3)

  const channel4 = loadDuelChannel(resources,CHANNEL[4], isButtom)
  channel4.position.set(channel3.x+channel0.width+channelPadding,channel0.y)
  channelList.push(channel4)
  channelContainer.addChild(channel4)

  const channel5 = loadDuelChannel(resources,CHANNEL[5], isButtom)
  channel5.position.set(channel4.x+channel0.width+channelPadding,channel0.y)
  channelList.push(channel5)
  channelContainer.addChild(channel5)

  const channel6 = loadDuelChannel(resources,CHANNEL[6], isButtom)
  channel6.position.set(channel5.x+channel0.width+channelPadding,channel0.y)
  channelList.push(channel6)
  channelContainer.addChild(channel6)

  for (let i in cardList) {
    let temp = cardList[i]
    let card = loadCard(resources,CARD[temp.card].real,1)
    card.position.set(channelList[temp.channel].x,channelList[temp.channel].bg.y)
    card.width = channel0.bg.width
    card.height = channel0.bg.height
    channelContainer.addChild(card)
  }

  return channelContainer
}

export default loadChannelContainer