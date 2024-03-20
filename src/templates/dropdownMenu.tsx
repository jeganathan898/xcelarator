import { Grow, ClickAwayListener, MenuList, MenuItem } from "@mui/material"
import { useRef, useEffect, useState } from "react"
import { Button, DropdownMenuStyle, PopperStyle } from "../assets/styles"
import { IDropdown } from "../interface"

export default function DropdownMenu(props: IDropdown) {
  const { content, buttonProps, options } = props
  const anchorRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const closeHandler = () => setOpen(false)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    closeHandler()
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault()
      closeHandler()
    } else if (event.key === "Escape") {
      closeHandler()
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }
    prevOpen.current = open
  }, [open])

  return (
    <>
      <Button
        ref={anchorRef}
        {...buttonProps}
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {content}
      </Button>

      <PopperStyle open={open} anchorEl={anchorRef.current} placement="bottom-start" transition disablePortal>
        {({ TransitionProps, placement }: any) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <DropdownMenuStyle>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {options.map((item: any, i: number) => {
                    return (
                      <MenuItem key={i} onClick={handleClose}>
                        {item.label}
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </ClickAwayListener>
            </DropdownMenuStyle>
          </Grow>
        )}
      </PopperStyle>
    </>
  )
}
