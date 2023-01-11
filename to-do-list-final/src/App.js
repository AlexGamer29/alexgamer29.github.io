import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  MaketodoList,
  TodoList,
  Reminders,
  Calendar,
  Collaboration,
  Explore,
  Learn,
  About,
  Login,
  SignUp,
  DashboardMain,
  UserProfile,
  ChangePassword,
} from "./pages";
import { AuthProvider } from "./utils/contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { DashboardBody } from "./components";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/make-todolist" element={<MaketodoList />} />
          <Route path="/to-do-list" element={<TodoList />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardMain />} />
          <Route path="/task_lists/:taskID/todos" element={<DashboardMain />} />
          <Route path="/task_lists/:taskID/todos/:todoId" element={<DashboardMain />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="//change-password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
