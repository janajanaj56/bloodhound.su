import type { JSX } from 'preact/compat'
import { IconTelegram, IconGitHub, IconWakatime, IconSteam, IconInstagram, IconTikTok, IconMusic, IconDonate, IconTON, IconSoundCloud, IconDataAnalysis } from './icons'

export interface LinkItem {
  id: string
  text?: string
  url: string
  photoUrl: string
  icon: JSX.Element
  isIconCentered?: boolean
  description?: string
  shouldOpenInNewTab?: boolean
}

export const LINKS: LinkItem[] = [
  { id: 'telegram', text: 'telegram', description: 'my telegram', url: 'https://t.me/terracters', photoUrl: 'https://i.pinimg.com/736x/0f/73/47/0f7347f3bcab6e598e7b6e7024179230.jpg', icon: <IconTelegram /> },
  { id: 'tiktok', text: 'tiktok', description: 'my tiktok', url: 'https://www.tiktok.com/@terracters', photoUrl: 'https://i.pinimg.com/736x/5d/94/34/5d9434d4ebd4aceee88face1cd31c1c7.jpg', icon: <IconTikTok /> },
  { id: 'donate', text: 'donate', description: 'support me', url: 'https://t.me/send?start=IVO0jJdxFVVf', photoUrl: 'https://i.pinimg.com/736x/06/23/a8/0623a892b59d0dfd1043d4ccd15e69b7.jpg', icon: <IconDonate /> },
  { id: 'ton', text: 'TON Address', description: 'bloodhound.ton', url: 'ton://transfer/UQA7GaTreMpkP9S3aIwUsnccOMAPY8Y-iX0Px5zVhJZ3okVh', photoUrl: 'https://i.pinimg.com/736x/66/92/57/669257f859b8d233c5101f78d8cb6638.jpg', icon: <IconTON /> },
  { id: 'music', text: 'SoundCloud', description: 'my playlist', url: 'https://on.soundcloud.com/f0CxZenHklaphK6zuM', photoUrl: 'https://i.pinimg.com/736x/bb/d7/01/bbd70137d56684a0b64ad7f8e8abba43.jpg', icon: <IconSoundCloud /> },
  { id: 'crypto', text: 'Metier', description: 'Inet & Data Analysing', url: '#', photoUrl: 'https://i.pinimg.com/736x/ca/a1/63/caa163d4cb03824400479180708144cd.jpg', icon: <IconDataAnalysis /> },
]


