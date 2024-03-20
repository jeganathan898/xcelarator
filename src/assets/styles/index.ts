import { createGlobalStyle, styled } from "styled-components"
import {
  IButton,
  IFormInput,
  IHeader,
  IIconButton,
  IImgTag,
  IMainContent,
  IPageContent,
  IPageHeader,
  ISideNav,
} from "./interface"
import { NavLink } from "react-router-dom"
import {
  d_font_1,
  formFieldHeight,
  red,
  lightRed,
  sidebarWidth,
  trans_1,
  white,
  green,
  d_font_2,
  headerHeight,
  mainMenuWidth,
} from "./themeColor"
import "react-datepicker/dist/react-datepicker.css"
import { Accordion, Box, Popper, TextField, Tooltip } from "@mui/material"
import bg from "../img/bg.jpg"

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Poppins', sans-serif;
        font-size:${d_font_1};
        background:${(props) => props.theme.background.bodyBg};
        overflow-y: hidden;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'League Spartan', sans-serif;
        color:${(props) => props.theme.color.txtPrimary}
    }
    p{
        color:${(props) => props.theme.color.txtSecondary}
    }
    input{
        font-size:${d_font_1};
        &:focus{
            outline:none;
        }
    }
    button{
      cursor:pointer;
    }
    .mb_0{
      margin-bottom:0px !important;
    }
    .MuiAutocomplete-paper{
      box-shadow:0px 4px 10px rgb(0 0 0/0.1) !important;
      border-radius:15px !important;
      .MuiAutocomplete-option[aria-selected="true"]{
        background-color:${(props) => props.theme.color.secondary} !important;
      }
    }
    .MuiAutocomplete-root{
      transition-duration: ${trans_1};
      border-radius:25px;
      position:relative;
      &.focus_shadow{
        &.Mui-focused{
          box-shadow: 0px 0px 0px 3px rgb(0 0 0/0.05);
          .delete {
            color: ${red};
          }
          .edit {
            color: ${(props) => props.theme.color.primary};
          }
        }
      }
    }
    .MuiPopper-root{
      &.MuiTooltip-popper{
        .MuiTooltip-tooltip{
          background:${(props) => props.theme.color.white};
          box-shadow:0px 3px 5px rgb(0 0 0/0.1);
          color:${(props) => props.theme.color.txtSecondary};
          padding:7px 10px;
        }
      }
    }
    input{
      &::placeholder {
        color: ${(props) => props.theme.color.greyPrimary};
        opacity: 1;
      }
      
      &::-ms-input-placeholder {
        color:  ${(props) => props.theme.color.greyPrimary};
      }
    }
`
export const ImgTag = styled.img<IImgTag>`
  object-position: center;
  display: block;
  ${(props) =>
    props.$imgfit === "cover" &&
    `
    object-fit: cover;
`}
  ${(props) =>
    props.$imgfit === "contain" &&
    `
    object-fit: contain;
`}
`
export const TooltipStyle = styled(Tooltip)`
  &.MuiSvgIcon-root {
    color: ${(props) => props.theme.color.greyPrimary};
    font-size: 18px;
  }
`
export const Button = styled.button<IButton>`
  display: flex;
  padding: ${(props) =>
    props.$size === "medium" ? "8px 20px" : props.$size === "small" ? "5px 20px" : "10px 20px"};
  border: none;
  align-items: center;
  justify-content: center;
  width: max-content;
  font-weight: 500;
  font-size: ${(props) => (props.$size === "small" ? d_font_1 : "14px")};
  border-radius: 30px;
  transition-duration: ${trans_1};

  ${(props) =>
    props.$variant === "raised" &&
    `
    background:${props.theme.color.greySecondary};
    border:none;
    box-shadow:0px 4px 10px rgba(0, 0, 0, 0.15);
  `}

  ${(props) =>
    props.$variant === "smooth" &&
    `
    background:${props.theme.color.secondary};
    color:${props.theme.color.primary};
    box-shadow:0px 4px 10px rgba(74, 134, 216, 0.3);
  `}

  ${(props) =>
    props.$variant === "reflex_primary" &&
    `
    background:${props.theme.color.primary};
    color:${props.theme.color.white};
    box-shadow:0px 4px 10px rgba(74, 134, 216, 0.3);
  `}

  ${(props) =>
    props.$variant === "reflex_secondary" &&
    `
    background:${props.theme.color.tertiary};
    color:${props.theme.color.white};
    box-shadow:0px 4px 10px rgb(243 106 62 / 30%);
  `}

  ${(props) =>
    props.$icon &&
    `
    .icon{
      font-size:${props.$size === "medium" ? "17px" : props.$size === "small" ? "15px" : "18px"};
    }
  `}

  ${(props) =>
    props.$icon === "left" &&
    `
    .icon{
      margin-right:5px;
    }
  `}
  ${(props) =>
    props.$icon === "right" &&
    `
    .icon{
      margin-left:5px;
      font-size:18px;
    }
  `}

  &:active {
    transform: scale(0.8);
  }
