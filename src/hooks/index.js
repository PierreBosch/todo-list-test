import { TaskProvider } from "./task";

const AppProvider = ({ children }) => (
  <>
    <TaskProvider>{children}</TaskProvider>
  </>
);

export default AppProvider;