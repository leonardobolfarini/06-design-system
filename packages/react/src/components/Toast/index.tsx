import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { ToastRoot, ToastInfos } from './styles'
import { colors } from '@hakari-ui-design-system/tokens'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface ToastComponentProps {
  data: Date
}

export const ToastComponent = ({ data }: ToastComponentProps) => {
  return (
    <Toast.Provider duration={5000000}>
      <ToastRoot>
        <ToastInfos>
          <Toast.Title asChild>
            <Heading>Agendamento realizado</Heading>
          </Toast.Title>
          <Toast.Description>
            <Text color={'gray'}>
              {format(data, 'eeee', { locale: ptBR })},{' '}
              {format(data, 'd', { locale: ptBR })} de{' '}
              {format(data, 'MMMM', { locale: ptBR })} às{' '}
              {format(data, 'HH', { locale: ptBR })}h
            </Text>
          </Toast.Description>
        </ToastInfos>

        <Toast.Close asChild>
          {
            <X
              height={20}
              width={20}
              weight="bold"
              color={colors.gray200}
              cursor={'pointer'}
            />
          }
        </Toast.Close>
      </ToastRoot>

      <Toast.Viewport />
    </Toast.Provider>
  )
}

ToastComponent.displayName = 'ToastComponent'