`
export const IconButton = styled.button<IIconButton>`
  border: none;
  padding: 4px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  transition-duration: ${trans_1};
  svg {
    font-size: 16px;
  }
  ${(props) =>
    props.$variant === "primary" &&
    `
     background:${props.theme.color.secondary};
     color:${props.theme.color.primary};
     &:hover{
      background:${props.theme.color.primary};
      box-shadow:0px 0px 0px 4px ${props.theme.color.secondary};
      color:${white};
     }
  `}
  ${(props) =>
    props.$variant === "danger" &&
    `
    background:${lightRed};
    color:${red};
    &:hover{
      background:${red};
      box-shadow:0px 0px 0px 4px ${lightRed};
      color:${white};
     }
  `}
  ${(props) =>
    props.$variant === "info" &&
    `
    background:${props.theme.color.tertiaryLight};
    color:${props.theme.color.tertiary};
    &:hover{
      background:${props.theme.color.tertiary};
      box-shadow:0px 0px 0px 4px ${props.theme.color.tertiaryLight};
      color:${white};
     }
  `}

  &:active {
    transform: scale(0.8);
  }
`
export const ActionButtonRow = styled(Box)`
  display: flex;
  align-items: center;
  button {
    margin-right: 12px;
    &:last-child {
      margin-right: 0px;
    }
  }
`
export const LogoSec = styled.div`
  ${ImgTag} {
    width: 135px;
    height: 30px;
  }
`
export const LayoutStyle = styled.div``
export const SideNavStyle = styled.div<ISideNav>`
  background: ${(props) => props.theme.color.white};
  height: 100%;
  width: ${(props) => (props.$collapse ? sidebarWidth : 70)}px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  transition-duration: ${trans_1};
  box-shadow: 2px 0px 25px rgb(0 0 0/0.1);
`
export const BrandSection = styled.div`
  padding: 15px;
  img {
    width: 100%;
    height: 30px;
  }
`
export const SideNavInner = styled.div`
  height: calc(100% - ${headerHeight}px);
  display: flex;
  align-items: flex-start;
`
export const MainMenuContainer = styled.div`
  background: ${(props) => props.theme.background.gradient};
  height: 100%;
`
export const MainMenuRow = styled.ul``
export const MainMenuList = styled.li`
  display: flex;
`
export const MainMenuLink = styled(NavLink)`
  width: ${mainMenuWidth}px;
  height: 65px;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: ${trans_1};
  color: ${white};
  .icon {
    display: flex;
    justify-content: center;
  }
  .label {
    font-size: 12px;
    font-family: "League Spartan", sans-serif;
  }
  &.active,
  &.active:hover {
    background: ${(props) => props.theme.color.white};
    color: ${(props) => props.theme.color.primary};
    .icon {
      svg {
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
`
export const SubMenuContainer = styled.div`
  width: calc(100% - ${mainMenuWidth}px);
  height: 100%;
  padding: 0px 10px 40px 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.secondary};
    }
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.color.primary};
  }
`
export const SubMenuRow = styled.ul`
  width: 100%;
`
export const SubMenuList = styled.li`
  list-style: none;
  &:last-child {
    margin-bottom: 0;
  }
