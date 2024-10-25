import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { TooltipArrow, TooltipContent, TooltipTrigger } from './styles'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface TooltipComponentProps
  extends ComponentProps<typeof Tooltip.Root> {
  disponibility: boolean
  date: Date
}

export const TooltipComponent = (props: TooltipComponentProps) => {
  const day = format(props.date, 'dd', { locale: ptBR })
  const month = format(props.date, 'LLLL', { locale: ptBR })
  return (
    <Tooltip.Provider>
      <Tooltip.Root {...props}>
        <TooltipTrigger disabled={!props.disponibility}>{day}</TooltipTrigger>
        <Tooltip.Portal>
          {props.disponibility ? (
            <TooltipContent>
              <Text>
                {day} de {month} - Disponível
              </Text>
              <TooltipArrow />
            </TooltipContent>
          ) : (
            <TooltipContent>
              <Text>
                {day} de {month} - Indisponível
              </Text>
              <TooltipArrow />
            </TooltipContent>
          )}
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
