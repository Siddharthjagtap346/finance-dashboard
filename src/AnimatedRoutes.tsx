import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import InsightsPage from "./pages/InsightsPage";
import Settings from "./pages/Settings";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          
          <Route
            path="/"
            element={
              <PageWrapper>
                <Dashboard />
              </PageWrapper>
            }
          />

          <Route
            path="/transactions"
            element={
              <PageWrapper>
                <Transactions />
              </PageWrapper>
            }
          />

          <Route
            path="/insights"
            element={
              <PageWrapper>
                <InsightsPage />
              </PageWrapper>
            }
          />

          <Route
  path="/settings"
  element={
    <PageWrapper>
      <Settings />
    </PageWrapper>
  }
/>

        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}