`
export const SubMenuLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => props.theme.color.txtSecondary};
  transition-duration: ${trans_1};
  font-size: 15px;
  span {
    font-family: "League Spartan", sans-serif;
  }
  .icon {
    display: flex;
    margin-right: 15px;
    svg {
      font-size: 18px;
    }
  }
  .label {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &.active,
  &.active:hover {
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
    .icon {
      svg {
        color: ${(props) => props.theme.color.primary} !important;
      }
    }
  }

  &:hover {
    background: ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.primary};
    .icon {
      svg {
        color: ${(props) => props.theme.color.primary} !important;
      }
    }
  }
`
export const HeaderStyle = styled.div<IHeader>`
  width: calc(100% - ${(props) => (props.$collapse ? sidebarWidth : mainMenuWidth)}px);
  margin-left: ${(props) => (props.$collapse ? sidebarWidth : mainMenuWidth)}px;
  padding: 10px 25px;
  display: flex;
  justify-content: space-between;
  height: ${headerHeight}px;
  transition-duration: ${trans_1};
`
export const SearchBar = styled.div`
  position: relative;
  position: relative;
  width: 400px;
  height: 40px;
  input {
    background: #ffffff;
    border-radius: 30px;
    border: none;
    height: 100%;
    width: 100%;
    padding: 0px 10px 0px 45px;
    font-size: ${d_font_2};
    transition-duration: ${trans_1};
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 4px rgb(0 0 0/0.02);
    }
  }
  .search_icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }
`
export const HeaderMenu = styled.div`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`
export const NotifcationButton = styled.button`
  border: none;
  background: unset;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${(props) => props.theme.color.txtSecondary};
  transition-duration: ${trans_1};
  .unread_count {
    position: absolute;
    top: 0;
    right: 0;
    background: ${(props) => props.theme.color.red};
    color: ${white};
    font-weight: 600;
    font-size: 11px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 4px 5px rgb(0 0 0/0.2);
  }
  svg {
    font-size: 28px;
  }

  &:hover {
    background: ${(props) => props.theme.color.secondary};
    svg {
      color: ${(props) => props.theme.color.primary};
    }
  }
`
export const AdminProfButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  transition-duration: ${trans_1};
  border: 4px solid ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 0px 4px rgb(0 0 0/0.15);
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.color.secondary};
  }
`
export const MainContentSection = styled.div<IMainContent>`
  width: calc(100% - ${(props) => (props.$collapse ? sidebarWidth : mainMenuWidth)}px);
  margin-left: ${(props) => (props.$collapse ? sidebarWidth : mainMenuWidth)}px;
  padding: 20px 25px 25px;
  height: calc(100vh - ${headerHeight}px);
  overflow-y: auto;
  position: relative;
  transition-duration: ${trans_1};

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.tertiary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.color.tertiary};
  }
