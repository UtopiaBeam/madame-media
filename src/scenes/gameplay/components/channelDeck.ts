import * as PIXI from 'pixi.js'
import { CardType } from '../../../components/card'
import loadChannel from '../../../components/channel'
import { CHANNEL_COUNT, CHANNEL_ORDER } from '../../../constants/channels'
import { TEXT_STYLE } from '../../../constants/style'
import { Channel } from '../../../types'

interface ChannelDeckType extends PIXI.Container {
  setOnSelect: (boolean) => void
  insertCard: (channel: string, card: CardType) => void
  initChannels: (allChannels: Channel[]) => void
  updateChannels: (availableChannels: Channel[]) => void
}

export const loadChannelDeck = (resources: PIXI.IResourceDictionary) => {
  const channelDeck = new PIXI.Container() as ChannelDeckType
  channelDeck.position.set(97, 532)

  const channelText = new PIXI.Text('ช่องทางสื่อ', TEXT_STYLE.SUBHEADER_THAI)
  channelDeck.addChild(channelText)

  const overlay = new PIXI.Sprite(resources['art/overlay'].texture)
  overlay.position.set(-97, -532)
  overlay.visible = false
  channelDeck.addChild(overlay)

  const channelDeckBg = new PIXI.Sprite(resources['art/channel-deck-bg'].texture)
  channelDeckBg.position.set(0, channelText.y + channelText.height + 10)
  channelDeck.addChild(channelDeckBg)

  const channelPadding = 19
  const channelY = channelDeckBg.y + 10
  let prevChannelX = 37

  // Load channels
  const channelContainerArray = [] // might not be ordered
  const channelArray = []

  channelDeck.initChannels = (allChannels: Channel[]) => {
    for (let i = 0; i < CHANNEL_COUNT; i++) {
      const channelContainer = new PIXI.Container()
      channelContainer.x = prevChannelX
      channelContainer.y = channelY
      prevChannelX += channelPadding + 170
      channelDeck.addChild(channelContainer)
      channelContainerArray.push(channelContainer)
      channelArray.push(null)
    }
    allChannels.forEach((channel) => {
      const order = CHANNEL_ORDER[channel.name]
      const channelContainer = channelContainerArray[order]
      const channelObject = loadChannel(resources, channel, false)
      channelContainer.addChild(channelObject)
      channelArray[order] = channelObject
    })
  }

  // Call this method at initialization
  channelDeck.updateChannels = (availableChannels: Channel[]) => {
    availableChannels.forEach((channelConfig) => {
      const order = CHANNEL_ORDER[channelConfig.name]
      const channel = channelArray[order]

      channel.setIsAvailable(true)
    })
  }

  channelDeck.insertCard = (channelName: string, card: CardType) => {
    const order = CHANNEL_ORDER[channelName]
    const selectedChannel = channelArray[order]
    selectedChannel.setCard(card)
  }

  channelDeck.setOnSelect = (select: boolean) => {
    if (select) {
      overlay.visible = true
    } else {
      overlay.visible = false
    }
  }

  overlay.interactive = true
  overlay
    .on('mousedown', () => {
      overlay.visible = false
    })
    .on('touchstart', () => {
      overlay.visible = false
    })

  return {
    scene: channelDeck,
  }
}

export default loadChannelDeck
