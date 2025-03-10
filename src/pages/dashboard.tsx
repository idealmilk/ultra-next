import Layout from '@/components/Layout'
import PageHeader from '@/components/PageHeader'
import DashboardView from '@/views/DashboardView'

const DashboardPage = () => {
  return (
    <Layout>
      <PageHeader title="Dashboard" />

      <DashboardView />
    </Layout>
  )
}

export default DashboardPage