`
export const EmptyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    text-align: center;
    img {
      width: 30%;
      min-width: 350px;
      max-width: 500px;
      margin: 0px auto 35px;
    }
    p {
      margin-bottom: 20px;
    }
    ${Button} {
      margin: auto;
    }
  }
`
export const PageHeader = styled(Box)<IPageHeader>`
  margin: 0px auto 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .left_sec {
    width: 50%;
  }
  .right_sec {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 1600px) {
    width: ${(props) => (props.$size === "large" ? "100%" : "75%")};
  }
  ${(props) =>
    props.$size === "medium" &&
    `
      width:65%;
  `}
  ${(props) =>
    props.$size === "small" &&
    `
    width:45%;
  `}

  .page_title {
    font-size: 24px;
    font-weight: 700;
  }
`
export const PageContent = styled(Box)<IPageContent>`
  margin: auto;
  @media (min-width: 1600px) {
    width: ${(props) => (props.$size === "large" ? "100%" : "75%")};
  }
  ${(props) =>
    props.$size === "medium" &&
    `
      width:65%;
  `}
  ${(props) =>
    props.$size === "small" &&
    `
    width:40%;
  `}
`
export const PageCard = styled(Box)`
  padding: 25px;
  background: ${(props) => props.theme.color.white};
  border-radius: 15px;
  box-shadow: 0px 5px 12px rgb(0 0 0/0.1);
`
export const PageSubtitle = styled(Box)`
  border-bottom: 1px solid ${(props) => props.theme.border.primary};
  padding-bottom: 15px;
  margin-bottom: 25px;
  h4 {
    font-size: 18px;
  }
`
export const StaticTable = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  th {
    background: ${(props) => props.theme.background.bodyBg};
  }
  th {
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  td,
  th {
    padding: 15px;
    &:first-child {
      text-align: left;
    }
  }
`
export const InputAction = styled.button`
  border: none;
  padding: 5px;
  height: 100%;
  background: unset;
  align-items: center;
  display: flex;
  color: ${(props) => props.theme.color.greyPrimary};
  transition-duration: ${trans_1};
  svg {
    font-size: 20px;
  }
  &.success {
    &:hover {
      color: ${green};
    }
  }
  &.danger {
    &:hover {
      color: ${red};
    }
  }
  &.info {
    &:hover {
      color: ${(props) => props.theme.color.primary};
    }
  }
`
export const InputActionRow = styled.div`
  position: absolute;
  height: 100%;
  right: 0px;
  top: 0;
  display: flex;
  align-items: center;
  padding-right: 10px;
  z-index: 2;
`
export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.txtSecondary};
  .required {
    color: ${red};
  }
  ${TooltipStyle} {
    margin-left: 10px;
  }
`
export const FormHint = styled.div`
  font-size: 14px;
  color: ${red};
  margin-top: 8px;
`
export const FormControl = styled(Box)`
  width: 100%;
  margin-bottom: 16px;
`
export const FormInput = styled.div<IFormInput>`
  position: relative;
  input,
  textarea {
    border: none;
    width: 100%;
    padding: 10px 75px 10px 15px;
    border-radius: 25px;
    transition-duration: ${trans_1};
    background: ${(props) => props.theme.color.greySecondary};

    &:focus {
      box-shadow: 0px 0px 0px 3px rgb(0 0 0/0.05);
      outline: none;
    }
    &:focus + ${InputActionRow} {
      ${InputAction} {
        &.danger {
          color: ${red};
        }
        &.info {
          color: ${(props) => props.theme.color.primary};
        }
      }
    }
  }
  ${(props) =>
    props.$error &&
    `
  input, textarea{
    border:1px solid ${red};
    &:focus {
      box-shadow: 0px 0px 0px 4px rgb(233 0 0/0.04);
    }
  }
  `}

  ${(props) =>
    props.$type === "text" &&
    `  
    input{
      height: ${formFieldHeight}px;
      &[aria-expanded="true"]{
        background:${props.theme.color.white};
      }
    }    
  `}

  ${(props) =>
    props.$type === "textarea" &&
    `  
    textarea{
      padding-right:15px;
    }    
  `}
  

  ${(props) =>
    props.$type === "datePicker" &&
    `   
    background:${props.theme.color.greySecondary};
    border-radius: 25px;
    input{
      background: unset;
      height: ${formFieldHeight}px;
    }
  `}
`
export const FormDatePicker = styled.div`
  position: relative;
  border-radius: 25px;
  .input_icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: ${(props) => props.theme.color.txtTertiary};
    z-index: 0;
  }
  .react-datepicker-wrapper {
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    border: none;
    box-shadow: 0px 4px 10px rgb(0 0 0/0.1);
    padding: 12px;
    border-radius: 20px;
    .react-datepicker__header {
      background: unset;
      border: none;
      .react-datepicker__current-month {
        margin-bottom: 10px;
      }
      .react-datepicker__day-names {
        .react-datepicker__day-name {
          font-weight: 700;
        }
      }
    }
    .react-datepicker__day,
    .react-datepicker__month-text,
    .react-datepicker__quarter-text,
    .react-datepicker__year-text {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      line-height: 30px;
    }
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--selected {
      background: ${(props) => props.theme.color.tertiary};
      color: ${white};
    }
    .react-datepicker__navigation--previous {
      top: 8px;
      left: 20px;
    }
    .react-datepicker__navigation--next {
      right: 20px;
      top: 8px;
    }
    .react-datepicker__day--outside-month {
      opacity: 0.5;
    }
  }
`
export const FormFileUpload = styled.div`
  input[type="file"] {
    &::file-selector-button {
      border-radius: 30px;
      padding: 0 16px;
      height: 40px;
      cursor: pointer;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.16);
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
      margin-right: 16px;
      transition: background-color 200ms;
    }
  }

  input[type="file"] {
    &::file-selector-button:hover {
      background-color: #f3f4f6;
    }
  }

  input[type="file"] {
    &::file-selector-button:active {
      background-color: #e5e7eb;
    }
  }
`
export const ToggleSwitch = styled.label`
  width: 45px;
  height: 25px;
  border-radius: 30px;
  cursor: pointer;
  display: inline-block;
  .toggleSlider {
    width: 45px;
    height: 25px;
    position: relative;
    display: inline-block;
    border-radius: 30px;
    background: ${(props) => props.theme.color.greyPrimary};
    will-change: transform;
    transition-duration: ${trans_1};
    box-shadow: inset 0px 0px 5px rgb(0 0 0/0.1);
    &:before {
      content: "";
      width: 18px;
      height: 18px;
      left: 5px;
      display: inline-block;
      background: ${(props) => props.theme.color.white};
      position: absolute;
      top: 49.5%;
      transform: translateY(-50%);
      z-index: 1;
      border-radius: 50%;
      will-change: transform;
      transition-duration: ${trans_1};
      box-shadow: 1px 1px 5px rgb(0 0 0/0.2);
    }
  }
  input {
    position: absolute;
    visibility: hidden;
    &:checked + .toggleSlider {
      background: ${green};
      &:before {
        background: ${white};
        left: calc(100% - 22px);
        transform: translateY(-50%);
      }
    }
  }
`
export const FormCheckBox = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 18px;
  width: 18px;
  border-radius: 50%;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 1px solid ${(props) => props.theme.border.primary};
    border-radius: 50%;
  }

  input:checked ~ .checkmark {
    background-color: ${(props) => props.theme.color.tertiary};
    border: 1px solid ${(props) => props.theme.color.tertiary};
    box-shadow: 0px 2px 5px ${(props) => props.theme.color.tertiary};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 50%;
    top: 43%;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    transform-origin: center center;
  }
