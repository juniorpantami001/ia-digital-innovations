
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { WalletProvider } from "./contexts/WalletContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BuyData from "./pages/BuyData";
import BuyAirtime from "./pages/BuyAirtime";
import CableTV from "./pages/CableTV";
import AirtimeToCash from "./pages/AirtimeToCash";
import Transactions from "./pages/Transactions";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NINStatus from "./pages/NINStatus";
import PaymentMethods from "./pages/PaymentMethods";
import APIKeys from "./pages/APIKeys";
import Transfer from "./pages/Transfer";
import NotFound from "./pages/NotFound";
import CustomerCare from "./pages/CustomerCare";
import ConfirmReceipt from "./pages/ConfirmReceipt";
import TransactionPreview from "./pages/TransactionPreview";
import ResetPin from "./pages/ResetPin";
import SetupSecurity from "./pages/SetupSecurity";
import ExamPins from "./pages/ExamPins";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <WalletProvider>
            <Toaster />
            <Sonner />
            <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/buy-data" 
                element={
                  <ProtectedRoute>
                    <BuyData />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/buy-airtime" 
                element={
                  <ProtectedRoute>
                    <BuyAirtime />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/cable-tv" 
                element={
                  <ProtectedRoute>
                    <CableTV />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/airtime-to-cash" 
                element={
                  <ProtectedRoute>
                    <AirtimeToCash />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/transactions" 
                element={
                  <ProtectedRoute>
                    <Transactions />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/history" 
                element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/nin-status" 
                element={
                  <ProtectedRoute>
                    <NINStatus />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/payment-methods" 
                element={
                  <ProtectedRoute>
                    <PaymentMethods />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/api-keys" 
                element={
                  <ProtectedRoute>
                    <APIKeys />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/transfer" 
                element={
                  <ProtectedRoute>
                    <Transfer />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/customer-care" 
                element={
                  <ProtectedRoute>
                    <CustomerCare />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/confirm-receipt" 
                element={
                  <ProtectedRoute>
                    <ConfirmReceipt />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/transaction-preview" 
                element={
                  <ProtectedRoute>
                    <TransactionPreview />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/reset-pin" 
                element={
                  <ProtectedRoute>
                    <ResetPin />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/setup-security" 
                element={
                  <ProtectedRoute>
                    <SetupSecurity />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/exam-pins" 
                element={
                  <ProtectedRoute>
                    <ExamPins />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          </WalletProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
