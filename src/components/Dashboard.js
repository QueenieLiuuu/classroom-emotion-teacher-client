import React from 'react';
import { Layout } from 'antd';
import './Dashboard.css';
import ClassCard from './ClassCard';
import AnalysisSection from './AnalysisSection';
import ScoreChart from './ScoreChart';

const { Header, Content } = Layout;

function Dashboard() {
  return (
    <div>
      <Layout>
        <Header className="dashboard_header">
          <div>Dashboard</div>
          <div>Teacher Menu</div>
        </Header>
      </Layout>
      <Content className="dashboard_content">
        <ClassCard />
        <AnalysisSection />
        <ScoreChart />
      </Content>
    </div>
  );
}

export default Dashboard;