`
export const FormLabelRow = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  ${FormLabel} {
    margin-bottom: 0px;
    cursor: pointer;
  }
  ${ToggleSwitch}, ${FormCheckBox} {
    margin-right: 15px;
  }
`
export const FormRadio = styled.label`
  display: inline-block;
  cursor: pointer;
  input[type="radio"] {
    -webkit-appearance: none;
    appearance: none;

    &:checked + .selected {
      background: ${(props) => props.theme.color.tertiaryLight};
      border: 1px solid ${(props) => props.theme.color.tertiary};
      color: ${(props) => props.theme.color.tertiary};
      font-weight: 500;
      box-shadow: 0px 4px 8px ${(props) => props.theme.color.tertiaryLight};
    }
  }
  .selected {
    padding: 10px 20px;
    display: inline-block;
    border-radius: 30px;
    min-width: 90px;
    text-align: center;
    transition-duration: ${trans_1};
    border: 1px solid ${(props) => props.theme.color.greySecondary};
    background: ${(props) => props.theme.color.greySecondary};
    box-shadow: 0px 4px 5px rgb(0 0 0/0.1);
    font-size: ${d_font_1};
  }
`
export const FormRadioRow = styled(Box)`
  ${FormRadio} {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`
export const FormTextField = styled(TextField)`
  .MuiInputBase-root {
    background: ${(props) => props.theme.color.greySecondary};
    font-size: inherit;
    &.MuiOutlinedInput-root {
      color: inherit;
      border-radius: 25px;
      padding: 3px 10px;
      .MuiButtonBase-root {
        &.MuiChip-root {
          svg {
            font-size: 18px;
          }
        }
        &.MuiAutocomplete-tag {
          height: 28px;
        }
      }
      .MuiAutocomplete-endAdornment {
        .MuiButtonBase-root {
          &:last-child {
            display: none;
          }
        }
      }

      .MuiOutlinedInput-input {
        &::placeholder {
          color: ${(props) => props.theme.color.greyPrimary};
          opacity: 1;
        }

        &::-ms-input-placeholder {
          color: ${(props) => props.theme.color.greyPrimary};
        }
      }

      .MuiOutlinedInput-notchedOutline {
        border: none;
      }
    }
  }
  .MuiInputBase-root.Mui-focused {
    background: ${(props) => props.theme.white};
    ${InputAction} {
      &.danger {
        color: ${red};
      }
      &.info {
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
`
export const FormDropdownOption = styled.li`
  background: ${(props) => props.theme.color.white};
  list-style: none;
  font-size: 14px;
  font-weight: 400;
`
export const FormInputEnable = styled.div`
  position: relative;
  width: 100%;
  input {
    border: none;
    background: unset;
    color: inherit;
    padding: 5px 100px 5px 0px;
    height: 35px;
    width: 100%;
    &:disbaled {
      background: unset;
      color: inherit;
    }

    &:hover {
      cursor: text;
    }

    &:focus + ${InputActionRow} {
      ${InputAction} {
        &.danger {
          color: ${red};
        }
        &.success {
          color: ${green};
        }
      }
    }
  }
  ${InputAction} {
    &.info {
      opacity: 0;
    }
  }
  &:hover {
    ${InputAction} {
      &.info {
        opacity: 1;
      }
    }
  }
`
export const AppendForm = styled(Box)`
  padding: 10px;
  border-radius: 35px;
  background: ${(props) => props.theme.color.greySecondary};
  border-radius: 35px;
  ${FormControl} {
    &:last-child {
      margin-bottom: 0px;
    }
    ${FormInput} {
      input {
        background: ${(props) => props.theme.color.white};
      }
    }
  }
`
export const LevelMindMap = styled(Box)`
  padding: 12px;
  border: 1px dashed ${(props) => props.theme.color.tertiary};
  border-radius: 15px;
  margin-top: 15px;

  ul {
    display: flex;
    li {
      list-style: none;
      &:before {
        content: "";
        border-left: 6px solid ${(props) => props.theme.color.tertiary};
        border-bottom: 6px solid transparent;
        border-top: 6px solid transparent;
        border-right: 0px solid transparent;
        height: 0;
        width: 0;
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
      }
      &:first-child {
        &:before {
          content: unset;
        }
      }

      span {
        background: ${(props) => props.theme.color.tertiaryLight};
        padding: 5px 10px;
        border-radius: 5px;
        display: inline-block;
      }
    }
  }
`
export const ButtonRow = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 25px;
  ${Button} {
    margin-right: 15px;
    &:last-child {
      margin-right: 0px;
    }
  }
