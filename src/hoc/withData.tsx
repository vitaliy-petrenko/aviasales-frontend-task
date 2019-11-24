import React from 'react'
import { IFetchingStatuses } from '../store/types'
import Error from '../components/ui/common/Error'
import Button from '../components/ui/forms/Button'
import { useTranslation } from 'react-i18next'

export interface IWithData {
  fetch: () => any
  reset: () => any,
  statuses: IFetchingStatuses
}

const withData = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & IWithData> {
    componentDidMount(): void {
      this.props.fetch()
    }

    componentWillUnmount(): void {
      this.props.reset()
    }

    render() {
      const
        { fetch, reset, statuses, ...props } = this.props,
        childProps = { statuses, ...props }

      return (
        <>
          {statuses.isError ? (
            <Reload reload={fetch}/>
          ) : (
            <Component {...childProps as P} />
          )}
        </>
      )
    }
  }

interface IReloadProps {
  reload: () => any
}

const Reload: React.FC<IReloadProps> = ({ reload }) => {
  const [t] = useTranslation()

  return (
    <Error>
      <Button onClick={reload}>
        {t('labels.reload')}
      </Button>
    </Error>
  )
}

export default withData
