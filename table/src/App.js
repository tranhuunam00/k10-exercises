function App() {
  const [stateGlobal, dispathGlobal] = useContext(UserContext);
  return (
    <div>
      <ListUser/>
      {stateGlobal.isOpenModal && <Modal />}
    </div>
  );
}
const MyApp = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default MyApp;