`
export const PopperStyle = styled(Popper)`
  z-index: 5;
`
export const DropdownMenuStyle = styled.div`
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 10px rgb(0 0 0/0.15);
  border-radius: 15px;
  padding: 8px 2px 8px 0px;
  .MuiList-root {
    padding: 0px;
    overflow-y: auto;
    min-height: 100px;
    max-height: 150px;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.secondary};
      border-radius: 10px;
    }
    .MuiMenuItem-root {
      font-size: 13px;
    }
  }
`
export const TableSortArrow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  height: 28px;
  svg {
    width: 18px;
    height: 18px;
    opacity: 0.2;
    &.up {
      position: absolute;
      top: 0px;
      left: 0px;
    }
    &.down {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }
  }
  .sort_arrow {
    opacity: 1;
    color: ${(props) => props.theme.color.tertiary};
  }
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    tr {
      th {
        border-bottom: 1px solid ${(props) => props.theme.border.primary};
        .tableHeader {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;

          ${TableSortArrow} {
            margin-left: 15px;
          }
        }
        &:first-child {
          padding-left: 30px;
          .tableHeader {
            justify-content: flex-start;
          }
        }
        &:last-child {
          padding-right: 30px;
        }
      }
    }
  }
  tbody {
    tr {
      transition-duration: ${trans_1};
      td {
        border-bottom: 1px solid ${(props) => props.theme.border.secondary};
        text-align: center;
        padding: 10px;
        &:first-child {
          text-align: left;
          padding-left: 30px;
        }
        &:last-child {
          padding-right: 30px;
        }
      }
      &:hover {
        background: ${(props) => props.theme.color.greySecondary};
      }
    }
  }
`
export const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px 25px;
  h3 {
    font-size: 18px;
    font-weight: 600;
  }
