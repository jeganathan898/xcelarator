import { TooltipProps } from "@mui/material"
import { IFormFields } from "../../interface"

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string
      secondary: string
      tertiary: string
      tertiaryLight: string
      black: string
      white: string
      txtPrimary: string
      txtSecondary: string
      txtTertiary: string
      greyPrimary: string
      greySecondary: string
      red: string
    }
    shadow: {
      primary: string
      secondary: string
    }
    border: {
      primary: string
      secondary: string
    }
    background: {
      bodyBg: string
      gradient: string
    }
  }
}
export interface ISideNav {
  $collapse: boolean
}
export interface IMainContent {
  $collapse: boolean
}
export interface IHeader {
  $collapse: boolean
}
export interface IImgTag {
  $imgfit: "contain" | "cover"
}
export interface IButton {
  $variant: "smooth" | "reflex_primary" | "reflex_secondary" | "raised"
  $icon?: "left" | "right"
  $size?: "small" | "medium" | "large"
}
export interface IPageContent {
  $size?: "medium" | "small" | "large"
}
export interface IPageHeader {
  $size?: "medium" | "small" | "large"
}
export interface IFormInput {
  $error?: boolean
  $type?: IFormFields
}
export interface IIconButton {
  $variant: "primary" | "danger" | "info"
}
export interface ITooltip {
  content: any
  icon?: any
  placement: TooltipProps["placement"]
  infoIcon?: boolean
}
