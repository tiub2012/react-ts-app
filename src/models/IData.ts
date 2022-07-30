export interface IData {
  title: string
  subtitle: string
  link: ILink
  data: IItem[]
}

interface ILink {
  show: boolean
  titleBtn: string
  subtitleBtn: string
  imgBtn: string
  link: string
}

interface IItem {
  through: boolean
  type: string
  typeText: string
  titleBtn: string
  subtitleBtn: string
  title: string
  subTitle: string
  imgFon: string,
  imgBtn: string
  durationText: string
  source: string
  recommendations: string
  text: string
  imageBook?: string
  poster?: string
}