`
export const ModuleCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 15px;
  background: ${(props) => props.theme.color.white};
  padding: 10px 20px;
  box-shadow: 0 0 0 4px ${(props) => props.theme.color.secondary};
  transition-duration: ${trans_1};
  font-size: 14px;
  &:hover {
    box-shadow: 0 4px 10px ${(props) => props.theme.color.secondary};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`
export const ModuleName = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  .name {
    margin-left: 15px;
  }
  .icon {
    img {
      width: 45px;
      height: 45px;
      object-fit: contain;
      object-position: center;
    }
  }
`
export const ModuleInputField = styled.div`
  width: 30%;
  input {
    font-size: 14px;
  }
`
export const ModuleAction = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const AccordionMenu = styled(Accordion)`
  &.MuiAccordion-root {
    &:before {
      background-color: unset;
    }
  }
  ${SubMenuLink} {
    .icon {
      svg {
        color: ${(props) => props.theme.color.greyPrimary};
      }
    }
  }
`
export const AccordionMenuLink = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  color: ${(props) => props.theme.color.txtSecondary};
  transition-duration: ${trans_1};
  font-size: 15px;
  background: unset;
  border: none;
  .title_sec {
    display: flex;
    align-items: center;
    .icon {
      display: flex;
      margin-right: 15px;
      svg {
        font-size: 18px;
      }
    }
    .title {
      font-family: "League Spartan", sans-serif;
    }
  }
  .expand_icon {
    display: flex;
    transition-duration: ${trans_1};
    transform: rotate(-90deg);
    transform-origin: center center;
    svg {
      font-size: 18px;
    }
  }
  &.active {
    color: ${(props) => props.theme.color.primary};
    .icon {
      svg {
        color: ${(props) => props.theme.color.primary};
      }
    }
    .expand_icon {
      transform: rotate(0deg);
    }
  }
`
export const AccordionDropdown = styled.div`
  background: ${(props) => props.theme.color.greySecondary};
  padding: 10px;
  border-radius: 10px;
`
export const SiteLoader = styled.div`
  svg.icon {
    width: 65px;
    height: 65px;
  }
  .dash {
    animation: dashArray 2s ease-in-out infinite, dashOffset 4s linear infinite;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }

    50% {
      stroke-dasharray: 0 359 1 0;
    }

    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }
`
export const SectionLoader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 50px);
  height: calc(100% - 50px);
  background: ${(props) => props.theme.color.white};
  z-index: 9;
`
export const PageLoader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.white};
  z-index: 99;
`
export const ImageSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  .img {
    width: 80%;
  }
`
export const AuthForm = styled.div`
  ${Button} {
    width: 100%;
  }
`
export const FormSection = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  padding: 0px 45px;
`
export const AuthLogo = styled.div`
  margin-bottom: 20px;
  img {
    width: 200px;
    display: block;
  }
`
export const AuthTitleSection = styled.div`
  margin-bottom: 25px;
  h3 {
    font-size: 26px;
    margin-bottom: 10px;
  }
`
export const AuthLayout = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
  min-height: 550px;
  box-shadow: 0px 5px 40px rgb(0 0 0/0.1);
  border-radius: 25px;
  margin-top:-50px;
  padding:40px 0px;
  border:5px solid rgb(255 255 255/0.7);
  &:before {
    content: "";
    backdrop-filter: blur(60px);
    background: rgb(255 255 255/0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 0;
    border-radius: 20px;
    box-shadow: inset 0px 0px 10px rgb(0 0 0/0.1);
  }
`
export const AuthBackground = styled.div`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 0;
  }
`
export const LinkSection = styled.div`
  margin-top: 25px;
  text-align:center;
  a {
    display:inline-block;
    text-decoration: none;
    color: ${props => props.theme.color.white};
    font-weight: 500;
    text-shadow: 0px 2px 3px rgb(0 0 0/0.3);
  }
  .forget_link{
    display:flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    &:before, &:after{
      content:"";
      background:${props => props.theme.color.white};
      display:inline-block;
      flex:1 1 0;
      height:1px;
    }
    &:before{
      margin-right:10px;
    }
    &:after{
      margin-left:10px;
    }
  }
`
export const AuthFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  color: ${(props) => props.theme.color.white};
  padding-bottom:15px;
`
