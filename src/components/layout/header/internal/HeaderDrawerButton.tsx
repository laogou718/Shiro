'use client'

import { atom } from 'jotai'

import { PresentSheet } from '~/components/ui/sheet'
import { useIsClient } from '~/hooks/common/use-is-client'

import { HeaderActionButton } from './HeaderActionButton'
import { HeaderDrawerContent } from './HeaderDrawerContent'

export const drawerOpenAtom = atom(false)
export const HeaderDrawerButton = () => {
  const isClient = useIsClient()
  const ButtonElement = (
    <HeaderActionButton>
      <i className="icon-[mingcute--menu-line]" />
    </HeaderActionButton>
  )
  if (!isClient) return ButtonElement

  return (
    <PresentSheet content={<HeaderDrawerContent />}>
      {ButtonElement}
    </PresentSheet>
  )
}
