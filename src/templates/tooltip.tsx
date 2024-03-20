import { TooltipStyle } from "../assets/styles"
import { Fade } from "@mui/material"
import { ITooltip } from "../assets/styles/interface"
import { ErrorOutline } from "@mui/icons-material"

export default function Tooltip(props: ITooltip) {
  const { content, icon, placement, infoIcon } = props
  return (
    <TooltipStyle
      title={content}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 300 }}
      placement={placement}
    >
      {infoIcon ? <ErrorOutline /> : icon}
    </TooltipStyle>
  )
}
